const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const PORT = 3000;
const JWT_SECRET = "supersecretkey"; // 🔒 replace with env variable in production

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ecolearn", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// ✅ User Schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    school: String,
    grade: String,
    userType: String
});
const User = mongoose.model("User", userSchema);

// ✅ User Progress Schema (FIXED)
const userProgressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
    lessonsProgress: {
        currentLessonId: String,
        completedLessons: [String], // Array of lesson IDs
        lastAccessed: { type: Date, default: Date.now }
    },
    gamesProgress: {
        currentGameId: String,
        currentLevel: { type: Number, default: 1 },
        highScores: { type: Map, of: Number }, // gameId: highScore
        lastPlayed: { type: Date, default: Date.now }
    },
    postsProgress: {
        lastReadPostId: String,
        readPosts: [String], // Array of post IDs
        lastAccessed: { type: Date, default: Date.now }
    }
});
const UserProgress = mongoose.model("UserProgress", userProgressSchema);

// ✅ Result Schema
const resultSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    game: String,
    score: Number,
    gameType: String,
    date: { type: Date, default: Date.now }
});
const Result = mongoose.model("Result", resultSchema);

// ✅ Authentication Middleware (NEW)
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) return res.status(401).json({ success: false, message: "Access token required" });
    
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ success: false, message: "Invalid token" });
        req.user = user;
        next();
    });
};

// ---------------- API Routes ---------------- //

// ✅ Signup
app.post("/api/signup", async (req, res) => {
    try {
        const { firstName, lastName, email, password, school, grade, userType } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.json({ success: false, message: "Email already exists" });
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            school,
            grade,
            userType
        });
        
        const savedUser = await newUser.save();
        
        // Create progress record for new user
        const newProgress = new UserProgress({
            userId: savedUser._id,
            lessonsProgress: {
                currentLessonId: null,
                completedLessons: []
            },
            gamesProgress: {
                currentGameId: null,
                highScores: new Map() // Initialize as Map
            },
            postsProgress: {
                lastReadPostId: null,
                readPosts: []
            }
        });
        await newProgress.save();
        
        res.json({ success: true, message: "User registered successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ✅ Login (FIXED)
app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.json({ success: false, message: "User not found" });
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.json({ success: false, message: "Invalid credentials" });
        
        // Get user progress
        let progress = await UserProgress.findOne({ userId: user._id });
        if (!progress) {
            // Create progress record if it doesn't exist
            progress = new UserProgress({
                userId: user._id,
                lessonsProgress: {
                    currentLessonId: null,
                    completedLessons: []
                },
                gamesProgress: {
                    currentGameId: null,
                    highScores: new Map() // Initialize as Map
                },
                postsProgress: {
                    lastReadPostId: null,
                    readPosts: []
                }
            });
            await progress.save();
        }
        
        // Convert Map to Object for JSON serialization
        const gamesProgress = {
            ...progress.gamesProgress.toObject(),
            highScores: Object.fromEntries(progress.gamesProgress.highScores)
        };
        
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
        res.json({
            success: true,
            message: "Login successful",
            token,
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                school: user.school,
                grade: user.grade,
                userType: user.userType
            },
            progress: {
                lessons: progress.lessonsProgress,
                games: gamesProgress,
                posts: progress.postsProgress
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ✅ Save Game Result (FIXED)
app.post("/api/results", authenticateToken, async (req, res) => {
    try {
        const { game, score, gameType, date } = req.body;
        const userId = req.user.id;
        
        const newResult = new Result({
            userId,
            game,
            score,
            gameType,
            date: date || new Date()
        });
        await newResult.save();
        
        // Update game progress
        const progress = await UserProgress.findOne({ userId });
        if (progress) {
            // Update high score if current score is higher
            const currentHighScore = progress.gamesProgress.highScores.get(game) || 0;
            if (score > currentHighScore) {
                progress.gamesProgress.highScores.set(game, score);
            }
            progress.gamesProgress.lastPlayed = new Date();
            await progress.save();
        }
        
        res.json({ success: true, message: "Result saved successfully", result: newResult });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error saving result" });
    }
});

// ✅ Get Results for a User (FIXED)
app.get("/api/results", authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;
        const results = await Result.find({ userId }).sort({ date: -1 });
        res.json({ success: true, results });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error fetching results" });
    }
});

// ✅ Update Lesson Progress (FIXED)
app.post("/api/progress/lessons", authenticateToken, async (req, res) => {
    try {
        const { lessonId, isCompleted } = req.body;
        const userId = req.user.id;
        
        let progress = await UserProgress.findOne({ userId });
        if (!progress) {
            return res.status(404).json({ success: false, message: "User progress not found" });
        }
        
        // Update current lesson
        progress.lessonsProgress.currentLessonId = lessonId;
        progress.lessonsProgress.lastAccessed = new Date();
        
        // If lesson is completed, add to completed lessons
        if (isCompleted && !progress.lessonsProgress.completedLessons.includes(lessonId)) {
            progress.lessonsProgress.completedLessons.push(lessonId);
        }
        
        await progress.save();
        res.json({ success: true, message: "Lesson progress updated", progress: progress.lessonsProgress });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error updating lesson progress" });
    }
});

// ✅ Update Game Progress (FIXED)
app.post("/api/progress/games", authenticateToken, async (req, res) => {
    try {
        const { gameId, level, highScore } = req.body;
        const userId = req.user.id;
        
        let progress = await UserProgress.findOne({ userId });
        if (!progress) {
            return res.status(404).json({ success: false, message: "User progress not found" });
        }
        
        // Update game progress
        progress.gamesProgress.currentGameId = gameId;
        if (level) progress.gamesProgress.currentLevel = level;
        progress.gamesProgress.lastPlayed = new Date();
        
        // Update high score if provided
        if (highScore) {
            const currentHighScore = progress.gamesProgress.highScores.get(gameId) || 0;
            if (highScore > currentHighScore) {
                progress.gamesProgress.highScores.set(gameId, highScore);
            }
        }
        
        await progress.save();
        
        // Convert Map to Object for JSON serialization
        const gamesProgress = {
            ...progress.gamesProgress.toObject(),
            highScores: Object.fromEntries(progress.gamesProgress.highScores)
        };
        
        res.json({ success: true, message: "Game progress updated", progress: gamesProgress });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error updating game progress" });
    }
});

// ✅ Update Posts Progress (FIXED)
app.post("/api/progress/posts", authenticateToken, async (req, res) => {
    try {
        const { postId, isRead } = req.body;
        const userId = req.user.id;
        
        let progress = await UserProgress.findOne({ userId });
        if (!progress) {
            return res.status(404).json({ success: false, message: "User progress not found" });
        }
        
        // Update posts progress
        progress.postsProgress.lastReadPostId = postId;
        progress.postsProgress.lastAccessed = new Date();
        
        // If post is read, add to read posts
        if (isRead && !progress.postsProgress.readPosts.includes(postId)) {
            progress.postsProgress.readPosts.push(postId);
        }
        
        await progress.save();
        res.json({ success: true, message: "Posts progress updated", progress: progress.postsProgress });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error updating posts progress" });
    }
});

// ✅ Get User Progress (FIXED)
app.get("/api/progress", authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;
        const progress = await UserProgress.findOne({ userId });
        
        if (!progress) {
            return res.status(404).json({ success: false, message: "User progress not found" });
        }
        
        // Convert Map to Object for JSON serialization
        const gamesProgress = {
            ...progress.gamesProgress.toObject(),
            highScores: Object.fromEntries(progress.gamesProgress.highScores)
        };
        
        res.json({
            success: true,
            progress: {
                lessons: progress.lessonsProgress,
                games: gamesProgress,
                posts: progress.postsProgress
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error fetching user progress" });
    }
});

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));