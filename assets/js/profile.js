
        document.addEventListener('DOMContentLoaded', () => {
            checkLoginStatus();
            loadUserProfile();
            loadUserAchievements();
            loadUserActivity();
            loadUserPosts();
            
            document.getElementById('edit-profile-btn').addEventListener('click', () => {
                document.getElementById('profile-form').classList.toggle('active');
            });
            
            document.getElementById('cancel-edit-btn').addEventListener('click', () => {
                document.getElementById('profile-form').classList.remove('active');
                loadUserProfile(); // Reset form to original values
            });
            
            document.getElementById('save-profile-btn').addEventListener('click', () => {
                saveUserProfile();
            });
            
            document.getElementById('change-password-btn').addEventListener('click', () => {
                document.getElementById('password-modal').classList.add('active');
            });
            
            document.getElementById('password-modal-close').addEventListener('click', () => {
                document.getElementById('password-modal').classList.remove('active');
                document.getElementById('password-form').reset();
            });
            
            document.getElementById('cancel-password-btn').addEventListener('click', () => {
                document.getElementById('password-modal').classList.remove('active');
                document.getElementById('password-form').reset();
            });
            
            document.getElementById('password-form').addEventListener('submit', (e) => {
                e.preventDefault();
                changePassword();
            });
            
            // Delete confirmation modal handlers
            document.getElementById('cancel-delete-btn').addEventListener('click', () => {
                document.getElementById('delete-modal').classList.remove('active');
                currentPostToDelete = null;
            });
            
            document.getElementById('confirm-delete-btn').addEventListener('click', () => {
                if (currentPostToDelete !== null) {
                    deletePost(currentPostToDelete);
                    document.getElementById('delete-modal').classList.remove('active');
                    currentPostToDelete = null;
                }
            });
        });
        
        // Check if user is logged in (uses localStorage)
        function checkLoginStatus() {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const userName = localStorage.getItem('userName') || 'Guest';
            const userRole = localStorage.getItem('userRole') || 'Visitor';
            const userAvatar = localStorage.getItem('userAvatar') || 'https://randomuser.me/api/portraits/lego/0.jpg';
            const protectedNavItems = document.querySelectorAll('.nav-protected');
            
            document.getElementById('profile-name').textContent = userName;
            document.getElementById('profile-role').textContent = userRole;
            document.getElementById('profile-avatar').src = userAvatar;
            
            if (isLoggedIn) {
                protectedNavItems.forEach(item => item.classList.remove('hidden'));
                document.getElementById('logout-btn').style.display = 'flex';
                document.getElementById('login-btn').style.display = 'none';
                document.getElementById('edit-profile-btn').style.display = 'flex';
                document.getElementById('change-password-btn').style.display = 'flex';
            } else {
                protectedNavItems.forEach(item => item.classList.add('hidden'));
                document.getElementById('logout-btn').style.display = 'none';
                document.getElementById('login-btn').style.display = 'flex';
                document.getElementById('edit-profile-btn').style.display = 'none';
                document.getElementById('change-password-btn').style.display = 'none';
            }
            
            document.getElementById('logout-btn').addEventListener('click', () => {
                localStorage.clear(); // Clear all user data
                window.location.href = 'index.html';
            });
        }
        
        // Load user profile data from localStorage
        function loadUserProfile() {
            const user = JSON.parse(localStorage.getItem('user'));
            const gameResults = JSON.parse(localStorage.getItem('gameResults')) || [];
            
            if (user) {
                const fullName = user.name || 'User Name';
                document.getElementById('profile-name-large').textContent = fullName;
                document.getElementById('profile-avatar-large').src = user.avatar || 'https://randomuser.me/api/portraits/lego/0.jpg';
                document.getElementById('profile-role-large').textContent = user.role || 'Eco Learner';
                
                const totalEcoPoints = gameResults.reduce((sum, result) => sum + Math.round(result.score), 0);
                const gamesPlayed = gameResults.length;
                const badgesEarned = Math.min(8, Math.floor(gamesPlayed / 3));
                
                let rank = 'Beginner';
                if (totalEcoPoints > 1000) rank = 'Eco Champion';
                else if (totalEcoPoints > 500) rank = 'Eco Warrior';
                
                document.getElementById('stat-points').textContent = totalEcoPoints;
                document.getElementById('stat-games').textContent = gamesPlayed;
                document.getElementById('stat-badges').textContent = badgesEarned;
                document.getElementById('stat-rank').textContent = rank;
                
                const nameParts = fullName.split(' ');
                const firstName = nameParts[0] || '';
                const lastName = nameParts.slice(1).join(' ') || '';
                
                document.getElementById('firstName').value = user.firstName || firstName;
                document.getElementById('lastName').value = user.lastName || lastName;
                document.getElementById('email').value = user.email || '';
                document.getElementById('phone').value = user.phone || '';
                document.getElementById('school').value = user.school || '';
                document.getElementById('grade').value = user.grade || '';
                document.getElementById('city').value = user.city || '';
                document.getElementById('state').value = user.state || '';
                document.getElementById('bio').value = user.bio || 'Passionate about environmental conservation.';
            } else {
                // Redirect if not logged in
                window.location.href = 'login.html';
            }
        }
        
        // Save user profile changes to localStorage
        function saveUserProfile() {
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user) {
                showToast('Error: You are not logged in.', 'error');
                return;
            }
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const fullName = `${firstName} ${lastName}`.trim();
            
            user.name = fullName;
            user.firstName = firstName;
            user.lastName = lastName;
            user.email = document.getElementById('email').value;
            user.phone = document.getElementById('phone').value;
            user.school = document.getElementById('school').value;
            user.grade = document.getElementById('grade').value;
            user.city = document.getElementById('city').value;
            user.state = document.getElementById('state').value;
            user.bio = document.getElementById('bio').value;
            
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('userName', fullName);
            
            document.getElementById('profile-name-large').textContent = fullName;
            document.getElementById('profile-name').textContent = fullName;
            document.getElementById('profile-form').classList.remove('active');
            
            showToast('Profile updated successfully!');
        }
        
        // Dynamically load achievements based on games played
        function loadUserAchievements() {
            const badgesContainer = document.getElementById('badges-container');
            badgesContainer.innerHTML = '';
            
            const gameResults = JSON.parse(localStorage.getItem('gameResults')) || [];
            const gamesPlayed = gameResults.length;
            const badgesToEarn = Math.min(8, Math.floor(gamesPlayed / 3));
            
            const badges = [
                { name: 'First Steps', icon: 'fa-seedling' },
                { name: 'Water Saver', icon: 'fa-tint' },
                { name: 'Energy Expert', icon: 'fa-bolt' },
                { name: 'Recycling Hero', icon: 'fa-recycle' },
                { name: 'Green Thumb', icon: 'fa-tree' },
                { name: 'Nature Lover', icon: 'fa-leaf' },
                { name: 'Ocean Guardian', icon: 'fa-water' },
                { name: 'Climate Champion', icon: 'fa-globe-americas' }
            ];
            
            badges.forEach((badge, index) => {
                const earned = index < badgesToEarn;
                const badgeElement = document.createElement('div');
                badgeElement.className = `badge ${earned ? 'earned' : ''}`;
                badgeElement.innerHTML = `<i class="fas ${badge.icon} badge-icon"></i><span class="badge-name">${badge.name}</span>`;
                badgesContainer.appendChild(badgeElement);
            });
        }
        
        // Dynamically load recent activity from game results
        function loadUserActivity() {
            const activityList = document.getElementById('activity-list');
            activityList.innerHTML = '';
            
            const gameResults = JSON.parse(localStorage.getItem('gameResults')) || [];
            const recentActivities = gameResults.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
            
            if (recentActivities.length === 0) {
                activityList.innerHTML = `<li class="activity-item">No recent activity found. Go play some games!</li>`;
                return;
            }
            
            const iconMap = { 
                quiz: 'fa-question-circle', 
                simulation: 'fa-cogs', 
                puzzle: 'fa-puzzle-piece', 
                action: 'fa-fist-raised' 
            };
            
            recentActivities.forEach(activity => {
                const activityElement = document.createElement('li');
                activityElement.className = 'activity-item';
                const iconClass = iconMap[activity.gameType] || 'fa-gamepad';
                const timeAgo = getTimeAgo(activity.date);
                
                activityElement.innerHTML = `
                    <div class="activity-icon"><i class="fas ${iconClass}"></i></div>
                    <div class="activity-content">
                        <div class="activity-text">Completed ${activity.game}</div>
                        <div class="activity-time">${timeAgo}</div>
                    </div>
                    <div class="activity-points">+${activity.score}</div>
                `;
                activityList.appendChild(activityElement);
            });
        }
        
        // Load user posts
        function loadUserPosts() {
            const postsGrid = document.getElementById('user-posts-grid');
            postsGrid.innerHTML = '';
            
            // Get current user ID
            const currentUserId = localStorage.getItem('userId') || 'current-user';
            
            // Get all posts from localStorage
            const allPosts = JSON.parse(localStorage.getItem('ecoPosts')) || [];
            
            // Filter posts by current user
            const userPosts = allPosts.filter(post => post.userId === currentUserId);
            
            if (userPosts.length === 0) {
                postsGrid.innerHTML = `
                    <div class="no-posts">
                        <i class="fas fa-images"></i>
                        <p>You haven't shared any posts yet.</p>
                        <a href="index.html" class="btn btn-primary">Share Your First Post</a>
                    </div>
                `;
                return;
            }
            
            // Display user posts
            userPosts.forEach(post => {
                const postCard = document.createElement('div');
                postCard.className = 'post-card';
                
                // Format timestamp
                const postDate = new Date(post.timestamp);
                const timeAgo = getTimeAgo(postDate);
                
                postCard.innerHTML = `
                    <button class="delete-btn" data-id="${post.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                    <div class="post-header">
                        <img src="${post.userAvatar}" alt="${post.userName}" class="post-avatar">
                        <div class="post-user-info">
                            <h4>${post.userName}</h4>
                            <p class="post-time">${timeAgo}</p>
                        </div>
                    </div>
                    <div class="post-media">
                        ${post.mediaType === 'image' 
                            ? `<img src="${post.media}" alt="Eco action">` 
                            : `<video controls src="${post.media}"></video>`}
                    </div>
                    <div class="post-content">
                        <p class="post-caption">${post.caption}</p>
                        <div class="post-hashtags">
                            ${post.hashtags.map(tag => `<a href="#">${tag}</a>`).join('')}
                        </div>
                    </div>
                    <div class="post-actions">
                        <button class="action-btn">
                            <i class="fas fa-heart"></i> <span>${post.likes}</span>
                        </button>
                        <button class="action-btn">
                            <i class="fas fa-comment"></i> <span>${post.comments}</span>
                        </button>
                        <button class="action-btn">
                            <i class="fas fa-share"></i> <span>${post.shares}</span>
                        </button>
                    </div>
                `;
                
                postsGrid.appendChild(postCard);
            });
            
            // Add event listeners to delete buttons
            const deleteButtons = document.querySelectorAll('.delete-btn');
            deleteButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const postId = parseInt(this.getAttribute('data-id'));
                    showDeleteConfirmation(postId);
                });
            });
        }
        
        // Show delete confirmation modal
        let currentPostToDelete = null;
        
        function showDeleteConfirmation(postId) {
            currentPostToDelete = postId;
            document.getElementById('delete-modal').classList.add('active');
        }
        
        // Delete post
        function deletePost(postId) {
            // Get all posts from localStorage
            const allPosts = JSON.parse(localStorage.getItem('ecoPosts')) || [];
            
            // Filter out the post to delete
            const updatedPosts = allPosts.filter(post => post.id !== postId);
            
            // Save updated posts to localStorage
            localStorage.setItem('ecoPosts', JSON.stringify(updatedPosts));
            
            // Reload user posts
            loadUserPosts();
            
            // Show success message
            showToast('Post deleted successfully!');
        }
        
        function getTimeAgo(dateString) {
            const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);
            
            let interval = seconds / 31536000;
            if (interval > 1) return Math.floor(interval) + " years ago";
            
            interval = seconds / 2592000;
            if (interval > 1) return Math.floor(interval) + " months ago";
            
            interval = seconds / 86400;
            if (interval > 1) return Math.floor(interval) + " days ago";
            
            interval = seconds / 3600;
            if (interval > 1) return Math.floor(interval) + " hours ago";
            
            interval = seconds / 60;
            if (interval > 1) return Math.floor(interval) + " minutes ago";
            
            return "Just now";
        }
        
        // Updated changePassword function
        function changePassword() {
            const currentPassword = document.getElementById('current-password').value.trim();
            const newPassword = document.getElementById('new-password').value.trim();
            const confirmPassword = document.getElementById('confirm-password').value.trim();
            
            // Basic validation
            if (!currentPassword || !newPassword || !confirmPassword) {
                showToast('Please fill in all password fields', 'error');
                return;
            }
            
            // Check if new password matches confirmation
            if (newPassword !== confirmPassword) {
                showToast('New passwords do not match', 'error');
                return;
            }
            
            // Check password strength (minimum 6 characters)
            if (newPassword.length < 6) {
                showToast('Password must be at least 6 characters long', 'error');
                return;
            }
            
            // Get user data from localStorage
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user) {
                showToast('User not found. Please log in again.', 'error');
                return;
            }
            
            // Check if we have a login password stored separately
            const loginPassword = localStorage.getItem('loginPassword');
            const storedPassword = loginPassword || user.password;
            
            // In a real app, you would verify the current password with the server
            // For this demo, we'll simulate a password check
            if (storedPassword !== currentPassword) {
                showToast('Current password is incorrect', 'error');
                return;
            }
            
            // Update the password in localStorage
            user.password = newPassword;
            localStorage.setItem('user', JSON.stringify(user));
            
            // Also update the login password if it exists
            if (loginPassword) {
                localStorage.setItem('loginPassword', newPassword);
            }
            
            // Show success message and close modal
            showToast('Password changed successfully!');
            document.getElementById('password-modal').classList.remove('active');
            document.getElementById('password-form').reset();
        }
        
        function toggleDropdown() {
            document.getElementById('profile-dropdown').classList.toggle('show');
        }
        
        window.addEventListener('click', (event) => {
            if (!event.target.matches('.profile-btn') && !event.target.closest('.profile-btn')) {
                const dropdown = document.getElementById('profile-dropdown');
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            }
        });
        
        function showToast(message, type = 'success') {
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toast-message');
            toastMessage.textContent = message;
            toast.style.backgroundColor = type === 'error' ? '#e74c3c' : 'var(--primary-green)';
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3000);
        }
    