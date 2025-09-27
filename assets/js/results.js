
        document.addEventListener('DOMContentLoaded', () => {
            checkLoginStatus();
            
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                document.getElementById('user-name').textContent = user.name || 'Guest User';
                document.getElementById('user-avatar').src = user.avatar || 'https://randomuser.me/api/portraits/lego/0.jpg';
                document.getElementById('user-level').textContent = user.role || 'Beginner';
            }
            const gameResults = JSON.parse(localStorage.getItem('gameResults')) || [];
            const communityBadges = JSON.parse(localStorage.getItem('earnedBadges')) || [];
            
            updateDashboardStats(gameResults, communityBadges);
            updateProgressBars(gameResults);
            updateRecentActivity(gameResults, communityBadges);
            updateBadges(communityBadges);
            
            // Animate progress bars
            setTimeout(() => {
                document.querySelectorAll('.progress-fill').forEach(fill => {
                    const width = fill.style.width;
                    fill.style.width = '0%';
                    setTimeout(() => {
                        fill.style.width = width;
                    }, 100);
                });
            }, 300);
        });
        
        function checkLoginStatus() {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            if (!isLoggedIn) {
                alert('Please log in to view your results!');
                window.location.href = "login.html";
                return;
            }
            const userName = localStorage.getItem('userName') || 'Guest';
            const userRole = localStorage.getItem('userRole') || 'Visitor';
            const userAvatar = localStorage.getItem('userAvatar') || 'https://randomuser.me/api/portraits/lego/0.jpg';
            
            document.getElementById('profile-name').textContent = userName;
            document.getElementById('profile-role').textContent = userRole;
            document.getElementById('profile-avatar').src = userAvatar;
            
            document.querySelectorAll('.nav-protected').forEach(item => item.classList.remove('hidden'));
            document.getElementById('logout-btn').style.display = 'flex';
            document.getElementById('login-btn').style.display = 'none';
        }
        
        function toggleDropdown() {
            document.getElementById("profile-dropdown").classList.toggle("show");
        }
        
        window.onclick = function(event) {
            if (!event.target.matches('.profile-btn') && !event.target.closest('.profile-btn')) {
                const dropdowns = document.getElementsByClassName("dropdown-content");
                for (let i = 0; i < dropdowns.length; i++) {
                    if (dropdowns[i].classList.contains('show')) {
                        dropdowns[i].classList.remove('show');
                    }
                }
            }
        }
        
        document.getElementById('logout-btn').addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.clear();
            window.location.href = 'index.html';
        });
        
        function updateDashboardStats(gameResults, communityBadges) {
            const totalEcoPoints = gameResults.reduce((sum, result) => sum + Math.round(result.score), 0);
            const gamesCompleted = gameResults.length;
            let averageScore = 0;
            if (gamesCompleted > 0) {
                const totalScore = gameResults.reduce((sum, result) => sum + result.score, 0);
                const totalPossibleScore = gamesCompleted * 100; // Assuming max 100 points per game for simplicity
                averageScore = Math.round((totalScore / totalPossibleScore) * 100);
            }
            const gameBadges = Math.floor(gamesCompleted / 2);
            const totalBadges = gameBadges + communityBadges.length;
            
            document.getElementById('eco-points').textContent = totalEcoPoints;
            document.getElementById('games-completed').textContent = gamesCompleted;
            document.getElementById('average-score').textContent = `${averageScore}%`;
            document.getElementById('badges-earned').textContent = totalBadges;
            
            // Mark game-based badges as earned
            const badges = document.querySelectorAll('.badge');
            for (let i = 0; i < gameBadges && i < badges.length; i++) {
                badges[i].classList.add('earned');
            }
        }
        
        function updateBadges(communityBadges) {
            // Map community badge IDs to badge element IDs
            const badgeMap = {
                'first-tree': 'badge-1',
                'water-warrior': 'badge-3',
                'waste-reducer': 'badge-2',
                'energy-saver': 'badge-4',
                'cleanup-champion': 'badge-5',
                'biodiversity-hero': 'badge-6'
            };
            
            // Mark community badges as earned
            communityBadges.forEach(badgeId => {
                const badgeElementId = badgeMap[badgeId];
                if (badgeElementId) {
                    const badgeElement = document.getElementById(badgeElementId);
                    if (badgeElement) {
                        badgeElement.classList.add('earned');
                    }
                }
            });
        }
        
        function updateProgressBars(gameResults) {
            const categoryScores = {
                'waste': { games: ['puzzle'], scores: [] },
                'water': { games: ['water'], scores: [] },
                'climate': { games: ['climate'], scores: [] },
                'biodiversity': { games: ['ecosystem'], scores: [] }
            };
            gameResults.forEach(result => {
                const gameName = result.game.toLowerCase();
                if (gameName.includes('recycle')) categoryScores.waste.scores.push(result.score);
                if (gameName.includes('water')) categoryScores.water.scores.push(result.score);
                if (gameName.includes('climate')) categoryScores.climate.scores.push(result.score);
                if (gameName.includes('ecosystem')) categoryScores.biodiversity.scores.push(result.score);
            });
            const calculateAverage = (scores) => {
                if (scores.length === 0) return 0;
                const total = scores.reduce((sum, score) => sum + score, 0);
                return Math.round((total / (scores.length * 100)) * 100); // Assuming 100 is max score
            };
            const wasteAvg = calculateAverage(categoryScores.waste.scores);
            document.getElementById('waste-progress').textContent = `${wasteAvg}%`;
            document.getElementById('waste-bar').style.width = `${wasteAvg}%`;
            const waterAvg = calculateAverage(categoryScores.water.scores);
            document.getElementById('water-progress').textContent = `${waterAvg}%`;
            document.getElementById('water-bar').style.width = `${waterAvg}%`;
            const climateAvg = calculateAverage(categoryScores.climate.scores);
            document.getElementById('climate-progress').textContent = `${climateAvg}%`;
            document.getElementById('climate-bar').style.width = `${climateAvg}%`;
            const biodiversityAvg = calculateAverage(categoryScores.biodiversity.scores);
            document.getElementById('biodiversity-progress').textContent = `${biodiversityAvg}%`;
            document.getElementById('biodiversity-bar').style.width = `${biodiversityAvg}%`;
        }
        
        function updateRecentActivity(gameResults, communityBadges) {
            const activityList = document.getElementById('activity-list');
            activityList.innerHTML = '';
            
            // Get community posts
            const communityPosts = JSON.parse(localStorage.getItem('ecoPosts')) || [];
            
            // Combine game results and community posts
            const activities = [];
            
            // Add game results
            gameResults.forEach(result => {
                activities.push({
                    type: 'game',
                    date: new Date(result.date),
                    text: `Completed ${result.game}`,
                    points: result.score
                });
            });
            
            // Add community badges
            communityBadges.forEach(badgeId => {
                const badgeInfo = {
                    'first-tree': { name: 'First Tree Planted', icon: 'fa-seedling' },
                    'water-warrior': { name: 'Water Warrior', icon: 'fa-tint' },
                    'waste-reducer': { name: 'Waste Reducer', icon: 'fa-recycle' },
                    'energy-saver': { name: 'Energy Saver', icon: 'fa-lightbulb' },
                    'cleanup-champion': { name: 'Cleanup Champion', icon: 'fa-broom' },
                    'biodiversity-hero': { name: 'Biodiversity Hero', icon: 'fa-paw' }
                }[badgeId];
                
                if (badgeInfo) {
                    activities.push({
                        type: 'badge',
                        date: new Date(), // In a real app, you'd store when the badge was earned
                        text: `Earned badge: ${badgeInfo.name}`,
                        icon: badgeInfo.icon,
                        points: 50 // Award points for badges
                    });
                }
            });
            
            // Add community posts
            communityPosts.forEach(post => {
                activities.push({
                    type: 'post',
                    date: new Date(post.timestamp),
                    text: `Shared: ${post.caption.substring(0, 30)}${post.caption.length > 30 ? '...' : ''}`,
                    points: 25 // Award points for community posts
                });
            });
            
            // Sort activities by date (newest first)
            activities.sort((a, b) => b.date - a.date);
            
            // Take the 4 most recent activities
            const recentActivities = activities.slice(0, 4);
            
            if (recentActivities.length === 0) {
                activityList.innerHTML = `
                    <li class="activity-item">
                        <div class="activity-icon"><i class="fas fa-info-circle"></i></div>
                        <div class="activity-content">
                            <div class="activity-text">No recent activity</div>
                            <div class="activity-time">Play games or share posts to see your activity here</div>
                        </div>
                    </li>
                `;
                return;
            }
            
            recentActivities.forEach(activity => {
                const date = activity.date;
                const now = new Date();
                const diffTime = Math.abs(now - date);
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
                
                let timeAgo = diffDays > 0 ? `${diffDays} days ago` : diffHours > 0 ? `${diffHours} hours ago` : 'Just now';
                
                const activityItem = document.createElement('li');
                activityItem.className = 'activity-item';
                
                let iconClass = 'fa-gamepad';
                if (activity.type === 'badge') {
                    iconClass = activity.icon || 'fa-trophy';
                } else if (activity.type === 'post') {
                    iconClass = 'fa-share-alt';
                }
                
                activityItem.innerHTML = `
                    <div class="activity-icon"><i class="fas ${iconClass}"></i></div>
                    <div class="activity-content">
                        <div class="activity-text">${activity.text}</div>
                        <div class="activity-time">${timeAgo}</div>
                    </div>
                    <div class="activity-points">+${activity.points} pts</div>
                `;
                activityList.appendChild(activityItem);
            });
        }
    