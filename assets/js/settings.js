
        document.addEventListener('DOMContentLoaded', () => {
            checkLoginStatus();
            loadUserSettings();
            
            // Event Listeners
            document.getElementById('save-account-btn').addEventListener('click', saveAccountSettings);
            document.getElementById('change-password-btn').addEventListener('click', () => document.getElementById('password-modal').classList.add('active'));
            document.getElementById('password-modal-close').addEventListener('click', () => document.getElementById('password-modal').classList.remove('active'));
            document.getElementById('cancel-password-btn').addEventListener('click', () => document.getElementById('password-modal').classList.remove('active'));
            document.getElementById('confirm-password-btn').addEventListener('click', changePassword);
            document.getElementById('save-notifications-btn').addEventListener('click', () => showToast('Notification preferences saved!'));
            document.getElementById('delete-account-btn').addEventListener('click', () => document.getElementById('delete-modal').classList.add('active'));
            document.getElementById('delete-modal-close').addEventListener('click', () => document.getElementById('delete-modal').classList.remove('active'));
            document.getElementById('cancel-delete-btn').addEventListener('click', () => document.getElementById('delete-modal').classList.remove('active'));
            document.getElementById('confirm-delete-btn').addEventListener('click', () => {
                if (document.getElementById('delete-confirmation').value === 'DELETE') {
                    deleteAccount();
                } else {
                    showToast('Please type "DELETE" to confirm.', 'error');
                }
            });
        });
        
        function checkLoginStatus() {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            if (!isLoggedIn) {
                alert('Please log in to view your settings!');
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
            
            // Ensure user object exists and has a password
            let user = JSON.parse(localStorage.getItem('user'));
            if (!user) {
                // Create a default user if none exists
                user = {
                    email: localStorage.getItem('userEmail') || 'user@example.com',
                    phone: localStorage.getItem('userPhone') || '',
                    password: 'password123' // Default password
                };
                localStorage.setItem('user', JSON.stringify(user));
            } else if (!user.password) {
                // Add password field if missing
                user.password = 'password123';
                localStorage.setItem('user', JSON.stringify(user));
            }
            
            // Store password separately if it exists in login data
            const loginPassword = localStorage.getItem('loginPassword');
            if (loginPassword && user.password !== loginPassword) {
                user.password = loginPassword;
                localStorage.setItem('user', JSON.stringify(user));
            }
        }
        
        function loadUserSettings() {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                document.getElementById('account-email').value = user.email || '';
                document.getElementById('account-phone').value = user.phone || '';
            }
        }
        
        function saveAccountSettings() {
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user) {
                showToast('Could not save settings. Please log in again.', 'error');
                return;
            }
            
            user.phone = document.getElementById('account-phone').value;
            localStorage.setItem('user', JSON.stringify(user));
            
            showToast('Account settings updated successfully!');
        }
        
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
        
        function deleteAccount() {
            showToast('Account deleted successfully. Redirecting...');
            localStorage.clear();
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        }
        
        function toggleDropdown() {
            document.getElementById('profile-dropdown').classList.toggle('show');
        }
        
        window.onclick = function(event) {
            if (!event.target.matches('.profile-btn') && !event.target.closest('.profile-btn')) {
                const dropdown = document.getElementById('profile-dropdown');
                if (dropdown && dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            }
        };
        
        document.getElementById('logout-btn').addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.clear();
            window.location.href = 'index.html';
        });
        
        function showToast(message, type = 'success') {
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toast-message');
            toastMessage.textContent = message;
            toast.style.backgroundColor = type === 'error' ? '#e74c3c' : 'var(--primary-green)';
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }


        
    