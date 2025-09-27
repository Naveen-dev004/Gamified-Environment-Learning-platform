
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
                // Show protected navigation items
                protectedNavItems.forEach(item => {
                    item.style.display = 'list-item'; // Show protected links
                    if (item.classList.contains('btn')) item.style.display = 'inline-block'; // Handle CTA buttons
                });
                
                // Show elements that should only be visible when logged in
                const showWhenLoggedIn = document.querySelectorAll('.show-when-logged-in');
                showWhenLoggedIn.forEach(item => {
                    item.style.display = 'inline-block';
                });
                
                // Hide elements that should be hidden when logged in
                const hideWhenLoggedIn = document.querySelectorAll('.hide-when-logged-in');
                hideWhenLoggedIn.forEach(item => {
                    item.style.display = 'none';
                });
                
                document.getElementById('logout-btn').style.display = 'flex';
                document.getElementById('login-btn').style.display = 'none';
            } else {
                // Hide protected navigation items
                protectedNavItems.forEach(item => {
                    item.style.display = 'none'; // Hide protected links
                });
                
                // Hide elements that should only be visible when logged in
                const showWhenLoggedIn = document.querySelectorAll('.show-when-logged-in');
                showWhenLoggedIn.forEach(item => {
                    item.style.display = 'none';
                });
                
                // Show elements that should be hidden when logged in
                const hideWhenLoggedIn = document.querySelectorAll('.hide-when-logged-in');
                hideWhenLoggedIn.forEach(item => {
                    item.style.display = 'inline-block';
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
        
        // Initialize page
        document.addEventListener('DOMContentLoaded', () => {
            // Check login status
            checkLoginStatus();
            
            // FAQ accordion
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    // Toggle active class
                    question.classList.toggle('active');
                    
                    // Toggle answer visibility
                    const answer = question.nextElementSibling;
                    answer.classList.toggle('active');
                });
            });
            
            // Contact form submission
            const contactForm = document.getElementById('contact-form');
            
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(contactForm);
                
                try {
                    // Submit form to Formspree
                    const response = await fetch(contactForm.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    
                    if (response.ok) {
                        // Create success message
                        const successMessage = document.createElement('div');
                        successMessage.style.backgroundColor = 'var(--light-green)';
                        successMessage.style.color = 'var(--white)';
                        successMessage.style.padding = '15px';
                        successMessage.style.borderRadius = '5px';
                        successMessage.style.marginTop = '20px';
                        successMessage.style.textAlign = 'center';
                        successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                        
                        // Append success message
                        contactForm.appendChild(successMessage);
                        
                        // Reset form
                        contactForm.reset();
                        
                        // Remove success message after 5 seconds
                        setTimeout(() => {
                            successMessage.remove();
                        }, 5000);
                    } else {
                        // Handle error
                        const errorMessage = document.createElement('div');
                        errorMessage.style.backgroundColor = '#f44336';
                        errorMessage.style.color = 'var(--white)';
                        errorMessage.style.padding = '15px';
                        errorMessage.style.borderRadius = '5px';
                        errorMessage.style.marginTop = '20px';
                        errorMessage.style.textAlign = 'center';
                        errorMessage.textContent = 'Oops! There was a problem submitting your form. Please try again.';
                        
                        contactForm.appendChild(errorMessage);
                        
                        setTimeout(() => {
                            errorMessage.remove();
                        }, 5000);
                    }
                } catch (error) {
                    // Handle network error
                    const errorMessage = document.createElement('div');
                    errorMessage.style.backgroundColor = '#f44336';
                    errorMessage.style.color = 'var(--white)';
                    errorMessage.style.padding = '15px';
                    errorMessage.style.borderRadius = '5px';
                    errorMessage.style.marginTop = '20px';
                    errorMessage.style.textAlign = 'center';
                    errorMessage.textContent = 'Oops! There was a problem submitting your form. Please check your internet connection and try again.';
                    
                    contactForm.appendChild(errorMessage);
                    
                    setTimeout(() => {
                        errorMessage.remove();
                    }, 5000);
                }
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
        });
    