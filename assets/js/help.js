
        document.addEventListener('DOMContentLoaded', () => {
            // Check login status
            checkLoginStatus();
            
            // Load FAQ data
            loadFAQs('all');
            
            // Search form
            document.getElementById('search-form').addEventListener('submit', (e) => {
                e.preventDefault();
                const searchTerm = document.getElementById('search-input').value;
                if (searchTerm) {
                    showToast(`Searching for: ${searchTerm}`);
                    // In a real application, this would perform a search
                }
            });
            
            // Suggestion tags
            document.querySelectorAll('.suggestion-tag').forEach(tag => {
                tag.addEventListener('click', () => {
                    document.getElementById('search-input').value = tag.textContent;
                    showToast(`Searching for: ${tag.textContent}`);
                });
            });
            
            // FAQ category buttons
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update active button
                    document.querySelectorAll('.category-btn').forEach(b => {
                        b.classList.remove('active');
                    });
                    btn.classList.add('active');
                    
                    // Load FAQs for selected category
                    const category = btn.dataset.category;
                    loadFAQs(category);
                });
            });
            
            // Contact options
            document.getElementById('live-chat-btn').addEventListener('click', () => {
                showToast('Live chat feature coming soon!');
            });
            
            document.getElementById('email-support-btn').addEventListener('click', () => {
                // Scroll to contact form
                document.querySelector('.contact-form-container').scrollIntoView({ behavior: 'smooth' });
            });
            
            document.getElementById('phone-support-btn').addEventListener('click', () => {
                showToast('Call us at +91 98765 43210');
            });
            
            // Contact form
            document.getElementById('contact-form').addEventListener('submit', (e) => {
                e.preventDefault();
                submitContactForm();
            });
            
            document.getElementById('reset-form-btn').addEventListener('click', () => {
                document.getElementById('contact-form').reset();
            });
            
            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
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
        
        // Check if user is logged in
        function checkLoginStatus() {
            // In a real application, this would check a proper authentication system
            // For demo purposes, we'll use sessionStorage
            const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
            const userName = sessionStorage.getItem('userName') || 'Guest';
            const userRole = sessionStorage.getItem('userRole') || 'Visitor';
            const userAvatar = sessionStorage.getItem('userAvatar') || 'https://randomuser.me/api/portraits/lego/0.jpg';
            
            // Get protected navigation items
            const protectedNavItems = document.querySelectorAll('.nav-protected');
            
            // Update profile information
            document.getElementById('profile-name').textContent = userName;
            document.getElementById('profile-role').textContent = userRole;
            document.getElementById('profile-avatar').src = userAvatar;
            
            if (isLoggedIn) {
                // Show protected navigation items
                protectedNavItems.forEach(item => {
                    item.classList.remove('hidden');
                });
                
                // Show logout button and hide login button
                document.getElementById('logout-btn').style.display = 'block';
                document.getElementById('login-btn').style.display = 'none';
            } else {
                // Hide protected navigation items
                protectedNavItems.forEach(item => {
                    item.classList.add('hidden');
                });
                
                // Hide logout button and show login button
                document.getElementById('logout-btn').style.display = 'none';
                document.getElementById('login-btn').style.display = 'block';
            }
            
            // Add logout functionality
            document.getElementById('logout-btn').addEventListener('click', () => {
                sessionStorage.removeItem('isLoggedIn');
                sessionStorage.removeItem('userName');
                sessionStorage.removeItem('userRole');
                sessionStorage.removeItem('userAvatar');
                window.location.href = 'index.html';
            });
        }
        
        // Load FAQs
        function loadFAQs(category) {
            const faqContainer = document.getElementById('faq-container');
            faqContainer.innerHTML = '';
            
            // Mock FAQ data
            const faqs = [
                {
                    id: 1,
                    category: 'account',
                    question: 'How do I create an account?',
                    answer: 'To create an account, click on the "Sign Up" button in the top right corner of the homepage. Fill in your details including name, email, password, and school information. Once submitted, you\'ll receive a confirmation email to activate your account.'
                },
                {
                    id: 2,
                    category: 'account',
                    question: 'How do I reset my password?',
                    answer: 'If you\'ve forgotten your password, click on the "Login" button and then select "Forgot Password". Enter your email address and we\'ll send you a link to reset your password. Make sure to check your spam folder if you don\'t see the email.'
                },
                {
                    id: 3,
                    category: 'games',
                    question: 'How do I start playing games?',
                    answer: 'After logging in, navigate to the "Games" section from the main menu. Browse through the available games and click on one that interests you. Each game has instructions on how to play, and you can earn points and badges as you complete them.'
                },
                {
                    id: 4,
                    category: 'games',
                    question: 'Can I play games offline?',
                    answer: 'Currently, EcoLearn games require an internet connection to play as your progress and achievements are saved to our servers. We\'re working on offline functionality for future updates.'
                },
                {
                    id: 5,
                    category: 'billing',
                    question: 'Is EcoLearn free to use?',
                    answer: 'EcoLearn offers a free tier with access to basic games and features. We also have premium subscription plans that unlock additional games, advanced analytics, and personalized learning paths. Schools can also contact us for institutional pricing.'
                },
                {
                    id: 6,
                    category: 'billing',
                    question: 'How do I cancel my subscription?',
                    answer: 'To cancel your subscription, go to your account settings and select "Subscription". Click on "Cancel Subscription" and follow the prompts. Your access will continue until the end of your current billing period.'
                },
                {
                    id: 7,
                    category: 'technical',
                    question: 'What browsers are supported?',
                    answer: 'EcoLearn supports the latest versions of Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using Chrome or Firefox. Make sure your browser has JavaScript enabled and cookies allowed.'
                },
                {
                    id: 8,
                    category: 'technical',
                    question: 'The game is not loading properly. What should I do?',
                    answer: 'First, try refreshing the page. If that doesn\'t work, clear your browser cache and cookies. Check your internet connection and make sure you\'re using a supported browser. If the issue persists, contact our technical support team.'
                }
            ];
            
            // Filter FAQs by category
            const filteredFAQs = category === 'all' 
                ? faqs 
                : faqs.filter(faq => faq.category === category);
            
            // Create FAQ items
            filteredFAQs.forEach(faq => {
                const faqItem = document.createElement('div');
                faqItem.className = 'faq-item';
                faqItem.innerHTML = `
                    <div class="faq-question">
                        <span>${faq.question}</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>${faq.answer}</p>
                    </div>
                `;
                
                // Add click event to toggle FAQ
                faqItem.querySelector('.faq-question').addEventListener('click', () => {
                    faqItem.classList.toggle('active');
                });
                
                faqContainer.appendChild(faqItem);
            });
        }
        
        // Submit contact form
        function submitContactForm() {
            // Get form values
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showToast('Please fill in all fields', 'error');
                return;
            }
            
            // In a real application, this would send the data to a server
            // For demo purposes, we'll just show a success message
            
            // Reset form
            document.getElementById('contact-form').reset();
            
            // Show success message
            showToast('Your message has been sent successfully! We\'ll get back to you soon.');
        }
        
        // Toggle profile dropdown
        function toggleDropdown() {
            document.getElementById('profile-dropdown').classList.toggle('show');
        }
        
        // Close dropdown when clicking outside
        window.addEventListener('click', (event) => {
            if (!event.target.matches('.profile-btn') && !event.target.closest('.profile-btn')) {
                const dropdown = document.getElementById('profile-dropdown');
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            }
        });
        
        // Show toast notification
        function showToast(message, type = 'success') {
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toast-message');
            
            // Set message
            toastMessage.textContent = message;
            
            // Set color based on type
            if (type === 'error') {
                toast.style.backgroundColor = '#e74c3c';
            } else {
                toast.style.backgroundColor = 'var(--primary-green)';
            }
            
            // Show toast
            toast.classList.add('show');
            
            // Hide after 3 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    