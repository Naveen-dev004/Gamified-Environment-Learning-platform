
        // Check if user is logged in
        function checkLoginStatus() {
            // Using localStorage to maintain login state across browser sessions
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const userName = localStorage.getItem('userName') || 'Guest';
            const userRole = localStorage.getItem('userRole') || 'Visitor';
            const userAvatar = localStorage.getItem('userAvatar') || 'https://randomuser.me/api/portraits/lego/0.jpg';
            
            const protectedNavItems = document.querySelectorAll('.nav-protected');
            
            document.getElementById('profile-name').textContent = userName;
            document.getElementById('profile-role').textContent = userRole;
            document.getElementById('profile-avatar').src = userAvatar;
            
            if (isLoggedIn) {
                protectedNavItems.forEach(item => {
                    item.style.display = 'list-item'; // Show protected links
                    if (item.classList.contains('btn')) item.style.display = 'inline-block'; // Handle CTA buttons
                });
                document.getElementById('logout-btn').style.display = 'flex';
                document.getElementById('login-btn').style.display = 'none';
            } else {
                protectedNavItems.forEach(item => {
                    item.style.display = 'none'; // Hide protected links
                });
                document.getElementById('logout-btn').style.display = 'none';
                document.getElementById('login-btn').style.display = 'flex';
            }
        }
        
        // Toggle profile dropdown
        function toggleDropdown() {
            document.getElementById("profile-dropdown").classList.toggle("show");
        }
        
        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.profile-btn') && !event.target.closest('.profile-btn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                for (var i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
        
        // Logout function
        document.getElementById('logout-btn').addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.clear(); // Clear all user data from localStorage
            checkLoginStatus(); // Update the UI to reflect logout
            
            const logoutMessage = document.createElement('div');
            logoutMessage.style.position = 'fixed';
            logoutMessage.style.top = '20px';
            logoutMessage.style.right = '20px';
            logoutMessage.style.backgroundColor = 'var(--light-green)';
            logoutMessage.style.color = 'var(--white)';
            logoutMessage.style.padding = '15px 20px';
            logoutMessage.style.borderRadius = '5px';
            logoutMessage.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
            logoutMessage.style.zIndex = '1001';
            logoutMessage.textContent = 'You have been logged out successfully.';
            document.body.appendChild(logoutMessage);
            setTimeout(() => logoutMessage.remove(), 3000);
        });
        
        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        mobileMenuBtn.addEventListener('click', () => {
            const isVisible = navLinks.style.display === 'flex';
            navLinks.style.display = isVisible ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'var(--white)';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
        
        // Learning Module Functions
        function openLearningModule(module) {
            // Hide all modules
            const modules = document.querySelectorAll('.learning-module');
            modules.forEach(m => m.classList.remove('active'));
            
            // Show selected module
            document.getElementById(`${module}-module`).classList.add('active');
            
            // Scroll to module
            document.getElementById('learning-module-container').scrollIntoView({ behavior: 'smooth' });
        }
        
        function showLearningTab(module, tab) {
            // Hide all tabs for this module
            const tabs = document.querySelectorAll(`#${module}-module .learning-tab`);
            tabs.forEach(t => t.classList.remove('active'));
            
            // Hide all content for this module
            const contents = document.querySelectorAll(`#${module}-module .learning-content`);
            contents.forEach(c => c.classList.remove('active'));
            
            // Show selected tab
            event.target.classList.add('active');
            
            // Show selected content
            document.getElementById(`${module}-${tab}`).classList.add('active');
        }
        
        // Quiz state management
        const quizState = {
            environment: {
                totalQuestions: 5,
                score: 0,
                answers: {},
                allAnswered: false
            },
            climate: {
                totalQuestions: 5,
                score: 0,
                answers: {},
                allAnswered: false
            },
            nature: {
                totalQuestions: 5,
                score: 0,
                answers: {},
                allAnswered: false
            },
            warming: {
                totalQuestions: 5,
                score: 0,
                answers: {},
                allAnswered: false
            },
            sustainable: {
                totalQuestions: 5,
                score: 0,
                answers: {},
                allAnswered: false
            },
            disasters: {
                totalQuestions: 5,
                score: 0,
                answers: {},
                allAnswered: false
            }
        };
        
        function selectQuizOption(option, isCorrect, module, questionNumber) {
            // Remove selection from all options in this question
            const options = option.parentElement.querySelectorAll('.quiz-option');
            options.forEach(o => {
                o.classList.remove('selected', 'correct', 'incorrect');
            });
            
            // Select this option
            option.classList.add('selected');
            
            // Store the answer
            quizState[module].answers[questionNumber] = {
                selected: option,
                isCorrect: isCorrect
            };
        }
        
        function checkQuizAnswer(module) {
            const state = quizState[module];
            let allAnswered = true;
            let unansweredQuestions = [];
            
            // Reset score to recalculate
            state.score = 0;
            
            // Reset all feedback and styling
            for (let i = 1; i <= state.totalQuestions; i++) {
                const feedback = document.getElementById(`quiz-feedback-${i}`);
                feedback.style.display = 'none';
                feedback.textContent = '';
                feedback.className = 'quiz-feedback';
                
                const options = document.querySelectorAll(`#${module}-quiz .quiz-question:nth-child(${i * 2 - 1}) .quiz-option`);
                options.forEach(opt => {
                    opt.classList.remove('correct', 'incorrect');
                });
            }
            
            // Check each question
            for (let i = 1; i <= state.totalQuestions; i++) {
                const answer = state.answers[i];
                
                if (answer) {
                    const feedback = document.getElementById(`quiz-feedback-${i}`);
                    
                    // Show correct/incorrect styling
                    if (answer.isCorrect) {
                        feedback.textContent = 'Correct! Well done.';
                        feedback.className = 'quiz-feedback correct';
                        answer.selected.classList.add('correct');
                        state.score += 1;
                    } else {
                        feedback.textContent = 'Incorrect. The correct answer is highlighted.';
                        feedback.className = 'quiz-feedback incorrect';
                        answer.selected.classList.add('incorrect');
                        
                        // Highlight the correct answer
                        const options = answer.selected.parentElement.querySelectorAll('.quiz-option');
                        options.forEach(opt => {
                            if (opt.getAttribute('onclick').includes('true')) {
                                opt.classList.add('correct');
                            }
                        });
                    }
                    
                    feedback.style.display = 'block';
                } else {
                    allAnswered = false;
                    unansweredQuestions.push(i);
                }
            }
            
            // Check if all questions have been answered
            if (allAnswered) {
                const checkBtn = document.querySelector(`#${module}-quiz .quiz-actions .btn-secondary`);
                checkBtn.textContent = 'Show Results';
                checkBtn.setAttribute('onclick', `showQuizResult('${module}')`);
            } else {
                // Show a message that some questions are not answered
                const message = document.createElement('div');
                message.style.position = 'fixed';
                message.style.top = '20px';
                message.style.right = '20px';
                message.style.backgroundColor = 'var(--light-green)';
                message.style.color = 'var(--white)';
                message.style.padding = '15px 20px';
                message.style.borderRadius = '5px';
                message.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                message.style.zIndex = '1001';
                message.textContent = `Please answer all questions. Unanswered: ${unansweredQuestions.join(', ')}`;
                document.body.appendChild(message);
                setTimeout(() => message.remove(), 3000);
            }
        }
        
        function showQuizResult(module) {
            const state = quizState[module];
            const score = state.score;
            const totalQuestions = state.totalQuestions;
            const percentage = Math.round((score / totalQuestions) * 100);
            
            // Hide all questions
            const questions = document.querySelectorAll(`#${module}-quiz .quiz-question`);
            questions.forEach(q => q.style.display = 'none');
            
            // Hide quiz actions
            document.querySelector(`#${module}-quiz .quiz-actions`).style.display = 'none';
            
            // Show result
            const resultElement = document.getElementById(`${module}-quiz-result`);
            const scoreElement = document.getElementById(`${module}-quiz-score`);
            const textElement = document.getElementById(`${module}-quiz-text`);
            const feedbackElement = document.getElementById(`${module}-quiz-feedback`);
            
            scoreElement.textContent = `${percentage}%`;
            textElement.textContent = `You scored ${score} out of ${totalQuestions}`;
            
            // Set feedback based on score
            if (percentage >= 80) {
                feedbackElement.textContent = 'Excellent! You have a strong understanding of this topic.';
                feedbackElement.className = 'quiz-result-feedback excellent';
            } else if (percentage >= 60) {
                feedbackElement.textContent = 'Good job! You have a solid understanding, but there is room for improvement.';
                feedbackElement.className = 'quiz-result-feedback good';
            } else {
                feedbackElement.textContent = 'You may need to review the material again. Try retaking the quiz after studying more.';
                feedbackElement.className = 'quiz-result-feedback needs-improvement';
            }
            
            resultElement.style.display = 'block';
            
            // Update progress based on quiz score
            if (percentage >= 70) {
                completeQuiz(module, percentage);
            }
            
            // Show popup notification
            showQuizPopup(module, percentage);
        }
        
        function closeQuizResult(module) {
            // Reset quiz state
            quizState[module] = {
                totalQuestions: 5,
                score: 0,
                answers: {},
                allAnswered: false
            };
            
            // Hide result
            document.getElementById(`${module}-quiz-result`).style.display = 'none';
            
            // Show quiz actions
            const quizActions = document.querySelector(`#${module}-quiz .quiz-actions`);
            quizActions.style.display = 'flex';
            
            // Reset button text and function
            const checkBtn = quizActions.querySelector('.btn-secondary');
            checkBtn.textContent = 'Check All Answers';
            checkBtn.setAttribute('onclick', `checkQuizAnswer('${module}')`);
            
            // Show all questions
            const questions = document.querySelectorAll(`#${module}-quiz .quiz-question`);
            questions.forEach(q => {
                q.style.display = 'block';
            });
            
            // Clear selections and feedback
            const options = document.querySelectorAll(`#${module}-quiz .quiz-option`);
            options.forEach(o => {
                o.classList.remove('selected', 'correct', 'incorrect');
            });
            
            const feedbacks = document.querySelectorAll(`#${module}-quiz .quiz-feedback`);
            feedbacks.forEach(f => {
                f.style.display = 'none';
                f.textContent = '';
                f.className = 'quiz-feedback';
            });
        }
        
        function showQuizPopup(module, percentage) {
            // Create overlay
            const overlay = document.createElement('div');
            overlay.className = 'quiz-popup-overlay';
            
            // Create popup
            const popup = document.createElement('div');
            popup.className = 'quiz-popup';
            
            // Set popup content based on score
            let title, message, icon;
            
            if (percentage >= 80) {
                title = 'Excellent Work!';
                message = `You've scored ${percentage}% on the ${module} quiz. You have a strong understanding of this topic!`;
                icon = '<i class="fas fa-trophy" style="font-size: 48px; color: var(--sunny-yellow); margin-bottom: 15px;"></i>';
            } else if (percentage >= 60) {
                title = 'Good Job!';
                message = `You've scored ${percentage}% on the ${module} quiz. You have a solid understanding, but there is room for improvement.`;
                icon = '<i class="fas fa-medal" style="font-size: 48px; color: var(--light-green); margin-bottom: 15px;"></i>';
            } else {
                title = 'Keep Trying!';
                message = `You've scored ${percentage}% on the ${module} quiz. Review the material and try again to improve your score.`;
                icon = '<i class="fas fa-redo" style="font-size: 48px; color: var(--primary-green); margin-bottom: 15px;"></i>';
            }
            
            popup.innerHTML = `
                ${icon}
                <h3>${title}</h3>
                <p>${message}</p>
                <button class="btn btn-primary" onclick="closeQuizPopup()">Continue</button>
            `;
            
            // Add to document
            document.body.appendChild(overlay);
            document.body.appendChild(popup);
            
            // Close popup when clicking overlay
            overlay.addEventListener('click', closeQuizPopup);
        }
        
        function closeQuizPopup() {
            const overlay = document.querySelector('.quiz-popup-overlay');
            const popup = document.querySelector('.quiz-popup');
            
            if (overlay) overlay.remove();
            if (popup) popup.remove();
        }
        
        // Progress tracking functions
        function completeLesson(module, lessonNumber) {
            // Get current progress from localStorage or initialize if not exists
            let progress = JSON.parse(localStorage.getItem(`progress-${module}`)) || {
                completedLessons: [],
                quizCompleted: false,
                quizScore: 0
            };
            
            // Add lesson to completed lessons if not already there
            if (!progress.completedLessons.includes(lessonNumber)) {
                progress.completedLessons.push(lessonNumber);
                
                // Update button appearance
                const button = document.getElementById(`${module}-lesson-${lessonNumber}`);
                if (button) {
                    button.classList.remove('btn-secondary');
                    button.classList.add('btn-completed');
                    button.innerHTML = '<i class="fas fa-check"></i> Completed';
                    button.disabled = true;
                }
            }
            
            // Save updated progress
            localStorage.setItem(`progress-${module}`, JSON.stringify(progress));
            
            // Update progress bar
            updateProgress(module);
            
            // Check if module is completed and unlock games
            unlockGamesBasedOnProgress();
            
            // Show confirmation message
            showCompletionMessage(`Lesson ${lessonNumber} marked as completed!`);
        }
        
        function completeQuiz(module, score) {
            // Get current progress from localStorage or initialize if not exists
            let progress = JSON.parse(localStorage.getItem(`progress-${module}`)) || {
                completedLessons: [],
                quizCompleted: false,
                quizScore: 0
            };
            
            // Update quiz completion status
            progress.quizCompleted = true;
            progress.quizScore = score;
            
            // Save updated progress
            localStorage.setItem(`progress-${module}`, JSON.stringify(progress));
            
            // Update progress bar
            updateProgress(module);
            
            // Check if module is completed and unlock games
            unlockGamesBasedOnProgress();
            
            // Show confirmation message
            showCompletionMessage(`Quiz completed with a score of ${score}%!`);
        }
        
        function updateProgress(module) {
            // Get the module card
            const card = document.querySelector(`[data-module="${module}"]`);
            if (!card) return;
            
            // Get progress data
            const progress = JSON.parse(localStorage.getItem(`progress-${module}`)) || {
                completedLessons: [],
                quizCompleted: false,
                quizScore: 0
            };
            
            // Get total number of lessons for this module
            const totalLessonsText = card.querySelector('.learning-stats span:last-child').textContent;
            const totalLessons = parseInt(totalLessonsText);
            
            // Calculate progress percentage
            const completedItems = progress.completedLessons.length + (progress.quizCompleted ? 1 : 0);
            const totalItems = totalLessons + 1; // lessons + quiz
            const percentage = Math.round((completedItems / totalItems) * 100);
            
            // Update progress bar
            const progressBar = card.querySelector('.learning-progress-bar');
            const progressText = card.querySelector('.progress-text');
            
            if (progressBar && progressText) {
                progressBar.style.width = `${percentage}%`;
                progressText.textContent = `${percentage}% Complete`;
            }
        }
        
        function initializeProgress() {
            const modules = ['environment', 'climate', 'nature', 'warming', 'sustainable', 'disasters'];
            
            modules.forEach(module => {
                updateProgress(module);
                
                // Update lesson buttons based on completed lessons
                const progress = JSON.parse(localStorage.getItem(`progress-${module}`)) || {
                    completedLessons: [],
                    quizCompleted: false,
                    quizScore: 0
                };
                
                // Update each lesson button
                progress.completedLessons.forEach(lessonNumber => {
                    const button = document.getElementById(`${module}-lesson-${lessonNumber}`);
                    if (button) {
                        button.classList.remove('btn-secondary');
                        button.classList.add('btn-completed');
                        button.innerHTML = '<i class="fas fa-check"></i> Completed';
                        button.disabled = true;
                    }
                });
            });
        }
        
        function showCompletionMessage(message) {
            const messageElement = document.createElement('div');
            messageElement.className = 'completion-message';
            messageElement.textContent = message;
            
            document.body.appendChild(messageElement);
            
            // Remove message after 3 seconds
            setTimeout(() => {
                messageElement.remove();
            }, 3000);
        }
        
        // Game unlock functions
        function isGameUnlocked(gameId) {
            const unlockedGames = JSON.parse(localStorage.getItem('unlockedGames')) || ['climate-quiz', 'recycle-puzzle'];
            return unlockedGames.includes(gameId);
        }
        
        function unlockGame(gameId) {
            let unlockedGames = JSON.parse(localStorage.getItem('unlockedGames')) || ['climate-quiz', 'recycle-puzzle'];
            
            if (!unlockedGames.includes(gameId)) {
                unlockedGames.push(gameId);
                localStorage.setItem('unlockedGames', JSON.stringify(unlockedGames));
                showGameUnlockedNotification(gameId);
            }
        }
        
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
                    <button class="btn-play-now" onclick="window.location.href='games.html'">Play Now</button>
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
        
        // Initialize when page loads
        window.addEventListener('DOMContentLoaded', () => {
            // Initialize unlocked games if not exists
            if (!localStorage.getItem('unlockedGames')) {
                localStorage.setItem('unlockedGames', JSON.stringify(['climate-quiz', 'recycle-puzzle']));
            }
            
            checkLoginStatus();
            initializeProgress();
            
            // Initialize quiz buttons
            const modules = ['environment', 'climate', 'nature', 'warming', 'sustainable', 'disasters'];
            modules.forEach(module => {
                const checkBtn = document.querySelector(`#${module}-quiz .quiz-actions .btn-secondary`);
                if (checkBtn) {
                    checkBtn.textContent = 'Check All Answers';
                }
            });
        });
        
        const user = JSON.parse(localStorage.getItem("user"));
        // ✅ Save progress
        async function saveProgress(type, itemId, completed = false) {
            if (!user) return;
            await fetch("http://localhost:3000/api/progress", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: user._id, type, itemId, completed })
            });
        }
        // ✅ Load progress
        async function loadProgress(type) {
            if (!user) return;
            const res = await fetch(`http://localhost:3000/api/progress/${user._id}`);
            const data = await res.json();
            if (data.success) {
                data.progress
                    .filter(p => p.type === type)
                    .forEach(p => {
                        const el = document.querySelector(`#${p.itemId}`);
                        if (el) {
                            if (p.completed) {
                                el.classList.add("completed");
                            } else {
                                el.classList.add("active");
                                el.scrollIntoView({ behavior: "smooth" }); // resume
                            }
                        }
                    });
            }
        }
    