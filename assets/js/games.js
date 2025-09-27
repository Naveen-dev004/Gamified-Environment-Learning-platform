
        // Game data for different games
        const gameData = {
            'climate-quiz': {
                title: 'Climate Change Quiz',
                type: 'quiz',
                questions: [
                    {
                        question: "What is the primary cause of current climate change?",
                        options: [
                            "Volcanic eruptions",
                            "Human activities",
                            "Natural climate cycles",
                            "Solar radiation"
                        ],
                        correctAnswer: 1,
                        explanation: "The primary cause of current climate change is human activities, especially the burning of fossil fuels."
                    },
                    {
                        question: "Which greenhouse gas is most responsible for global warming?",
                        options: [
                            "Carbon dioxide",
                            "Methane",
                            "Nitrous oxide",
                            "Fluorinated gases"
                        ],
                        correctAnswer: 0,
                        explanation: "Carbon dioxide is the most significant greenhouse gas contributing to global warming."
                    },
                    {
                        question: "What is the goal of the Paris Agreement?",
                        options: [
                            "To eliminate all greenhouse gas emissions by 2030",
                            "To limit global warming to well below 2°C above pre-industrial levels",
                            "To reduce global population growth",
                            "To ban the use of fossil fuels worldwide"
                        ],
                        correctAnswer: 1,
                        explanation: "The Paris Agreement aims to limit global warming to well below 2°C above pre-industrial levels."
                    },
                    {
                        question: "Which of these is NOT a renewable energy source?",
                        options: [
                            "Solar power",
                            "Wind power",
                            "Natural gas",
                            "Hydropower"
                        ],
                        correctAnswer: 2,
                        explanation: "Natural gas is a fossil fuel and not a renewable energy source."
                    },
                    {
                        question: "What is climate change adaptation?",
                        options: [
                            "Reducing greenhouse gas emissions",
                            "Adjusting to actual or expected climate change",
                            "Moving to cooler regions",
                            "Inventing new technologies"
                        ],
                        correctAnswer: 1,
                        explanation: "Climate change adaptation involves adjusting to actual or expected climate change and its effects."
                    }
                ]
            },
            'ecosystem-sim': {
                title: 'Ecosystem Simulator',
                type: 'simulation',
                elements: {
                    trees: { icon: '🌳', count: 5, max: 20 },
                    water: { icon: '💧', count: 10, max: 30 },
                    animals: { icon: '🦌', count: 3, max: 15 }
                },
                actions: [
                    { name: 'Add Tree', effect: 'trees', value: 1, cost: 10 },
                    { name: 'Add Water', effect: 'water', value: 5, cost: 5 },
                    { name: 'Add Animal', effect: 'animals', value: 1, cost: 15 },
                    { name: 'Plant Forest', effect: 'trees', value: 5, cost: 40 }
                ]
            },
            'recycle-puzzle': {
                title: 'Recycle Puzzle',
                type: 'puzzle',
                items: [
                    { name: 'Plastic Bottle', type: 'recyclable', image: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
                    { name: 'Banana Peel', type: 'organic', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
                    { name: 'Battery', type: 'hazardous', image: 'https://images.unsplash.com/photo-1591085686350-4f1b6d2c0b3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
                    { name: 'Newspaper', type: 'recyclable', image: 'https://images.unsplash.com/photo-1504711331083-9c89594158c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
                    { name: 'Apple Core', type: 'organic', image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
                    { name: 'Paint Can', type: 'hazardous', image: 'https://images.unsplash.com/photo-1589430311002-4a1a0e6c8d6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
                ],
                bins: [
                    { name: 'Organic', type: 'organic', class: 'bin-organic' },
                    { name: 'Recyclable', type: 'recyclable', class: 'bin-recyclable' },
                    { name: 'Hazardous', type: 'hazardous', class: 'bin-hazardous' }
                ]
            },
            'tree-challenge': {
                title: 'Tree Planting Challenge',
                type: 'action',
                resources: {
                    water: { value: 100, max: 100 },
                    seeds: { value: 20, max: 20 },
                    energy: { value: 50, max: 50 },
                    budget: { value: 500, max: 500 }
                },
                treeCost: { water: 10, seeds: 1, energy: 5, budget: 20 },
                treeReward: 10,
                obstacles: [
                    { name: 'Drought', effect: 'water', value: -20, probability: 0.2 },
                    { name: 'Pests', effect: 'trees', value: -2, probability: 0.15 },
                    { name: 'Fire', effect: 'trees', value: -5, probability: 0.1 }
                ]
            },
            'water-quiz': {
                title: 'Water Conservation Quiz',
                type: 'quiz',
                questions: [
                    {
                        question: "What percentage of the Earth's water is freshwater?",
                        options: [
                            "50%",
                            "25%",
                            "10%",
                            "Less than 3%"
                        ],
                        correctAnswer: 3,
                        explanation: "Less than 3% of the Earth's water is freshwater, and most of that is frozen in ice caps."
                    },
                    {
                        question: "Which of these uses the most water in a typical household?",
                        options: [
                            "Drinking and cooking",
                            "Showers and baths",
                            "Toilets",
                            "Laundry"
                        ],
                        correctAnswer: 2,
                        explanation: "Toilets typically use the most water in a household, accounting for about 30% of indoor water use."
                    },
                    {
                        question: "What is water scarcity?",
                        options: [
                            "When there is no water at all",
                            "When water demand exceeds available supply",
                            "When water is too expensive",
                            "When water is contaminated"
                        ],
                        correctAnswer: 1,
                        explanation: "Water scarcity occurs when water demand exceeds the available supply during a certain period."
                    },
                    {
                        question: "Which country has the highest water scarcity in the world?",
                        options: [
                            "India",
                            "Egypt",
                            "Saudi Arabia",
                            "All of the above"
                        ],
                        correctAnswer: 3,
                        explanation: "Many countries face water scarcity, including India, Egypt, and Saudi Arabia, but for different reasons."
                    },
                    {
                        question: "What is rainwater harvesting?",
                        options: [
                            "Collecting rainwater for reuse",
                            "Making artificial rain",
                            "Filtering rainwater",
                            "Studying rain patterns"
                        ],
                        correctAnswer: 0,
                        explanation: "Rainwater harvesting is the collection and storage of rainwater for reuse before it reaches the aquifer."
                    }
                ]
            },
            'renewable-city': {
                title: 'Renewable Energy City',
                type: 'simulation',
                energySources: {
                    solar: { icon: '☀️', capacity: 0, cost: 100, production: 5 },
                    wind: { icon: '💨', capacity: 0, cost: 150, production: 8 },
                    hydro: { icon: '💧', capacity: 0, cost: 300, production: 15 },
                    biomass: { icon: '🌱', capacity: 0, cost: 80, production: 3 }
                },
                budget: 1000,
                energyDemand: 20,
                goal: 100
            },
            'biodiversity-quiz': {
                title: 'Biodiversity Quiz',
                type: 'quiz',
                questions: [
                    {
                        question: "What does biodiversity mean?",
                        options: [
                            "The variety of life in an area",
                            "The number of animals in a forest",
                            "The size of a habitat",
                            "The age of a species"
                        ],
                        correctAnswer: 0,
                        explanation: "Biodiversity refers to the variety of life in an area, including the number of species, genetic diversity, and ecosystem diversity."
                    },
                    {
                        question: "Which of these is a major threat to biodiversity?",
                        options: [
                            "Conservation efforts",
                            "Protected areas",
                            "Habitat destruction",
                            "Sustainable development"
                        ],
                        correctAnswer: 2,
                        explanation: "Habitat destruction is one of the biggest threats to biodiversity worldwide."
                    },
                    {
                        question: "What is an endemic species?",
                        options: [
                            "A species that is found everywhere",
                            "A species that is native to a specific geographic area",
                            "A species that is endangered",
                            "A species that is invasive"
                        ],
                        correctAnswer: 1,
                        explanation: "An endemic species is one that is native to a specific geographic area and not found naturally elsewhere."
                    },
                    {
                        question: "Which country has the highest biodiversity in the world?",
                        options: [
                            "United States",
                            "Brazil",
                            "India",
                            "Australia"
                        ],
                        correctAnswer: 1,
                        explanation: "Brazil has the highest biodiversity in the world, largely due to the Amazon rainforest."
                    },
                    {
                        question: "What is a biodiversity hotspot?",
                        options: [
                            "An area with many tourists",
                            "An area with high species richness and threat",
                            "An area with only one species",
                            "An area with no human activity"
                        ],
                        correctAnswer: 1,
                        explanation: "A biodiversity hotspot is a biogeographic region with significant levels of biodiversity that is threatened by human activities."
                    }
                ]
            },
            'ocean-cleanup': {
                title: 'Ocean Cleanup',
                type: 'simulation',
                oceanHealth: 50,
                plasticWaste: 100,
                marineLife: 30,
                actions: [
                    { name: 'Collect Plastic', effect: 'plastic', value: -10, cost: 20, impact: 5 },
                    { name: 'Clean Beach', effect: 'plastic', value: -15, cost: 30, impact: 8 },
                    { name: 'Deploy Barrier', effect: 'plastic', value: -25, cost: 50, impact: 15 },
                    { name: 'Protect Marine Area', effect: 'marine', value: 5, cost: 40, impact: 10 }
                ],
                budget: 200,
                goal: 80
            },
            'carbon-puzzle': {
                title: 'Carbon Footprint Puzzle',
                type: 'puzzle',
                activities: [
                    { name: 'Drive Car', carbon: 10, reduction: 5, image: 'https://images.unsplash.com/photo-1554224712-d8560f709cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
                    { name: 'Eat Meat', carbon: 8, reduction: 4, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
                    { name: 'Use AC', carbon: 7, reduction: 6, image: 'https://images.unsplash.com/photo-1586473219010-2ffc57b0d281?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
                    { name: 'Fly Plane', carbon: 15, reduction: 10, image: 'https://images.unsplash.com/photo-1523981132350-2c1b6e7cda9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
                    { name: 'Buy New Clothes', carbon: 6, reduction: 3, image: 'https://images.unsplash.com/photo-1525507115293-694d2fb662d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
                    { name: 'Leave Lights On', carbon: 5, reduction: 4, image: 'https://images.unsplash.com/photo-1536987333706-fc9c1d2755c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
                ],
                solutions: [
                    { name: 'Walk/Bike', icon: '🚲', reduction: 5 },
                    { name: 'Plant-Based Diet', icon: '🥦', reduction: 4 },
                    { name: 'Use Fan', icon: '🌀', reduction: 6 },
                    { name: 'Train Travel', icon: '🚆', reduction: 10 },
                    { name: 'Second-hand', icon: '♻️', reduction: 3 },
                    { name: 'Turn Off', icon: '💡', reduction: 4 }
                ],
                targetCarbon: 30
            }
        };
        
        // Achievements data
        const achievementsData = [
            { id: 'first-quiz', name: 'Quiz Beginner', description: 'Complete your first quiz', icon: 'fa-question-circle', reward: 50 },
            { id: 'five-quizzes', name: 'Quiz Master', description: 'Complete 5 quizzes', icon: 'fa-graduation-cap', reward: 100 },
            { id: 'ten-games', name: 'Game Enthusiast', description: 'Play 10 different games', icon: 'fa-gamepad', reward: 150 },
            { id: 'eco-warrior', name: 'Eco Warrior', description: 'Score 1000 points in a single game', icon: 'fa-leaf', reward: 200 },
            { id: 'streak-7', name: 'Week Warrior', description: 'Maintain a 7-day streak', icon: 'fa-fire', reward: 300 },
            { id: 'level-5', name: 'Rising Star', description: 'Reach level 5', icon: 'fa-star', reward: 250 },
            { id: 'all-games', name: 'Game Master', description: 'Play all available games', icon: 'fa-trophy', reward: 500 },
            { id: 'perfect-score', name: 'Perfectionist', description: 'Get a perfect score in any quiz', icon: 'fa-bullseye', reward: 300 }
        ];
        
        // Daily challenges data
        const dailyChallengesData = [
            { id: 'daily-quiz', name: 'Daily Quiz', description: 'Complete any quiz game', icon: 'fa-question-circle', reward: 50, type: 'quiz' },
            { id: 'daily-puzzle', name: 'Puzzle Master', description: 'Complete any puzzle game', icon: 'fa-puzzle-piece', reward: 50, type: 'puzzle' },
            { id: 'daily-simulation', name: 'Simulation Expert', description: 'Complete any simulation game', icon: 'fa-cogs', reward: 50, type: 'simulation' },
            { id: 'daily-points', name: 'Point Collector', description: 'Earn 200 points in a single day', icon: 'fa-coins', reward: 75, type: 'points', target: 200 }
        ];
        
        // Game state variables
        let currentGame = null;
        let gameScore = 0;
        let currentQuestionIndex = 0;
        let timerInterval = null;
        let timeRemaining = 60;
        let ecosystemState = null;
        let recycleState = null;
        let treeChallengeState = null;
        let renewableCityState = null;
        let oceanCleanupState = null;
        let carbonPuzzleState = null;
        let comboCount = 0;
        let soundEnabled = true;
        let activeDailyChallenge = null; // Track active daily challenge
        let userStats = {
            points: 0,
            level: 1,
            streak: 0,
            achievements: [],
            unlockedGames: ['climate-quiz', 'recycle-puzzle'],
            dailyChallenges: {},
            lastDailyReward: null,
            lastLoginDate: null
        };
        
        // Add this function to check if a specific game is unlocked
        function isGameUnlocked(gameId) {
            return userStats.unlockedGames.includes(gameId);
        }
        
        // Add this function to unlock a game and show notification
        function unlockGame(gameId) {
            if (!userStats.unlockedGames.includes(gameId)) {
                userStats.unlockedGames.push(gameId);
                saveUserStats();
                showGameUnlockedNotification(gameId);
            }
        }
        
        // Add this function to show game unlocked notification
        function showGameUnlockedNotification(gameId) {
            const gameTitles = {
                'climate-quiz': 'Climate Change Quiz',
                'ecosystem-sim': 'Ecosystem Simulator',
                'recycle-puzzle': 'Recycle Puzzle',
                'tree-challenge': 'Tree Planting Challenge',
                'water-quiz': 'Water Conservation Quiz',
                'renewable-city': 'Renewable Energy City',
                'biodiversity-quiz': 'Biodiversity Quiz',
                'ocean-cleanup': 'Ocean Cleanup',
                'carbon-puzzle': 'Carbon Footprint Puzzle'
            };
            
            const notification = document.createElement('div');
            notification.className = 'game-unlocked-notification';
            notification.innerHTML = `
                <div class="notification-content">
                    <i class="fas fa-unlock"></i>
                    <h3>New Game Unlocked!</h3>
                    <p>${gameTitles[gameId]} is now available to play.</p>
                    <button class="btn-play-now" onclick="startGame('${gameId}')">Play Now</button>
                    <button class="btn-close-notification" onclick="this.parentElement.parentElement.remove()">Close</button>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Auto remove after 5 seconds
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 5000);
        }
        
        // Add this function to unlock games based on completed modules
        function unlockGamesBasedOnProgress() {
            const modules = ['environment', 'climate', 'nature', 'warming', 'sustainable', 'disasters'];
            const moduleToGames = {
                'environment': ['recycle-puzzle'],
                'climate': ['climate-quiz', 'renewable-city'],
                'nature': ['ecosystem-sim', 'tree-challenge'],
                'warming': ['water-quiz'],
                'sustainable': ['carbon-puzzle'],
                'disasters': ['ocean-cleanup']
            };
            
            modules.forEach(module => {
                const progress = JSON.parse(localStorage.getItem(`progress-${module}`)) || {
                    completedLessons: [],
                    quizCompleted: false,
                    quizScore: 0
                };
                
                // Check if module is completed (all lessons and quiz done)
                const moduleLessonsCount = {
                    'environment': 7,
                    'climate': 9,
                    'nature': 6,
                    'warming': 8,
                    'sustainable': 10,
                    'disasters': 7
                };
                
                const totalItems = moduleLessonsCount[module] + 1; // lessons + quiz
                const completedItems = progress.completedLessons.length + (progress.quizCompleted ? 1 : 0);
                const isCompleted = completedItems >= totalItems;
                
                if (isCompleted) {
                    const gamesToUnlock = moduleToGames[module];
                    gamesToUnlock.forEach(gameId => {
                        unlockGame(gameId);
                    });
                }
            });
        }
        
        // Function to save user stats
        function saveUserStats() {
            localStorage.setItem('userStats', JSON.stringify(userStats));
        }
        
        // Function to load user stats
        function loadUserStats() {
            const savedStats = localStorage.getItem('userStats');
            if (savedStats) {
                userStats = { ...userStats, ...JSON.parse(savedStats) };
            }
            
            // Update UI with user stats
            document.getElementById('user-points').textContent = userStats.points;
            document.getElementById('user-level').textContent = userStats.level;
            document.getElementById('user-streak').textContent = userStats.streak;
            document.getElementById('user-achievements').textContent = userStats.achievements.length;
            document.getElementById('streak-count').textContent = `${userStats.streak} day streak`;
            
            // Check for daily login streak
            checkDailyStreak();
            
            // Check for daily challenges
            checkDailyChallenges();
        }
        
        // Function to check daily login streak
        function checkDailyStreak() {
            const today = new Date().toDateString();
            const lastLogin = userStats.lastLoginDate;
            
            if (lastLogin) {
                const lastLoginDate = new Date(lastLogin);
                const todayDate = new Date(today);
                const diffTime = Math.abs(todayDate - lastLoginDate);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                
                if (diffDays === 1) {
                    // Consecutive day
                    userStats.streak++;
                } else if (diffDays > 1) {
                    // Streak broken
                    userStats.streak = 1;
                }
            } else {
                // First login
                userStats.streak = 1;
            }
            
            userStats.lastLoginDate = today;
            saveUserStats();
            
            // Check for streak achievements
            if (userStats.streak === 7) {
                unlockAchievement('streak-7');
            }
        }
        
        // Function to check daily challenges
        function checkDailyChallenges() {
            const today = new Date().toDateString();
            
            // Reset daily challenges if it's a new day
            if (userStats.dailyChallenges.date !== today) {
                userStats.dailyChallenges = {
                    date: today,
                    completed: {}
                };
                
                // Initialize all challenges as not completed
                dailyChallengesData.forEach(challenge => {
                    userStats.dailyChallenges.completed[challenge.id] = false;
                });
                
                saveUserStats();
            }
            
            // Render daily challenges
            renderDailyChallenges();
        }
        
        // Function to render daily challenges
        function renderDailyChallenges() {
            const container = document.getElementById('daily-challenges');
            container.innerHTML = '';
            
            dailyChallengesData.forEach(challenge => {
                const isCompleted = userStats.dailyChallenges.completed[challenge.id];
                let progress = 0;
                
                // Special handling for points challenge
                if (challenge.type === 'points') {
                    const todayPoints = parseInt(localStorage.getItem('todayPoints')) || 0;
                    progress = Math.min(100, (todayPoints / challenge.target) * 100);
                }
                
                const challengeCard = document.createElement('div');
                challengeCard.className = 'challenge-card';
                challengeCard.innerHTML = `
                    <div class="challenge-icon">
                        <i class="fas ${challenge.icon}"></i>
                    </div>
                    <div class="challenge-content">
                        <div class="challenge-title">${challenge.name}</div>
                        <div class="challenge-description">${challenge.description}</div>
                        <div class="challenge-progress">
                            <div class="challenge-progress-fill" style="width: ${isCompleted ? '100%' : progress}%"></div>
                        </div>
                        <div class="challenge-reward">
                            <i class="fas fa-coins"></i>
                            <span>${challenge.reward} EcoPoints</span>
                        </div>
                    </div>
                    <button class="challenge-action ${isCompleted ? 'completed' : ''}" data-challenge="${challenge.id}">
                        ${isCompleted ? 'Completed' : (challenge.type === 'points' ? 'In Progress' : 'Start')}
                    </button>
                `;
                
                container.appendChild(challengeCard);
            });
            
            // Add event listeners to challenge buttons
            const challengeButtons = container.querySelectorAll('.challenge-action');
            challengeButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const challengeId = button.getAttribute('data-challenge');
                    const challenge = dailyChallengesData.find(c => c.id === challengeId);
                    
                    if (!userStats.dailyChallenges.completed[challengeId]) {
                        if (challenge.type === 'quiz') {
                            // Find first unlocked quiz game
                            const quizGames = ['climate-quiz', 'water-quiz', 'biodiversity-quiz'];
                            const unlockedQuiz = quizGames.find(game => isGameUnlocked(game));
                            
                            if (unlockedQuiz) {
                                activeDailyChallenge = challengeId; // Track active challenge
                                startGame(unlockedQuiz);
                            }
                        } else if (challenge.type === 'puzzle') {
                            // Find first unlocked puzzle game
                            const puzzleGames = ['recycle-puzzle', 'carbon-puzzle'];
                            const unlockedPuzzle = puzzleGames.find(game => isGameUnlocked(game));
                            
                            if (unlockedPuzzle) {
                                activeDailyChallenge = challengeId; // Track active challenge
                                startGame(unlockedPuzzle);
                            }
                        } else if (challenge.type === 'simulation') {
                            // Find first unlocked simulation game
                            const simulationGames = ['ecosystem-sim', 'renewable-city', 'ocean-cleanup'];
                            const unlockedSimulation = simulationGames.find(game => isGameUnlocked(game));
                            
                            if (unlockedSimulation) {
                                activeDailyChallenge = challengeId; // Track active challenge
                                startGame(unlockedSimulation);
                            }
                        } else if (challenge.type === 'points') {
                            showNotification('Play any game to earn points towards this challenge!', 'info');
                        }
                    }
                });
            });
        }
        
        // Function to complete daily challenge
        function completeDailyChallenge(challengeId) {
            if (!userStats.dailyChallenges.completed[challengeId]) {
                userStats.dailyChallenges.completed[challengeId] = true;
                
                const challenge = dailyChallengesData.find(c => c.id === challengeId);
                userStats.points += challenge.reward;
                
                // Update user level
                updateUserLevel();
                
                // Save user stats
                saveUserStats();
                
                // Update UI
                document.getElementById('user-points').textContent = userStats.points;
                renderDailyChallenges();
                
                // Show reward notification
                showFloatingCoins(document.querySelector(`[data-challenge="${challengeId}"]`), challenge.reward);
            }
        }
        
        // Function to update user level
        function updateUserLevel() {
            const pointsPerLevel = 500;
            const newLevel = Math.floor(userStats.points / pointsPerLevel) + 1;
            
            if (newLevel > userStats.level) {
                userStats.level = newLevel;
                document.getElementById('user-level').textContent = userStats.level;
                
                // Check for level achievements
                if (userStats.level === 5) {
                    unlockAchievement('level-5');
                }
                
                // Show level up notification
                showLevelUpNotification(userStats.level);
            }
        }
        
        // Function to show level up notification
        function showLevelUpNotification(level) {
            const notification = document.createElement('div');
            notification.className = 'game-unlocked-notification';
            notification.innerHTML = `
                <div class="notification-content">
                    <i class="fas fa-level-up-alt" style="font-size: 2.5rem; color: var(--purple);"></i>
                    <h3>Level Up!</h3>
                    <p>You've reached level ${level}!</p>
                    <button class="btn-close-notification" onclick="this.parentElement.parentElement.remove()">Continue</button>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Auto remove after 3 seconds
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 3000);
        }
        
        // Function to unlock achievement
        function unlockAchievement(achievementId) {
            if (!userStats.achievements.includes(achievementId)) {
                userStats.achievements.push(achievementId);
                
                const achievement = achievementsData.find(a => a.id === achievementId);
                userStats.points += achievement.reward;
                
                // Update user level
                updateUserLevel();
                
                // Save user stats
                saveUserStats();
                
                // Update UI
                document.getElementById('user-achievements').textContent = userStats.achievements.length;
                document.getElementById('user-points').textContent = userStats.points;
                
                // Show achievement popup
                showAchievementPopup(achievement);
            }
        }
        
        // Function to show achievement popup
        function showAchievementPopup(achievement) {
            const popup = document.getElementById('achievement-popup');
            document.getElementById('achievement-icon').innerHTML = `<i class="fas ${achievement.icon}"></i>`;
            document.getElementById('achievement-title').textContent = achievement.name;
            document.getElementById('achievement-description').textContent = achievement.description;
            document.getElementById('achievement-reward').textContent = `${achievement.reward} EcoPoints`;
            
            popup.classList.add('show');
            
            // Hide after 5 seconds
            setTimeout(() => {
                popup.classList.remove('show');
            }, 5000);
        }
        
        // Function to show floating coins
        function showFloatingCoins(element, amount) {
            const rect = element.getBoundingClientRect();
            const coins = document.createElement('div');
            coins.className = 'floating-coins';
            coins.textContent = `+${amount}`;
            coins.style.left = `${rect.left + rect.width / 2}px`;
            coins.style.top = `${rect.top}px`;
            
            document.body.appendChild(coins);
            
            // Remove after animation completes
            setTimeout(() => {
                if (coins.parentNode) {
                    coins.parentNode.removeChild(coins);
                }
            }, 1000);
        }
        
        // Function to play sound
        function playSound(type) {
            if (!soundEnabled) return;
            
            // In a real implementation, you would play actual sound files
            // For this example, we'll just log to console
            console.log(`Playing sound: ${type}`);
        }
        
        // Function to toggle sound
        function toggleSound() {
            soundEnabled = !soundEnabled;
            const soundIcon = document.getElementById('sound-icon');
            
            if (soundEnabled) {
                soundIcon.className = 'fas fa-volume-up';
            } else {
                soundIcon.className = 'fas fa-volume-mute';
            }
            
            localStorage.setItem('soundEnabled', soundEnabled);
        }
        
        // Function to claim daily reward
        function claimDailyReward() {
            const today = new Date().toDateString();
            const lastClaim = userStats.lastDailyReward;
            
            if (lastClaim === today) {
                // Already claimed today
                showNotification('You have already claimed your daily reward today!', 'info');
                return;
            }
            
            // Calculate reward based on streak
            let reward = 50;
            if (userStats.streak >= 7) {
                reward = 200;
            } else if (userStats.streak >= 3) {
                reward = 100;
            }
            
            // Add reward to user points
            userStats.points += reward;
            userStats.lastDailyReward = today;
            
            // Update user level
            updateUserLevel();
            
            // Save user stats
            saveUserStats();
            
            // Update UI
            document.getElementById('user-points').textContent = userStats.points;
            
            // Show reward notification
            showNotification(`You claimed ${reward} EcoPoints!`, 'success');
            
            // Play sound
            playSound('reward');
        }
        
        // Function to show notification
        function showNotification(message, type) {
            const notification = document.createElement('div');
            notification.className = 'game-unlocked-notification';
            
            let icon = 'fa-info-circle';
            let color = 'var(--primary-green)';
            
            if (type === 'success') {
                icon = 'fa-check-circle';
                color = 'var(--light-green)';
            } else if (type === 'error') {
                icon = 'fa-exclamation-circle';
                color = '#ff6b6b';
            }
            
            notification.innerHTML = `
                <div class="notification-content">
                    <i class="fas ${icon}" style="font-size: 2rem; color: ${color};"></i>
                    <h3>Notification</h3>
                    <p>${message}</p>
                    <button class="btn-close-notification" onclick="this.parentElement.parentElement.remove()">Close</button>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Auto remove after 3 seconds
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 3000);
        }
        
        // Function to toggle dropdown menu
        function toggleDropdown() {
            const dropdown = document.getElementById('profile-dropdown');
            dropdown.classList.toggle('show');
        }
        
        // Close dropdown when clicking outside
        window.onclick = function(event) {
            if (!event.target.matches('.profile-btn') && !event.target.closest('.profile-btn')) {
                const dropdowns = document.getElementsByClassName('dropdown-content');
                for (let i = 0; i < dropdowns.length; i++) {
                    const openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
        
        // Function to start a game
        function startGame(gameId) {
            if (!isGameUnlocked(gameId)) {
                showNotification('This game is locked. Complete more learning modules to unlock it.', 'error');
                return;
            }
            
            currentGame = gameId;
            gameScore = 0;
            currentQuestionIndex = 0;
            timeRemaining = 60;
            comboCount = 0;
            
            const modal = document.getElementById('game-modal');
            const modalTitle = document.getElementById('modal-title');
            const gameContainer = document.getElementById('game-container');
            
            modalTitle.textContent = gameData[gameId].title;
            modal.style.display = 'flex';
            
            // Clear previous game content
            gameContainer.innerHTML = '';
            
            // Add combo counter
            const comboCounter = document.createElement('div');
            comboCounter.className = 'combo-counter';
            comboCounter.id = 'combo-counter';
            comboCounter.innerHTML = `
                <div class="combo-label">COMBO</div>
                <div class="combo-value" id="combo-value">0</div>
            `;
            gameContainer.appendChild(comboCounter);
            
            // Initialize game based on type
            switch (gameData[gameId].type) {
                case 'quiz':
                    setupQuizGame(gameId);
                    break;
                case 'simulation':
                    setupSimulationGame(gameId);
                    break;
                case 'puzzle':
                    setupPuzzleGame(gameId);
                    break;
                case 'action':
                    setupActionGame(gameId);
                    break;
            }
            
            // Track game played for achievements
            const playedGames = JSON.parse(localStorage.getItem('playedGames')) || [];
            if (!playedGames.includes(gameId)) {
                playedGames.push(gameId);
                localStorage.setItem('playedGames', JSON.stringify(playedGames));
                
                // Check for achievements
                if (playedGames.length === 1) {
                    unlockAchievement('first-quiz');
                } else if (playedGames.length === 5) {
                    unlockAchievement('five-quizzes');
                } else if (playedGames.length === 9) {
                    unlockAchievement('all-games');
                }
            }
        }
        
        // Function to setup quiz games
        function setupQuizGame(gameId) {
            const gameContainer = document.getElementById('game-container');
            const questions = gameData[gameId].questions;
            
            // Calculate initial progress (0% at start)
            const initialProgress = 0;
            
            gameContainer.innerHTML += `
                <div class="game-score">Score: <span id="score-value">0</span></div>
                <div class="game-progress">
                    <div class="game-progress-fill" id="progress-fill" style="width: ${initialProgress}%"></div>
                </div>
                <div class="game-timer">
                    <i class="fas fa-clock timer-icon"></i>
                    <span id="timer-value">60</span>s
                    <div class="timer-bar">
                        <div class="timer-fill" id="timer-fill"></div>
                    </div>
                </div>
                <div class="game-question" id="question-text">${questions[0].question}</div>
                <div class="game-options" id="options-container">
                    ${questions[0].options.map((option, index) => `
                        <div class="game-option" data-index="${index}">${option}</div>
                    `).join('')}
                </div>
                <div class="game-feedback" id="feedback"></div>
                <div class="game-actions-modal">
                    <button class="btn-game-modal btn-retry" id="retry-btn" style="display: none;">Retry</button>
                    <button class="btn-game-modal btn-next" id="next-btn" style="display: none;">Next</button>
                </div>
            `;
            
            // Start timer
            startTimer();
            
            // Add event listeners to options
            const options = document.querySelectorAll('.game-option');
            options.forEach(option => {
                option.addEventListener('click', () => {
                    if (option.classList.contains('selected')) return;
                    
                    const selectedIndex = parseInt(option.getAttribute('data-index'));
                    const correctIndex = questions[currentQuestionIndex].correctAnswer;
                    
                    // Disable all options
                    options.forEach(opt => opt.style.pointerEvents = 'none');
                    
                    // Mark selected option
                    option.classList.add('selected');
                    
                    // Check if answer is correct
                    if (selectedIndex === correctIndex) {
                        option.classList.add('correct');
                        
                        // Calculate points with combo multiplier
                        let pointsEarned = 10;
                        
                        // Increase combo
                        comboCount++;
                        if (comboCount > 1) {
                            pointsEarned += comboCount * 2;
                            updateComboCounter();
                        }
                        
                        gameScore += pointsEarned;
                        document.getElementById('score-value').textContent = gameScore;
                        
                        // Show floating coins
                        showFloatingCoins(option, pointsEarned);
                        
                        // Play sound
                        playSound('correct');
                        
                        showFeedback('Correct! ' + questions[currentQuestionIndex].explanation, true);
                    } else {
                        option.classList.add('incorrect');
                        options[correctIndex].classList.add('correct');
                        
                        // Reset combo
                        comboCount = 0;
                        updateComboCounter();
                        
                        // Play sound
                        playSound('incorrect');
                        
                        showFeedback('Incorrect. ' + questions[currentQuestionIndex].explanation, false);
                    }
                    
                    // Show next button or end game
                    setTimeout(() => {
                        if (currentQuestionIndex < questions.length - 1) {
                            document.getElementById('next-btn').style.display = 'block';
                        } else {
                            endQuizGame();
                        }
                    }, 2000);
                });
            });
            
            // Add event listener to next button
            document.getElementById('next-btn').addEventListener('click', () => {
                currentQuestionIndex++;
                updateQuizQuestion(gameId);
            });
            
            // Add event listener to retry button
            document.getElementById('retry-btn').addEventListener('click', () => {
                currentQuestionIndex = 0;
                gameScore = 0;
                timeRemaining = 60;
                comboCount = 0;
                clearInterval(timerInterval);
                setupQuizGame(gameId);
            });
        }
        
        // Function to update combo counter
        function updateComboCounter() {
            const comboCounter = document.getElementById('combo-counter');
            const comboValue = document.getElementById('combo-value');
            
            if (comboCount > 1) {
                comboCounter.classList.add('active');
                comboValue.textContent = comboCount;
                
                // Show streak bonus
                if (comboCount === 3 || comboCount === 5) {
                    const streakBonus = document.createElement('div');
                    streakBonus.className = 'streak-bonus show';
                    streakBonus.textContent = `${comboCount}x Combo!`;
                    document.getElementById('game-container').appendChild(streakBonus);
                    
                    setTimeout(() => {
                        streakBonus.remove();
                    }, 1500);
                }
            } else {
                comboCounter.classList.remove('active');
            }
        }
        
        // Function to update quiz question
        function updateQuizQuestion(gameId) {
            const questions = gameData[gameId].questions;
            const question = questions[currentQuestionIndex];
            
            document.getElementById('question-text').textContent = question.question;
            document.getElementById('options-container').innerHTML = question.options.map((option, index) => `
                <div class="game-option" data-index="${index}">${option}</div>
            `).join('');
            document.getElementById('feedback').style.display = 'none';
            document.getElementById('next-btn').style.display = 'none';
            
            // Add event listeners to new options
            const options = document.querySelectorAll('.game-option');
            options.forEach(option => {
                option.addEventListener('click', () => {
                    if (option.classList.contains('selected')) return;
                    
                    const selectedIndex = parseInt(option.getAttribute('data-index'));
                    const correctIndex = questions[currentQuestionIndex].correctAnswer;
                    
                    // Disable all options
                    options.forEach(opt => opt.style.pointerEvents = 'none');
                    
                    // Mark selected option
                    option.classList.add('selected');
                    
                    // Check if answer is correct
                    if (selectedIndex === correctIndex) {
                        option.classList.add('correct');
                        
                        // Calculate points with combo multiplier
                        let pointsEarned = 10;
                        
                        // Increase combo
                        comboCount++;
                        if (comboCount > 1) {
                            pointsEarned += comboCount * 2;
                            updateComboCounter();
                        }
                        
                        gameScore += pointsEarned;
                        document.getElementById('score-value').textContent = gameScore;
                        
                        // Show floating coins
                        showFloatingCoins(option, pointsEarned);
                        
                        // Play sound
                        playSound('correct');
                        
                        showFeedback('Correct! ' + questions[currentQuestionIndex].explanation, true);
                    } else {
                        option.classList.add('incorrect');
                        options[correctIndex].classList.add('correct');
                        
                        // Reset combo
                        comboCount = 0;
                        updateComboCounter();
                        
                        // Play sound
                        playSound('incorrect');
                        
                        showFeedback('Incorrect. ' + questions[currentQuestionIndex].explanation, false);
                    }
                    
                    // Show next button or end game
                    setTimeout(() => {
                        if (currentQuestionIndex < questions.length - 1) {
                            document.getElementById('next-btn').style.display = 'block';
                        } else {
                            endQuizGame();
                        }
                    }, 2000);
                });
            });
            
            // Update progress bar
            updateProgressBar();
        }
        
        // Function to setup simulation games
        function setupSimulationGame(gameId) {
            const gameContainer = document.getElementById('game-container');
            const game = gameData[gameId];
            
            if (gameId === 'ecosystem-sim') {
                // Initialize ecosystem state
                ecosystemState = {
                    trees: game.elements.trees.count,
                    water: game.elements.water.count,
                    animals: game.elements.animals.count,
                    budget: 100,
                    score: 0,
                    level: 1
                };
                
                gameContainer.innerHTML += `
                    <div class="game-score">Score: <span id="ecosystem-score">0</span></div>
                    <div class="level-progress">
                        <div class="level-info">
                            <div class="level-label">Level: <span id="ecosystem-level">1</span></div>
                            <div class="level-label">XP: <span id="ecosystem-xp">0</span>/100</div>
                        </div>
                        <div class="level-bar">
                            <div class="level-fill" id="ecosystem-level-fill" style="width: 0%"></div>
                        </div>
                    </div>
                    <div class="simulation-container">
                        <div class="simulation-display" id="ecosystem-display">
                            ${renderEcosystem()}
                        </div>
                        <div class="simulation-controls">
                            ${game.actions.map((action, index) => `
                                <button class="simulation-btn" data-action="${index}">${action.name} (${action.cost} pts)</button>
                            `).join('')}
                        </div>
                        <div class="resource-meter">
                            <div class="resource-fill budget-fill" id="budget-fill" style="width: 100%"></div>
                            <div class="resource-label">Budget: <span id="budget-value">100</span></div>
                        </div>
                    </div>
                    <div class="game-actions-modal">
                        <button class="btn-game-modal btn-retry" id="ecosystem-retry">Restart</button>
                        <button class="btn-game-modal btn-next" id="ecosystem-next">End Game</button>
                    </div>
                `;
                
                // Add event listeners to action buttons
                const actionButtons = document.querySelectorAll('.simulation-btn');
                actionButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        const actionIndex = parseInt(button.getAttribute('data-action'));
                        const action = game.actions[actionIndex];
                        
                        // Check if player has enough budget
                        if (ecosystemState.budget >= action.cost) {
                            // Apply action
                            ecosystemState[action.effect] += action.value;
                            ecosystemState.budget -= action.cost;
                            ecosystemState.score += 5;
                            
                            // Add XP
                            const xp = parseInt(localStorage.getItem('ecosystem-xp')) || 0;
                            const newXp = xp + 10;
                            localStorage.setItem('ecosystem-xp', newXp);
                            
                            // Check for level up
                            if (newXp >= 100) {
                                ecosystemState.level++;
                                localStorage.setItem('ecosystem-xp', 0);
                                document.getElementById('ecosystem-level').textContent = ecosystemState.level;
                                showLevelUpNotification(ecosystemState.level);
                            }
                            
                            document.getElementById('ecosystem-xp').textContent = newXp % 100;
                            document.getElementById('ecosystem-level-fill').style.width = `${(newXp % 100)}%`;
                            
                            // Update display
                            document.getElementById('ecosystem-score').textContent = ecosystemState.score;
                            document.getElementById('budget-value').textContent = ecosystemState.budget;
                            document.getElementById('budget-fill').style.width = `${(ecosystemState.budget / 100) * 100}%`;
                            document.getElementById('ecosystem-display').innerHTML = renderEcosystem();
                            
                            // Show floating coins
                            showFloatingCoins(button, 5);
                            
                            // Play sound
                            playSound('collect');
                            
                            // Check for game completion
                            if (ecosystemState.trees >= game.elements.trees.max && 
                                ecosystemState.water >= game.elements.water.max && 
                                ecosystemState.animals >= game.elements.animals.max) {
                                endSimulationGame(gameId, true);
                            }
                        } else {
                            showFeedback('Not enough budget!', false);
                            playSound('error');
                        }
                    });
                });
                
                // Add event listeners to control buttons
                document.getElementById('ecosystem-retry').addEventListener('click', () => {
                    setupSimulationGame(gameId);
                });
                
                document.getElementById('ecosystem-next').addEventListener('click', () => {
                    endSimulationGame(gameId, false);
                });
            } else if (gameId === 'renewable-city') {
                // Initialize renewable city state
                renewableCityState = {
                    solar: 0,
                    wind: 0,
                    hydro: 0,
                    biomass: 0,
                    budget: game.budget,
                    energyProduction: 0,
                    score: 0,
                    population: 1000,
                    happiness: 50
                };
                
                gameContainer.innerHTML += `
                    <div class="game-score">Score: <span id="renewable-score">0</span></div>
                    <div class="simulation-container">
                        <div class="simulation-display" id="renewable-display">
                            ${renderRenewableCity()}
                        </div>
                        <div class="simulation-controls">
                            ${Object.entries(game.energySources).map(([key, source]) => `
                                <button class="simulation-btn" data-source="${key}">Add ${source.icon} (${source.cost} pts)</button>
                            `).join('')}
                        </div>
                        <div class="resource-meter">
                            <div class="resource-fill budget-fill" id="renewable-budget-fill" style="width: 100%"></div>
                            <div class="resource-label">Budget: <span id="renewable-budget-value">${game.budget}</span></div>
                        </div>
                        <div class="resource-meter">
                            <div class="resource-fill energy-fill" id="energy-fill" style="width: 0%"></div>
                            <div class="resource-label">Energy: <span id="energy-value">0</span>/${game.energyDemand}</div>
                        </div>
                        <div class="resource-meter">
                            <div class="resource-fill" style="background-color: var(--pink);" id="happiness-fill" style="width: 50%"></div>
                            <div class="resource-label">Happiness: <span id="happiness-value">50</span>%</div>
                        </div>
                    </div>
                    <div class="game-actions-modal">
                        <button class="btn-game-modal btn-retry" id="renewable-retry">Restart</button>
                        <button class="btn-game-modal btn-next" id="renewable-next">End Game</button>
                    </div>
                `;
                
                // Add event listeners to source buttons
                const sourceButtons = document.querySelectorAll('.simulation-btn');
                sourceButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        const sourceKey = button.getAttribute('data-source');
                        const source = game.energySources[sourceKey];
                        
                        // Check if player has enough budget
                        if (renewableCityState.budget >= source.cost) {
                            // Add energy source
                            renewableCityState[sourceKey]++;
                            renewableCityState.budget -= source.cost;
                            renewableCityState.energyProduction += source.production;
                            renewableCityState.score += 10;
                            
                            // Increase happiness
                            renewableCityState.happiness = Math.min(100, renewableCityState.happiness + 5);
                            
                            // Update display
                            document.getElementById('renewable-score').textContent = renewableCityState.score;
                            document.getElementById('renewable-budget-value').textContent = renewableCityState.budget;
                            document.getElementById('renewable-budget-fill').style.width = `${(renewableCityState.budget / game.budget) * 100}%`;
                            document.getElementById('energy-value').textContent = renewableCityState.energyProduction;
                            document.getElementById('energy-fill').style.width = `${Math.min(100, (renewableCityState.energyProduction / game.energyDemand) * 100)}%`;
                            document.getElementById('happiness-value').textContent = renewableCityState.happiness;
                            document.getElementById('happiness-fill').style.width = `${renewableCityState.happiness}%`;
                            document.getElementById('renewable-display').innerHTML = renderRenewableCity();
                            
                            // Show floating coins
                            showFloatingCoins(button, 10);
                            
                            // Play sound
                            playSound('collect');
                            
                            // Check for game completion
                            if (renewableCityState.energyProduction >= game.goal) {
                                endSimulationGame(gameId, true);
                            }
                        } else {
                            showFeedback('Not enough budget!', false);
                            playSound('error');
                        }
                    });
                });
                
                // Add event listeners to control buttons
                document.getElementById('renewable-retry').addEventListener('click', () => {
                    setupSimulationGame(gameId);
                });
                
                document.getElementById('renewable-next').addEventListener('click', () => {
                    endSimulationGame(gameId, false);
                });
            } else if (gameId === 'ocean-cleanup') {
                // Initialize ocean cleanup state
                oceanCleanupState = {
                    oceanHealth: game.oceanHealth,
                    plasticWaste: game.plasticWaste,
                    marineLife: game.marineLife,
                    budget: game.budget,
                    score: 0,
                    level: 1,
                    xp: 0
                };
                
                gameContainer.innerHTML += `
                    <div class="game-score">Score: <span id="ocean-score">0</span></div>
                    <div class="level-progress">
                        <div class="level-info">
                            <div class="level-label">Level: <span id="ocean-level">1</span></div>
                            <div class="level-label">XP: <span id="ocean-xp">0</span>/100</div>
                        </div>
                        <div class="level-bar">
                            <div class="level-fill" id="ocean-level-fill" style="width: 0%"></div>
                        </div>
                    </div>
                    <div class="simulation-container">
                        <div class="simulation-display" id="ocean-display">
                            ${renderOceanCleanup()}
                        </div>
                        <div class="simulation-controls">
                            ${game.actions.map((action, index) => `
                                <button class="simulation-btn" data-action="${index}">${action.name} (${action.cost} pts)</button>
                            `).join('')}
                        </div>
                        <div class="resource-meter">
                            <div class="resource-fill budget-fill" id="ocean-budget-fill" style="width: 100%"></div>
                            <div class="resource-label">Budget: <span id="ocean-budget-value">${game.budget}</span></div>
                        </div>
                        <div class="resource-meter">
                            <div class="resource-fill water-fill" id="ocean-health-fill" style="width: ${game.oceanHealth}%"></div>
                            <div class="resource-label">Ocean Health: <span id="ocean-health-value">${game.oceanHealth}</span>%</div>
                        </div>
                    </div>
                    <div class="game-actions-modal">
                        <button class="btn-game-modal btn-retry" id="ocean-retry">Restart</button>
                        <button class="btn-game-modal btn-next" id="ocean-next">End Game</button>
                    </div>
                `;
                
                // Add event listeners to action buttons
                const actionButtons = document.querySelectorAll('.simulation-btn');
                actionButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        const actionIndex = parseInt(button.getAttribute('data-action'));
                        const action = game.actions[actionIndex];
                        
                        // Check if player has enough budget
                        if (oceanCleanupState.budget >= action.cost) {
                            // Apply action
                            if (action.effect === 'plastic') {
                                oceanCleanupState.plasticWaste += action.value;
                                oceanCleanupState.oceanHealth += action.impact;
                            } else if (action.effect === 'marine') {
                                oceanCleanupState.marineLife += action.value;
                                oceanCleanupState.oceanHealth += action.impact;
                            }
                            
                            oceanCleanupState.budget -= action.cost;
                            oceanCleanupState.score += 5;
                            oceanCleanupState.xp += 10;
                            
                            // Check for level up
                            if (oceanCleanupState.xp >= 100) {
                                oceanCleanupState.level++;
                                oceanCleanupState.xp = 0;
                                document.getElementById('ocean-level').textContent = oceanCleanupState.level;
                                showLevelUpNotification(oceanCleanupState.level);
                            }
                            
                            document.getElementById('ocean-xp').textContent = oceanCleanupState.xp;
                            document.getElementById('ocean-level-fill').style.width = `${oceanCleanupState.xp}%`;
                            
                            // Update display
                            document.getElementById('ocean-score').textContent = oceanCleanupState.score;
                            document.getElementById('ocean-budget-value').textContent = oceanCleanupState.budget;
                            document.getElementById('ocean-budget-fill').style.width = `${(oceanCleanupState.budget / game.budget) * 100}%`;
                            document.getElementById('ocean-health-value').textContent = oceanCleanupState.oceanHealth;
                            document.getElementById('ocean-health-fill').style.width = `${oceanCleanupState.oceanHealth}%`;
                            document.getElementById('ocean-display').innerHTML = renderOceanCleanup();
                            
                            // Show floating coins
                            showFloatingCoins(button, 5);
                            
                            // Play sound
                            playSound('collect');
                            
                            // Check for game completion
                            if (oceanCleanupState.oceanHealth >= game.goal) {
                                endSimulationGame(gameId, true);
                            }
                        } else {
                            showFeedback('Not enough budget!', false);
                            playSound('error');
                        }
                    });
                });
                
                // Add event listeners to control buttons
                document.getElementById('ocean-retry').addEventListener('click', () => {
                    setupSimulationGame(gameId);
                });
                
                document.getElementById('ocean-next').addEventListener('click', () => {
                    endSimulationGame(gameId, false);
                });
            }
        }
        
        // Function to render ecosystem
        function renderEcosystem() {
            const game = gameData['ecosystem-sim'];
            let html = '';
            
            // Add background
            html += `<div style="position: absolute; width: 100%; height: 100%; background: linear-gradient(to bottom, #87CEEB, #8FBC8F); z-index: -1;"></div>`;
            
            // Add trees
            for (let i = 0; i < ecosystemState.trees; i++) {
                const left = Math.random() * 80 + 10;
                const top = Math.random() * 60 + 20;
                html += `<div class="ecosystem-element tree" style="left: ${left}%; top: ${top}%">${game.elements.trees.icon}</div>`;
            }
            
            // Add water
            for (let i = 0; i < ecosystemState.water; i++) {
                const left = Math.random() * 80 + 10;
                const top = Math.random() * 60 + 20;
                html += `<div class="ecosystem-element water" style="left: ${left}%; top: ${top}%">${game.elements.water.icon}</div>`;
            }
            
            // Add animals
            for (let i = 0; i < ecosystemState.animals; i++) {
                const left = Math.random() * 80 + 10;
                const top = Math.random() * 60 + 20;
                html += `<div class="ecosystem-element animal" style="left: ${left}%; top: ${top}%">${game.elements.animals.icon}</div>`;
            }
            
            return html;
        }
        
        // Function to render renewable city
        function renderRenewableCity() {
            const game = gameData['renewable-city'];
            let html = '';
            
            // Add city background
            html += `<div style="position: absolute; width: 100%; height: 100%; background: linear-gradient(to bottom, #87CEEB, #E0F7FA); z-index: -1;"></div>`;
            
            // Add ground
            html += `<div style="position: absolute; bottom: 0; width: 100%; height: 20%; background-color: #8D6E63; z-index: -1;"></div>`;
            
            // Add buildings
            for (let i = 0; i < 5; i++) {
                const left = 10 + i * 15;
                const height = 30 + Math.random() * 40;
                html += `<div style="position: absolute; bottom: 20%; left: ${left}%; width: 10%; height: ${height}%; background-color: #78909C; z-index: 0;"></div>`;
            }
            
            // Add solar panels
            for (let i = 0; i < renewableCityState.solar; i++) {
                const left = Math.random() * 80 + 10;
                const top = Math.random() * 30 + 10;
                html += `<div class="ecosystem-element" style="left: ${left}%; top: ${top}%">${game.energySources.solar.icon}</div>`;
            }
            
            // Add wind turbines
            for (let i = 0; i < renewableCityState.wind; i++) {
                const left = Math.random() * 80 + 10;
                const top = Math.random() * 40 + 10;
                html += `<div class="ecosystem-element" style="left: ${left}%; top: ${top}%">${game.energySources.wind.icon}</div>`;
            }
            
            // Add hydro plants
            for (let i = 0; i < renewableCityState.hydro; i++) {
                const left = Math.random() * 80 + 10;
                const top = Math.random() * 50 + 20;
                html += `<div class="ecosystem-element" style="left: ${left}%; top: ${top}%">${game.energySources.hydro.icon}</div>`;
            }
            
            // Add biomass plants
            for (let i = 0; i < renewableCityState.biomass; i++) {
                const left = Math.random() * 80 + 10;
                const top = Math.random() * 50 + 20;
                html += `<div class="ecosystem-element" style="left: ${left}%; top: ${top}%">${game.energySources.biomass.icon}</div>`;
            }
            
            return html;
        }
        
        // Function to render ocean cleanup
        function renderOceanCleanup() {
            let html = '';
            
            // Add ocean background
            html += `<div style="position: absolute; width: 100%; height: 100%; background: linear-gradient(to bottom, #87CEEB, #1E90FF); z-index: -1;"></div>`;
            
            // Add plastic waste
            const plasticCount = Math.max(0, oceanCleanupState.plasticWaste / 10);
            for (let i = 0; i < plasticCount; i++) {
                const left = Math.random() * 90 + 5;
                const top = Math.random() * 80 + 10;
                html += `<div class="ecosystem-element" style="left: ${left}%; top: ${top}%; color: white;">🗑️</div>`;
            }
            
            // Add marine life
            const marineCount = Math.max(0, oceanCleanupState.marineLife);
            for (let i = 0; i < marineCount; i++) {
                const left = Math.random() * 90 + 5;
                const top = Math.random() * 80 + 10;
                const marineTypes = ['🐠', '🐟', '🐡', '🦈', '🐙', '🦑'];
                const marineType = marineTypes[Math.floor(Math.random() * marineTypes.length)];
                html += `<div class="ecosystem-element" style="left: ${left}%; top: ${top}%; color: white;">${marineType}</div>`;
            }
            
            return html;
        }
        
        // Function to setup puzzle games
        function setupPuzzleGame(gameId) {
            const gameContainer = document.getElementById('game-container');
            const game = gameData[gameId];
            
            if (gameId === 'recycle-puzzle') {
                // Initialize recycle state
                recycleState = {
                    items: [...game.items],
                    score: 0,
                    matched: 0,
                    selectedItem: null,
                    combo: 0,
                    timeBonus: 100
                };
                
                // Shuffle items
                recycleState.items.sort(() => Math.random() - 0.5);
                
                gameContainer.innerHTML += `
                    <div class="game-score">Score: <span id="recycle-score">0</span></div>
                    <div class="game-timer">
                        <i class="fas fa-clock timer-icon"></i>
                        <span id="recycle-timer-value">60</span>s
                        <div class="timer-bar">
                            <div class="timer-fill" id="recycle-timer-fill"></div>
                        </div>
                    </div>
                    <div class="puzzle-container">
                        <div class="puzzle-grid" id="puzzle-grid">
                            ${recycleState.items.map((item, index) => `
                                <div class="puzzle-piece" data-index="${index}" data-type="${item.type}">
                                    <img src="${item.image}" alt="${item.name}">
                                    <span>${item.name}</span>
                                </div>
                            `).join('')}
                        </div>
                        <div class="puzzle-bin">
                            ${game.bins.map((bin, index) => `
                                <div class="bin ${bin.class}" data-type="${bin.type}">
                                    <span>${bin.name}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="game-feedback" id="recycle-feedback"></div>
                    <div class="game-actions-modal">
                        <button class="btn-game-modal btn-retry" id="recycle-retry">Restart</button>
                        <button class="btn-game-modal btn-next" id="recycle-next" style="display: none;">Next</button>
                    </div>
                `;
                
                // Start timer
                const recycleTimer = setInterval(() => {
                    recycleState.timeBonus--;
                    document.getElementById('recycle-timer-value').textContent = recycleState.timeBonus;
                    document.getElementById('recycle-timer-fill').style.width = `${(recycleState.timeBonus / 100) * 100}%`;
                    
                    if (recycleState.timeBonus <= 0) {
                        clearInterval(recycleTimer);
                        endPuzzleGame(gameId, false);
                    }
                }, 1000);
                
                // Add event listeners to puzzle pieces
                const puzzlePieces = document.querySelectorAll('.puzzle-piece');
                puzzlePieces.forEach(piece => {
                    piece.addEventListener('click', () => {
                        // Deselect previous item
                        if (recycleState.selectedItem !== null) {
                            document.querySelector(`.puzzle-piece[data-index="${recycleState.selectedItem}"]`).classList.remove('selected');
                        }
                        
                        // Select new item
                        const index = parseInt(piece.getAttribute('data-index'));
                        recycleState.selectedItem = index;
                        piece.classList.add('selected');
                    });
                });
                
                // Add event listeners to bins
                const bins = document.querySelectorAll('.bin');
                bins.forEach(bin => {
                    bin.addEventListener('click', () => {
                        if (recycleState.selectedItem === null) {
                            showFeedback('Please select an item first!', false);
                            playSound('error');
                            return;
                        }
                        
                        const binType = bin.getAttribute('data-type');
                        const selectedItem = recycleState.items[recycleState.selectedItem];
                        
                        // Check if match
                        if (selectedItem.type === binType) {
                            // Correct match
                            recycleState.combo++;
                            const points = 10 + (recycleState.combo * 2) + Math.floor(recycleState.timeBonus / 10);
                            recycleState.score += points;
                            recycleState.matched++;
                            
                            // Update UI
                            document.getElementById('recycle-score').textContent = recycleState.score;
                            document.querySelector(`.puzzle-piece[data-index="${recycleState.selectedItem}"]`).classList.add('matched');
                            
                            // Highlight bin
                            bin.classList.add('highlight');
                            setTimeout(() => bin.classList.remove('highlight'), 600);
                            
                            // Show floating coins
                            showFloatingCoins(bin, points);
                            
                            // Play sound
                            playSound('correct');
                            
                            // Show feedback
                            showFeedback(`Correct! +${points} points`, true);
                            
                            // Check if all items matched
                            if (recycleState.matched === recycleState.items.length) {
                                clearInterval(recycleTimer);
                                setTimeout(() => {
                                    endPuzzleGame(gameId, true);
                                }, 1000);
                            }
                        } else {
                            // Incorrect match
                            recycleState.combo = 0;
                            showFeedback('Incorrect! Try again.', false);
                            
                            // Shake bin
                            bin.classList.add('shake');
                            setTimeout(() => bin.classList.remove('shake'), 500);
                            
                            // Play sound
                            playSound('incorrect');
                        }
                        
                        // Reset selection
                        document.querySelector(`.puzzle-piece[data-index="${recycleState.selectedItem}"]`).classList.remove('selected');
                        recycleState.selectedItem = null;
                    });
                });
                
                // Add event listeners to control buttons
                document.getElementById('recycle-retry').addEventListener('click', () => {
                    clearInterval(recycleTimer);
                    setupPuzzleGame(gameId);
                });
                
                document.getElementById('recycle-next').addEventListener('click', () => {
                    clearInterval(recycleTimer);
                    endPuzzleGame(gameId, false);
                });
            } else if (gameId === 'carbon-puzzle') {
                // Initialize carbon puzzle state
                carbonPuzzleState = {
                    activities: [...game.activities],
                    solutions: [...game.solutions],
                    score: 0,
                    carbonFootprint: 0,
                    selectedItem: null,
                    matchedPairs: [],
                    combo: 0,
                    timeBonus: 100
                };
                
                // Shuffle activities and solutions
                carbonPuzzleState.activities.sort(() => Math.random() - 0.5);
                carbonPuzzleState.solutions.sort(() => Math.random() - 0.5);
                
                // Calculate initial carbon footprint
                carbonPuzzleState.activities.forEach(activity => {
                    carbonPuzzleState.carbonFootprint += activity.carbon;
                });
                
                gameContainer.innerHTML += `
                    <div class="game-score">Score: <span id="carbon-score">0</span></div>
                    <div class="game-timer">
                        <i class="fas fa-clock timer-icon"></i>
                        <span id="carbon-timer-value">60</span>s
                        <div class="timer-bar">
                            <div class="timer-fill" id="carbon-timer-fill"></div>
                        </div>
                    </div>
                    <div class="resource-meter">
                        <div class="resource-fill" style="background-color: #ff6b6b; width: 100%"></div>
                        <div class="resource-label">Carbon Footprint: <span id="carbon-value">${carbonPuzzleState.carbonFootprint}</span>/${game.targetCarbon}</div>
                    </div>
                    <div class="puzzle-container">
                        <div class="puzzle-grid" id="carbon-activities">
                            ${carbonPuzzleState.activities.map((activity, index) => `
                                <div class="puzzle-piece" data-index="${index}" data-type="activity" data-carbon="${activity.carbon}">
                                    <img src="${activity.image}" alt="${activity.name}">
                                    <span>${activity.name}</span>
                                </div>
                            `).join('')}
                        </div>
                        <div class="puzzle-grid" id="carbon-solutions">
                            ${carbonPuzzleState.solutions.map((solution, index) => `
                                <div class="puzzle-piece" data-index="${index}" data-type="solution" data-reduction="${solution.reduction}">
                                    <span style="font-size: 2rem;">${solution.icon}</span>
                                    <span>${solution.name}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="game-feedback" id="carbon-feedback"></div>
                    <div class="game-actions-modal">
                        <button class="btn-game-modal btn-retry" id="carbon-retry">Restart</button>
                        <button class="btn-game-modal btn-next" id="carbon-next" style="display: none;">Next</button>
                    </div>
                `;
                
                // Start timer
                const carbonTimer = setInterval(() => {
                    carbonPuzzleState.timeBonus--;
                    document.getElementById('carbon-timer-value').textContent = carbonPuzzleState.timeBonus;
                    document.getElementById('carbon-timer-fill').style.width = `${(carbonPuzzleState.timeBonus / 100) * 100}%`;
                    
                    if (carbonPuzzleState.timeBonus <= 0) {
                        clearInterval(carbonTimer);
                        endPuzzleGame(gameId, false);
                    }
                }, 1000);
                
                // Add event listeners to activities
                const activities = document.querySelectorAll('#carbon-activities .puzzle-piece');
                activities.forEach(activity => {
                    activity.addEventListener('click', () => {
                        // Deselect previous item
                        if (carbonPuzzleState.selectedItem !== null) {
                            document.querySelector(`.puzzle-piece[data-index="${carbonPuzzleState.selectedItem.index}"]`).classList.remove('selected');
                        }
                        
                        // Select new item
                        const index = parseInt(activity.getAttribute('data-index'));
                        carbonPuzzleState.selectedItem = { index, type: 'activity' };
                        activity.classList.add('selected');
                    });
                });
                
                // Add event listeners to solutions
                const solutions = document.querySelectorAll('#carbon-solutions .puzzle-piece');
                solutions.forEach(solution => {
                    solution.addEventListener('click', () => {
                        if (carbonPuzzleState.selectedItem === null) {
                            showFeedback('Please select an activity first!', false);
                            playSound('error');
                            return;
                        }
                        
                        if (carbonPuzzleState.selectedItem.type === 'solution') {
                            // Deselect solution if clicking on another solution
                            document.querySelector(`.puzzle-piece[data-index="${carbonPuzzleState.selectedItem.index}"]`).classList.remove('selected');
                            
                            // Select new solution
                            const index = parseInt(solution.getAttribute('data-index'));
                            carbonPuzzleState.selectedItem = { index, type: 'solution' };
                            solution.classList.add('selected');
                        } else {
                            // Match activity with solution
                            const activityIndex = carbonPuzzleState.selectedItem.index;
                            const solutionIndex = parseInt(solution.getAttribute('data-index'));
                            
                            // Check if already matched
                            if (carbonPuzzleState.matchedPairs.some(pair => pair.activity === activityIndex || pair.solution === solutionIndex)) {
                                showFeedback('This item is already matched!', false);
                                playSound('error');
                                return;
                            }
                            
                            // Add match
                            carbonPuzzleState.matchedPairs.push({ activity: activityIndex, solution: solutionIndex });
                            
                            // Update carbon footprint
                            const reduction = parseInt(solution.getAttribute('data-reduction'));
                            carbonPuzzleState.carbonFootprint -= reduction;
                            carbonPuzzleState.combo++;
                            
                            const points = 10 + (carbonPuzzleState.combo * 2) + Math.floor(carbonPuzzleState.timeBonus / 10);
                            carbonPuzzleState.score += points;
                            
                            // Update UI
                            document.getElementById('carbon-score').textContent = carbonPuzzleState.score;
                            document.getElementById('carbon-value').textContent = carbonPuzzleState.carbonFootprint;
                            
                            // Update carbon meter
                            const percentage = Math.min(100, (carbonPuzzleState.carbonFootprint / game.targetCarbon) * 100);
                            document.querySelector('.resource-fill').style.width = `${percentage}%`;
                            
                            // Show floating coins
                            showFloatingCoins(solution, points);
                            
                            // Play sound
                            playSound('correct');
                            
                            // Mark as matched
                            document.querySelector(`#carbon-activities .puzzle-piece[data-index="${activityIndex}"]`).classList.add('matched');
                            solution.classList.add('matched');
                            
                            // Show feedback
                            showFeedback(`Great match! +${points} points`, true);
                            
                            // Reset selection
                            carbonPuzzleState.selectedItem = null;
                            
                            // Check if all items matched or target reached
                            if (carbonPuzzleState.matchedPairs.length === carbonPuzzleState.activities.length || 
                                carbonPuzzleState.carbonFootprint <= game.targetCarbon) {
                                clearInterval(carbonTimer);
                                setTimeout(() => {
                                    endPuzzleGame(gameId, true);
                                }, 1000);
                            }
                        }
                    });
                });
                
                // Add event listeners to control buttons
                document.getElementById('carbon-retry').addEventListener('click', () => {
                    clearInterval(carbonTimer);
                    setupPuzzleGame(gameId);
                });
                
                document.getElementById('carbon-next').addEventListener('click', () => {
                    clearInterval(carbonTimer);
                    endPuzzleGame(gameId, false);
                });
            }
        }
        
        // Function to setup action games
        function setupActionGame(gameId) {
            const gameContainer = document.getElementById('game-container');
            const game = gameData[gameId];
            
            if (gameId === 'tree-challenge') {
                // Initialize tree challenge state
                treeChallengeState = {
                    trees: 0,
                    resources: { ...game.resources },
                    score: 0,
                    obstacles: [],
                    combo: 0,
                    level: 1,
                    xp: 0
                };
                
                gameContainer.innerHTML += `
                    <div class="game-score">Score: <span id="tree-score">0</span></div>
                    <div class="level-progress">
                        <div class="level-info">
                            <div class="level-label">Level: <span id="tree-level">1</span></div>
                            <div class="level-label">XP: <span id="tree-xp">0</span>/100</div>
                        </div>
                        <div class="level-bar">
                            <div class="level-fill" id="tree-level-fill" style="width: 0%"></div>
                        </div>
                    </div>
                    <div class="action-container">
                        <div class="action-display" id="tree-display">
                            ${renderTreeChallenge()}
                        </div>
                        <div class="action-controls">
                            <button class="simulation-btn" id="plant-tree-btn">Plant Tree</button>
                        </div>
                        <div class="resource-meter">
                            <div class="resource-fill water-fill" id="water-meter" style="width: 100%"></div>
                            <div class="resource-label">Water: <span id="water-value">${treeChallengeState.resources.water.value}</span></div>
                        </div>
                        <div class="resource-meter">
                            <div class="resource-fill seeds-fill" id="seeds-meter" style="width: 100%"></div>
                            <div class="resource-label">Seeds: <span id="seeds-value">${treeChallengeState.resources.seeds.value}</span></div>
                        </div>
                        <div class="resource-meter">
                            <div class="resource-fill energy-fill" id="energy-meter" style="width: 100%"></div>
                            <div class="resource-label">Energy: <span id="energy-value">${treeChallengeState.resources.energy.value}</span></div>
                        </div>
                        <div class="resource-meter">
                            <div class="resource-fill budget-fill" id="budget-meter" style="width: 100%"></div>
                            <div class="resource-label">Budget: <span id="budget-value">${treeChallengeState.resources.budget.value}</span></div>
                        </div>
                    </div>
                    <div class="game-feedback" id="tree-feedback"></div>
                    <div class="game-actions-modal">
                        <button class="btn-game-modal btn-retry" id="tree-retry">Restart</button>
                        <button class="btn-game-modal btn-next" id="tree-next">End Game</button>
                    </div>
                `;
                
                // Add event listener to plant tree button
                document.getElementById('plant-tree-btn').addEventListener('click', () => {
                    // Check if player has enough resources
                    if (treeChallengeState.resources.water.value >= game.treeCost.water &&
                        treeChallengeState.resources.seeds.value >= game.treeCost.seeds &&
                        treeChallengeState.resources.energy.value >= game.treeCost.energy &&
                        treeChallengeState.resources.budget.value >= game.treeCost.budget) {
                        
                        // Plant tree
                        plantTree();
                        
                        // Update resources
                        treeChallengeState.resources.water.value -= game.treeCost.water;
                        treeChallengeState.resources.seeds.value -= game.treeCost.seeds;
                        treeChallengeState.resources.energy.value -= game.treeCost.energy;
                        treeChallengeState.resources.budget.value -= game.treeCost.budget;
                        
                        // Update score and combo
                        treeChallengeState.combo++;
                        const points = game.treeReward + (treeChallengeState.combo * 2);
                        treeChallengeState.score += points;
                        treeChallengeState.xp += 10;
                        
                        // Check for level up
                        if (treeChallengeState.xp >= 100) {
                            treeChallengeState.level++;
                            treeChallengeState.xp = 0;
                            document.getElementById('tree-level').textContent = treeChallengeState.level;
                            showLevelUpNotification(treeChallengeState.level);
                        }
                        
                        document.getElementById('tree-xp').textContent = treeChallengeState.xp;
                        document.getElementById('tree-level-fill').style.width = `${treeChallengeState.xp}%`;
                        
                        // Update UI
                        updateTreeChallengeUI();
                        
                        // Show floating coins
                        showFloatingCoins(document.getElementById('plant-tree-btn'), points);
                        
                        // Play sound
                        playSound('collect');
                        
                        // Check for random obstacles
                        if (Math.random() < 0.3) {
                            const obstacle = game.obstacles[Math.floor(Math.random() * game.obstacles.length)];
                            applyObstacle(obstacle);
                        }
                        
                        // Check for game completion
                        if (treeChallengeState.trees >= 20) {
                            endActionGame(gameId, true);
                        }
                    } else {
                        showFeedback('Not enough resources!', false);
                        playSound('error');
                    }
                });
                
                // Add event listeners to control buttons
                document.getElementById('tree-retry').addEventListener('click', () => {
                    setupActionGame(gameId);
                });
                
                document.getElementById('tree-next').addEventListener('click', () => {
                    endActionGame(gameId, false);
                });
            }
        }
        
        // Function to plant a tree
        function plantTree() {
            treeChallengeState.trees++;
            
            // Add tree to display
            const treeDisplay = document.getElementById('tree-display');
            const tree = document.createElement('div');
            tree.className = 'tree-sprite planted';
            tree.innerHTML = '🌳';
            
            // Random position
            const left = Math.random() * 80 + 10;
            tree.style.left = `${left}%`;
            
            treeDisplay.appendChild(tree);
        }
        
        // Function to apply obstacle
        function applyObstacle(obstacle) {
            treeChallengeState.obstacles.push(obstacle);
            
            if (obstacle.effect === 'water') {
                treeChallengeState.resources.water.value += obstacle.value;
                if (treeChallengeState.resources.water.value < 0) {
                    treeChallengeState.resources.water.value = 0;
                }
            } else if (obstacle.effect === 'trees') {
                treeChallengeState.trees += obstacle.value;
                if (treeChallengeState.trees < 0) {
                    treeChallengeState.trees = 0;
                }
                
                // Remove trees from display
                const trees = document.querySelectorAll('.tree-sprite');
                for (let i = 0; i < Math.abs(obstacle.value); i++) {
                    if (trees.length > 0) {
                        trees[trees.length - 1].remove();
                    }
                }
            }
            
            // Update UI
            updateTreeChallengeUI();
            
            // Show feedback
            showFeedback(`Obstacle: ${obstacle.name}!`, false);
            
            // Play sound
            playSound('obstacle');
        }
        
        // Function to update tree challenge UI
        function updateTreeChallengeUI() {
            document.getElementById('tree-score').textContent = treeChallengeState.score;
            document.getElementById('water-value').textContent = treeChallengeState.resources.water.value;
            document.getElementById('seeds-value').textContent = treeChallengeState.resources.seeds.value;
            document.getElementById('energy-value').textContent = treeChallengeState.resources.energy.value;
            document.getElementById('budget-value').textContent = treeChallengeState.resources.budget.value;
            
            document.getElementById('water-meter').style.width = `${(treeChallengeState.resources.water.value / treeChallengeState.resources.water.max) * 100}%`;
            document.getElementById('seeds-meter').style.width = `${(treeChallengeState.resources.seeds.value / treeChallengeState.resources.seeds.max) * 100}%`;
            document.getElementById('energy-meter').style.width = `${(treeChallengeState.resources.energy.value / treeChallengeState.resources.energy.max) * 100}%`;
            document.getElementById('budget-meter').style.width = `${(treeChallengeState.resources.budget.value / treeChallengeState.resources.budget.max) * 100}%`;
        }
        
        // Function to render tree challenge
        function renderTreeChallenge() {
            let html = '';
            
            // Add ground
            html += `<div style="position: absolute; bottom: 0; width: 100%; height: 20%; background-color: #8B4513; z-index: -1;"></div>`;
            
            // Add sky
            html += `<div style="position: absolute; top: 0; width: 100%; height: 80%; background: linear-gradient(to bottom, #87CEEB, #E0F7FA); z-index: -1;"></div>`;
            
            // Add trees
            for (let i = 0; i < treeChallengeState.trees; i++) {
                const left = Math.random() * 80 + 10;
                html += `<div class="tree-sprite" style="left: ${left}%">🌳</div>`;
            }
            
            return html;
        }
        
        // Function to start timer
        function startTimer() {
            timerInterval = setInterval(() => {
                timeRemaining--;
                document.getElementById('timer-value').textContent = timeRemaining;
                document.getElementById('timer-fill').style.width = `${(timeRemaining / 60) * 100}%`;
                
                // Add warning class when time is running out
                if (timeRemaining <= 10) {
                    document.querySelector('.game-timer').classList.add('timer-warning');
                }
                
                // End game when time runs out
                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    endQuizGame();
                }
            }, 1000);
        }
        
        // Function to update progress bar
        function updateProgressBar() {
            const questions = gameData[currentGame].questions;
            const progress = (currentQuestionIndex / questions.length) * 100;
            document.getElementById('progress-fill').style.width = `${progress}%`;
        }
        
        // Function to show feedback
        function showFeedback(message, isCorrect) {
            const feedback = document.getElementById('feedback');
            feedback.textContent = message;
            feedback.className = 'game-feedback ' + (isCorrect ? 'correct' : 'incorrect');
            feedback.style.display = 'block';
        }
        
        // Function to end quiz game
        function endQuizGame() {
            clearInterval(timerInterval);
            
            const gameContainer = document.getElementById('game-container');
            const questions = gameData[currentGame].questions;
            const percentage = Math.round((gameScore / (questions.length * 10)) * 100);
            
            // Set progress to 100% at the end
            const progressFill = document.getElementById('progress-fill');
            if (progressFill) {
                progressFill.style.width = '100%';
            }
            
            // Check for perfect score achievement
            if (percentage === 100) {
                unlockAchievement('perfect-score');
            }
            
            // Check for eco warrior achievement
            if (gameScore >= 1000) {
                unlockAchievement('eco-warrior');
            }
            
            gameContainer.innerHTML = `
                <div class="game-over-screen">
                    <h2>Quiz Completed!</h2>
                    <div class="final-score">${gameScore} points</div>
                    <div class="score-message">You answered ${Math.round(gameScore / 10)} out of ${questions.length} questions correctly (${percentage}%)</div>
                    <div class="rewards-container">
                        <div class="reward-item">
                            <div class="reward-icon"><i class="fas fa-coins"></i></div>
                            <div class="reward-amount">+${gameScore}</div>
                            <div class="reward-label">EcoPoints</div>
                        </div>
                        <div class="reward-item">
                            <div class="reward-icon"><i class="fas fa-star"></i></div>
                            <div class="reward-amount">+${Math.floor(gameScore / 50)}</div>
                            <div class="reward-label">XP</div>
                        </div>
                    </div>
                    <div class="game-over-actions">
                        <button class="btn-game-modal btn-retry" onclick="startGame('${currentGame}')">Play Again</button>
                        <button class="btn-game-modal btn-next" onclick="closeModal()">Close</button>
                    </div>
                </div>
            `;
            
            // Update user points
            updateUserPoints(gameScore);
            
            // Complete active daily challenge if applicable
            if (activeDailyChallenge) {
                completeDailyChallenge(activeDailyChallenge);
                activeDailyChallenge = null;
            }
            
            // Save game progress only if game was completed successfully
            if (percentage >= 70) {
                saveGameProgress(currentGame, 25);
            }
        }
        
        // Function to end simulation game
        function endSimulationGame(gameId, completed) {
            let score = 0;
            let message = '';
            let rewards = [];
            
            if (gameId === 'ecosystem-sim') {
                score = ecosystemState.score;
                message = completed ? 
                    'Congratulations! You created a balanced ecosystem!' : 
                    'Game ended. Keep working on your ecosystem!';
                rewards = [
                    { icon: 'fa-coins', amount: score, label: 'EcoPoints' },
                    { icon: 'fa-star', amount: Math.floor(score / 10), label: 'XP' }
                ];
            } else if (gameId === 'renewable-city') {
                score = renewableCityState.score;
                message = completed ? 
                    'Congratulations! You built a sustainable city!' : 
                    'Game ended. Keep working on your renewable city!';
                rewards = [
                    { icon: 'fa-coins', amount: score, label: 'EcoPoints' },
                    { icon: 'fa-star', amount: Math.floor(score / 10), label: 'XP' }
                ];
            } else if (gameId === 'ocean-cleanup') {
                score = oceanCleanupState.score;
                message = completed ? 
                    'Congratulations! You cleaned the ocean!' : 
                    'Game ended. Keep working on ocean cleanup!';
                rewards = [
                    { icon: 'fa-coins', amount: score, label: 'EcoPoints' },
                    { icon: 'fa-star', amount: Math.floor(score / 10), label: 'XP' }
                ];
            }
            
            const gameContainer = document.getElementById('game-container');
            gameContainer.innerHTML = `
                <div class="game-over-screen">
                    <h2>Game Completed!</h2>
                    <div class="final-score">${score} points</div>
                    <div class="score-message">${message}</div>
                    <div class="rewards-container">
                        ${rewards.map(reward => `
                            <div class="reward-item">
                                <div class="reward-icon"><i class="fas ${reward.icon}"></i></div>
                                <div class="reward-amount">+${reward.amount}</div>
                                <div class="reward-label">${reward.label}</div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="game-over-actions">
                        <button class="btn-game-modal btn-retry" onclick="startGame('${gameId}')">Play Again</button>
                        <button class="btn-game-modal btn-next" onclick="closeModal()">Close</button>
                    </div>
                </div>
            `;
            
            // Update user points
            updateUserPoints(score);
            
            // Complete active daily challenge if applicable
            if (activeDailyChallenge) {
                completeDailyChallenge(activeDailyChallenge);
                activeDailyChallenge = null;
            }
            
            // Save game progress only if game was completed successfully
            if (completed) {
                saveGameProgress(gameId, 25);
            }
        }
        
        // Function to end puzzle game
        function endPuzzleGame(gameId, completed) {
            let score = 0;
            let message = '';
            let rewards = [];
            
            if (gameId === 'recycle-puzzle') {
                score = recycleState.score;
                message = completed ? 
                    'Congratulations! You sorted all waste correctly!' : 
                    'Game ended. Keep working on your recycling skills!';
                rewards = [
                    { icon: 'fa-coins', amount: score, label: 'EcoPoints' },
                    { icon: 'fa-star', amount: Math.floor(score / 10), label: 'XP' }
                ];
            } else if (gameId === 'carbon-puzzle') {
                score = carbonPuzzleState.score;
                message = completed ? 
                    'Congratulations! You reduced your carbon footprint!' : 
                    'Game ended. Keep working on reducing your carbon footprint!';
                rewards = [
                    { icon: 'fa-coins', amount: score, label: 'EcoPoints' },
                    { icon: 'fa-star', amount: Math.floor(score / 10), label: 'XP' }
                ];
            }
            
            const gameContainer = document.getElementById('game-container');
            gameContainer.innerHTML = `
                <div class="game-over-screen">
                    <h2>Puzzle Completed!</h2>
                    <div class="final-score">${score} points</div>
                    <div class="score-message">${message}</div>
                    <div class="rewards-container">
                        ${rewards.map(reward => `
                            <div class="reward-item">
                                <div class="reward-icon"><i class="fas ${reward.icon}"></i></div>
                                <div class="reward-amount">+${reward.amount}</div>
                                <div class="reward-label">${reward.label}</div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="game-over-actions">
                        <button class="btn-game-modal btn-retry" onclick="startGame('${gameId}')">Play Again</button>
                        <button class="btn-game-modal btn-next" onclick="closeModal()">Close</button>
                    </div>
                </div>
            `;
            
            // Update user points
            updateUserPoints(score);
            
            // Complete active daily challenge if applicable
            if (activeDailyChallenge) {
                completeDailyChallenge(activeDailyChallenge);
                activeDailyChallenge = null;
            }
            
            // Save game progress only if game was completed successfully
            if (completed) {
                saveGameProgress(gameId, 25);
            }
        }
        
        // Function to end action game
        function endActionGame(gameId, completed) {
            let score = 0;
            let message = '';
            let rewards = [];
            
            if (gameId === 'tree-challenge') {
                score = treeChallengeState.score;
                message = completed ? 
                    'Congratulations! You planted a forest!' : 
                    `Game ended. You planted ${treeChallengeState.trees} trees!`;
                rewards = [
                    { icon: 'fa-coins', amount: score, label: 'EcoPoints' },
                    { icon: 'fa-star', amount: Math.floor(score / 10), label: 'XP' }
                ];
            }
            
            const gameContainer = document.getElementById('game-container');
            gameContainer.innerHTML = `
                <div class="game-over-screen">
                    <h2>Challenge Completed!</h2>
                    <div class="final-score">${score} points</div>
                    <div class="score-message">${message}</div>
                    <div class="rewards-container">
                        ${rewards.map(reward => `
                            <div class="reward-item">
                                <div class="reward-icon"><i class="fas ${reward.icon}"></i></div>
                                <div class="reward-amount">+${reward.amount}</div>
                                <div class="reward-label">${reward.label}</div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="game-over-actions">
                        <button class="btn-game-modal btn-retry" onclick="startGame('${gameId}')">Play Again</button>
                        <button class="btn-game-modal btn-next" onclick="closeModal()">Close</button>
                    </div>
                </div>
            `;
            
            // Update user points
            updateUserPoints(score);
            
            // Complete active daily challenge if applicable
            if (activeDailyChallenge) {
                completeDailyChallenge(activeDailyChallenge);
                activeDailyChallenge = null;
            }
            
            // Save game progress only if game was completed successfully
            if (completed) {
                saveGameProgress(gameId, 25);
            }
        }
        
        // Function to update user points
        function updateUserPoints(points) {
            userStats.points += points;
            
            // Update today's points for daily challenge
            const today = new Date().toDateString();
            const todayPoints = parseInt(localStorage.getItem('todayPoints')) || 0;
            const newTodayPoints = todayPoints + points;
            localStorage.setItem('todayPoints', newTodayPoints);
            
            // Check for daily points challenge
            if (newTodayPoints >= 200 && !userStats.dailyChallenges.completed['daily-points']) {
                completeDailyChallenge('daily-points');
            }
            
            // Update user level
            updateUserLevel();
            
            // Save user stats
            saveUserStats();
            
            // Update UI
            document.getElementById('user-points').textContent = userStats.points;
        }
        
        // Function to close modal
        function closeModal() {
            const modal = document.getElementById('game-modal');
            modal.style.display = 'none';
            
            // Reset timer
            clearInterval(timerInterval);
            timeRemaining = 60;
            document.querySelector('.game-timer').classList.remove('timer-warning');
        }
        
        // Function to show leaderboard
        function showLeaderboard(gameId) {
            const modal = document.getElementById('leaderboard-modal');
            const leaderboardList = document.getElementById('leaderboard-list');
            
            // Generate mock leaderboard data
            const leaderboardData = [
                { rank: 1, name: 'EcoWarrior', score: 2450, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
                { rank: 2, name: 'GreenGuru', score: 2100, avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
                { rank: 3, name: 'NatureLover', score: 1980, avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
                { rank: 4, name: 'EarthHero', score: 1750, avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
                { rank: 5, name: 'PlanetSaver', score: 1620, avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
                { rank: 6, name: 'ForestFriend', score: 1500, avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
                { rank: 7, name: 'OceanGuardian', score: 1380, avatar: 'https://randomuser.me/api/portraits/men/7.jpg' },
                { rank: 8, name: 'ClimateChampion', score: 1250, avatar: 'https://randomuser.me/api/portraits/women/8.jpg' }
            ];
            
            // Clear previous leaderboard
            leaderboardList.innerHTML = '';
            
            // Add current user to leaderboard
            const currentUser = {
                rank: userStats.points > 0 ? Math.floor(Math.random() * 5) + 4 : 10, // Random position for demo
                name: document.getElementById('profile-name').textContent,
                score: userStats.points,
                avatar: document.getElementById('profile-avatar').src,
                isCurrentUser: true
            };
            
            // Combine and sort by score
            const allPlayers = [...leaderboardData, currentUser]
                .sort((a, b) => b.score - a.score)
                .slice(0, 10); // Top 10 players
            
            // Update ranks
            allPlayers.forEach((player, index) => {
                player.rank = index + 1;
            });
            
            // Render leaderboard
            allPlayers.forEach(player => {
                const rankClass = player.rank === 1 ? 'first' : 
                                 player.rank === 2 ? 'second' : 
                                 player.rank === 3 ? 'third' : '';
                
                const leaderboardItem = document.createElement('div');
                leaderboardItem.className = `leaderboard-item ${player.isCurrentUser ? 'current-user' : ''}`;
                leaderboardItem.innerHTML = `
                    <div class="leaderboard-rank ${rankClass}">${player.rank}</div>
                    <img src="${player.avatar}" alt="${player.name}" class="leaderboard-avatar">
                    <div class="leaderboard-info">
                        <div class="leaderboard-name">${player.name} ${player.isCurrentUser ? '(You)' : ''}</div>
                        <div class="leaderboard-score">Score: <span class="leaderboard-points">${player.score}</span></div>
                    </div>
                `;
                
                leaderboardList.appendChild(leaderboardItem);
            });
            
            // Show modal
            modal.style.display = 'flex';
        }
        
        // Function to render games
        function renderGames() {
            const gamesContent = document.getElementById('games-content');
            
            // Create games sections
            const gamesSections = [
                {
                    title: 'Quiz Games',
                    games: [
                        { id: 'climate-quiz', title: 'Climate Change Quiz', description: 'Test your knowledge about climate change and its effects.', image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', difficulty: 3, points: 50, badge: 'new' },
                        { id: 'water-quiz', title: 'Water Conservation Quiz', description: 'Learn about water conservation and its importance.', image: 'https://images.unsplash.com/photo-1544738153-2e5a4c5e2f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', difficulty: 2, points: 40 },
                        { id: 'biodiversity-quiz', title: 'Biodiversity Quiz', description: 'Explore the diversity of life on Earth.', image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', difficulty: 4, points: 60 }
                    ]
                },
                {
                    title: 'Simulation Games',
                    games: [
                        { id: 'ecosystem-sim', title: 'Ecosystem Simulator', description: 'Create and balance your own ecosystem.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', difficulty: 3, points: 70 },
                        { id: 'renewable-city', title: 'Renewable Energy City', description: 'Build a city powered by renewable energy.', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', difficulty: 4, points: 80 },
                        { id: 'ocean-cleanup', title: 'Ocean Cleanup', description: 'Help clean the ocean and protect marine life.', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', difficulty: 3, points: 75 }
                    ]
                },
                {
                    title: 'Puzzle Games',
                    games: [
                        { id: 'recycle-puzzle', title: 'Recycle Puzzle', description: 'Sort waste into the correct bins.', image: 'https://images.unsplash.com/photo-1532996400987-7253a9e6de87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', difficulty: 2, points: 45 },
                        { id: 'carbon-puzzle', title: 'Carbon Footprint Puzzle', description: 'Match activities with solutions to reduce carbon footprint.', image: 'https://images.unsplash.com/photo-1544738153-2e5a4c5e2f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', difficulty: 3, points: 55 }
                    ]
                },
                {
                    title: 'Action Games',
                    games: [
                        { id: 'tree-challenge', title: 'Tree Planting Challenge', description: 'Plant as many trees as you can while managing resources.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', difficulty: 2, points: 50, badge: 'hot' }
                    ]
                }
            ];
            
            // Render each section
            gamesSections.forEach(section => {
                const sectionElement = document.createElement('div');
                sectionElement.className = 'games-section';
                sectionElement.innerHTML = `
                    <h2 style="margin-bottom: 20px; color: var(--primary-green);">${section.title}</h2>
                    <div class="games-container" id="${section.title.toLowerCase().replace(' ', '-')}-games">
                        ${section.games.map(game => `
                            <div class="game-card" data-game-id="${game.id}">
                                <div class="game-image" style="background-image: url('${game.image}')">
                                    ${game.badge ? `<div class="game-badge ${game.badge}">${game.badge === 'new' ? 'NEW' : 'HOT'}</div>` : ''}
                                    ${!isGameUnlocked(game.id) ? '<div class="game-lock-overlay"><i class="fas fa-lock"></i></div>' : ''}
                                </div>
                                <div class="game-content">
                                    <h3 class="game-title">${game.title}</h3>
                                    <p class="game-description">${game.description}</p>
                                    <div class="game-meta">
                                        <div class="game-difficulty">
                                            ${Array(5).fill().map((_, i) => `<i class="fas fa-star difficulty-star ${i < game.difficulty ? '' : 'empty'}"></i>`).join('')}
                                        </div>
                                        <div class="game-points">
                                            <i class="fas fa-coins"></i>
                                            <span>${game.points}</span>
                                        </div>
                                    </div>
                                    <div class="game-actions">
                                        <button class="btn-game btn-play" onclick="startGame('${game.id}')" ${!isGameUnlocked(game.id) ? 'disabled' : ''}>Play</button>
                                        <button class="btn-game btn-leaderboard" onclick="showLeaderboard('${game.id}')">Leaderboard</button>
                                    </div>
                                </div>
                                <div class="game-progress-bar">
                                    <div class="game-progress-fill" style="width: 0%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
                
                gamesContent.appendChild(sectionElement);
            });
            
            // Update game progress bars
            updateGameProgress();
        }
        
        // Function to update game progress bars
        function updateGameProgress() {
            // Get game progress from localStorage
            const gameProgress = JSON.parse(localStorage.getItem('gameProgress')) || {};
            
            // Update each game card
            document.querySelectorAll('.game-card').forEach(card => {
                const gameId = card.getAttribute('data-game-id');
                const progressFill = card.querySelector('.game-progress-fill');
                
                // Initialize to 0 if not exists
                if (!gameProgress[gameId]) {
                    gameProgress[gameId] = 0;
                    localStorage.setItem('gameProgress', JSON.stringify(gameProgress));
                }
                
                // Set progress
                if (progressFill) {
                    progressFill.style.width = `${gameProgress[gameId]}%`;
                }
            });
        }
        
        // Function to save game progress
        function saveGameProgress(gameId, progress) {
            const gameProgress = JSON.parse(localStorage.getItem('gameProgress')) || {};
            
            // Initialize to 0 if not exists
            if (!gameProgress[gameId]) {
                gameProgress[gameId] = 0;
            }
            
            // Add progress but cap at 100%
            gameProgress[gameId] = Math.min(100, gameProgress[gameId] + progress);
            localStorage.setItem('gameProgress', JSON.stringify(gameProgress));
            
            // Update progress bar
            const gameCard = document.querySelector(`.game-card[data-game-id="${gameId}"]`);
            if (gameCard) {
                const progressFill = gameCard.querySelector('.game-progress-fill');
                if (progressFill) {
                    progressFill.style.width = `${gameProgress[gameId]}%`;
                }
            }
        }
        
        // Function to update event timer
        function updateEventTimer() {
            const eventTimer = document.getElementById('event-timer');
            if (!eventTimer) return;
            
            // Set end date (2 days 14:32:18 from now for demo)
            const endDate = new Date();
            endDate.setDate(endDate.getDate() + 2);
            endDate.setHours(endDate.getHours() + 14);
            endDate.setMinutes(endDate.getMinutes() + 32);
            endDate.setSeconds(endDate.getSeconds() + 18);
            
            // Update timer every second
            const timerInterval = setInterval(() => {
                const now = new Date();
                const diff = endDate - now;
                
                if (diff <= 0) {
                    clearInterval(timerInterval);
                    eventTimer.textContent = 'Event ended';
                    return;
                }
                
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                
                eventTimer.textContent = `${days} days ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }, 1000);
        }
        
        // Function to check if user is logged in
        function checkUserLogin() {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const userName = localStorage.getItem('userName') || 'Guest';
            const userRole = localStorage.getItem('userRole') || 'Visitor';
            const userAvatar = localStorage.getItem('userAvatar') || 'https://randomuser.me/api/portraits/lego/0.jpg';
            
            // Update profile UI
            document.getElementById('profile-name').textContent = userName;
            document.getElementById('profile-role').textContent = userRole;
            document.getElementById('profile-avatar').src = userAvatar;
            
            // Show/hide login/logout buttons
            const loginBtn = document.getElementById('login-btn');
            const logoutBtn = document.getElementById('logout-btn');
            
            if (isLoggedIn) {
                loginBtn.style.display = 'none';
                logoutBtn.style.display = 'block';
                
                // Show protected navigation items
                document.querySelectorAll('.nav-protected').forEach(item => {
                    item.classList.remove('hidden');
                });
            } else {
                loginBtn.style.display = 'block';
                logoutBtn.style.display = 'none';
                
                // Hide protected navigation items
                document.querySelectorAll('.nav-protected').forEach(item => {
                    item.classList.add('hidden');
                });
            }
            
            // Add logout functionality
            logoutBtn.addEventListener('click', () => {
                localStorage.setItem('isLoggedIn', 'false');
                window.location.reload();
            });
        }
        
        // Function to initialize the page
        function initPage() {
            // Check user login status
            checkUserLogin();
            
            // Load user stats
            loadUserStats();
            
            // Render games
            renderGames();
            
            // Unlock games based on progress
            unlockGamesBasedOnProgress();
            
            // Update event timer
            updateEventTimer();
            
            // Add event listeners
            document.getElementById('modal-close').addEventListener('click', closeModal);
            document.getElementById('leaderboard-close').addEventListener('click', () => {
                document.getElementById('leaderboard-modal').style.display = 'none';
            });
            
            document.getElementById('daily-reward-btn').addEventListener('click', claimDailyReward);
            
            // Add sound toggle
            document.getElementById('sound-toggle').addEventListener('click', toggleSound);
            
            // Load sound preference
            const savedSoundPreference = localStorage.getItem('soundEnabled');
            if (savedSoundPreference !== null) {
                soundEnabled = savedSoundPreference === 'true';
                const soundIcon = document.getElementById('sound-icon');
                soundIcon.className = soundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
            }
            
            // Add leaderboard tab functionality
            const leaderboardTabs = document.querySelectorAll('.leaderboard-tab');
            leaderboardTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs
                    leaderboardTabs.forEach(t => t.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    tab.classList.add('active');
                    
                    // In a real implementation, you would load different leaderboard data based on the tab
                    // For this example, we'll just reload the same data
                    showLeaderboard(currentGame);
                });
            });
        }
        
        // Initialize page when DOM is loaded
        document.addEventListener('DOMContentLoaded', initPage);
    