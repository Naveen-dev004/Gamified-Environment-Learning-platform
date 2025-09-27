
        // Badge system
        const badges = {
            'first-tree': {
                name: 'First Tree Planted',
                description: 'You\'ve planted your first tree and shared it with the community!',
                icon: 'fas fa-seedling',
                hashtags: ['#treeplanting', '#plantatree']
            },
            'water-warrior': {
                name: 'Water Warrior',
                description: 'You\'ve taken action to conserve water and shared your efforts!',
                icon: 'fas fa-tint',
                hashtags: ['#waterconservation', '#savewater']
            },
            'waste-reducer': {
                name: 'Waste Reducer',
                description: 'You\'ve found ways to reduce waste and shared your innovative ideas!',
                icon: 'fas fa-recycle',
                hashtags: ['#zerowaste', '#recycling', '#composting']
            },
            'energy-saver': {
                name: 'Energy Saver',
                description: 'You\'ve taken steps to save energy and reduce your carbon footprint!',
                icon: 'fas fa-lightbulb',
                hashtags: ['#energysaving', '#renewableenergy']
            },
            'cleanup-champion': {
                name: 'Cleanup Champion',
                description: 'You\'ve participated in a cleanup activity and helped make the environment cleaner!',
                icon: 'fas fa-broom',
                hashtags: ['#cleanup', '#beachcleanup', '#rivercleanup']
            },
            'biodiversity-hero': {
                name: 'Biodiversity Hero',
                description: 'You\'ve taken action to protect and promote biodiversity!',
                icon: 'fas fa-paw',
                hashtags: ['#biodiversity', '#wildlife', '#saveanimals']
            }
        };
        
        // Function to normalize hashtag for comparison
        function normalizeHashtag(tag) {
            return tag.toLowerCase().replace(/[^a-z0-9#]/g, '');
        }
        
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
        
        // Eco Community Section JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize variables
            const postForm = document.getElementById('new-post-form');
            const mediaUpload = document.getElementById('media-upload');
            const mediaPreview = document.getElementById('media-preview');
            const cancelPostBtn = document.getElementById('cancel-post');
            const postsFeed = document.getElementById('posts-feed');
            const loadMoreBtn = document.getElementById('load-more-posts');
            const badgeList = document.getElementById('badge-list');
            
            // Badge popup elements
            const badgePopupOverlay = document.getElementById('badge-popup-overlay');
            const badgeIcon = document.getElementById('badge-icon');
            const badgeName = document.getElementById('badge-name');
            const badgeDescription = document.getElementById('badge-description');
            const badgeCloseBtn = document.getElementById('badge-close-btn');
            
            // Set user info based on login status
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const userName = localStorage.getItem('userName') || 'Guest User';
            const userAvatar = localStorage.getItem('userAvatar') || 'https://randomuser.me/api/portraits/lego/0.jpg';
            
            document.getElementById('post-user-name').textContent = userName;
            document.getElementById('post-user-avatar').src = userAvatar;
            
            // Get user's earned badges from localStorage
            let earnedBadges = JSON.parse(localStorage.getItem('earnedBadges')) || [];
            
            // Render badge list
            renderBadgeList();
            
            // Sample posts data
            let samplePosts = [
                {
                    id: 1,
                    userId: 'user1',
                    userName: 'Priya Sharma',
                    userAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                    media: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                    mediaType: 'image',
                    caption: 'Planted 10 trees in my neighborhood today! Every small action counts towards a greener planet.',
                    hashtags: ['#treeplanting', '#greenerindia', '#ecowarrior'],
                    likes: 24,
                    comments: 5,
                    shares: 2,
                    timestamp: new Date(Date.now() - 86400000).toISOString() // 1 day ago
                },
                {
                    id: 2,
                    userId: 'user2',
                    userName: 'Rajesh Kumar',
                    userAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                    media: 'https://images.unsplash.com/photo-1618477247222-76a664a0a89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                    mediaType: 'image',
                    caption: 'Organized a river cleanup drive with my students. We collected over 50kg of plastic waste!',
                    hashtags: ['#rivercleanup', '#plasticfree', '#environmentaleducation'],
                    likes: 42,
                    comments: 8,
                    shares: 5,
                    timestamp: new Date(Date.now() - 172800000).toISOString() // 2 days ago
                },
                {
                    id: 3,
                    userId: 'user3',
                    userName: 'Anita Patel',
                    userAvatar: 'https://randomuser.me/api/portraits/women/63.jpg',
                    media: 'https://images.unsplash.com/photo-1593538312308-d4c29d8dc7f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                    mediaType: 'image',
                    caption: 'Started a composting system at home. Reducing waste and creating nutrient-rich soil for my garden!',
                    hashtags: ['#composting', '#zerowaste', '#sustainableliving'],
                    likes: 31,
                    comments: 7,
                    shares: 3,
                    timestamp: new Date(Date.now() - 259200000).toISOString() // 3 days ago
                },
                {
                    id: 4,
                    userId: 'user4',
                    userName: 'Vikram Singh',
                    userAvatar: 'https://randomuser.me/api/portraits/men/75.jpg',
                    media: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                    mediaType: 'image',
                    caption: 'Built a rainwater harvesting system for my community. Now we can save water during monsoon season!',
                    hashtags: ['#waterconservation', '#rainwaterharvesting', '#sustainablewater'],
                    likes: 56,
                    comments: 12,
                    shares: 8,
                    timestamp: new Date(Date.now() - 345600000).toISOString() // 4 days ago
                },
                {
                    id: 5,
                    userId: 'user5',
                    userName: 'Meera Reddy',
                    userAvatar: 'https://randomuser.me/api/portraits/women/28.jpg',
                    media: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                    mediaType: 'image',
                    caption: 'Created a butterfly garden in my school to support local biodiversity. The students love it!',
                    hashtags: ['#biodiversity', '#butterflygarden', '#schoolproject'],
                    likes: 38,
                    comments: 9,
                    shares: 6,
                    timestamp: new Date(Date.now() - 432000000).toISOString() // 5 days ago
                },
                {
                    id: 6,
                    userId: 'user6',
                    userName: 'Arjun Joshi',
                    userAvatar: 'https://randomuser.me/api/portraits/men/65.jpg',
                    media: 'https://images.unsplash.com/photo-1593699584730-8a1ba7199319?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                    mediaType: 'image',
                    caption: 'Our team developed a mobile app to track carbon footprint. Small steps towards a sustainable future!',
                    hashtags: ['#techforgood', '#carbonfootprint', '#innovation'],
                    likes: 67,
                    comments: 15,
                    shares: 12,
                    timestamp: new Date(Date.now() - 518400000).toISOString() // 6 days ago
                }
            ];
            
            // Load posts from localStorage or use sample posts
            let posts = JSON.parse(localStorage.getItem('ecoPosts')) || samplePosts;
            
            // Render initial posts
            renderPosts(posts);
            
            // Function to render badge list
            function renderBadgeList() {
                badgeList.innerHTML = '';
                
                for (const [badgeId, badge] of Object.entries(badges)) {
                    const badgeItem = document.createElement('div');
                    badgeItem.className = 'badge-item';
                    
                    if (earnedBadges.includes(badgeId)) {
                        badgeItem.classList.add('earned');
                    }
                    
                    badgeItem.innerHTML = `
                        <div class="badge-item-icon">
                            <i class="${badge.icon}"></i>
                        </div>
                        <div class="badge-item-name">${badge.name}</div>
                        <div class="badge-item-hashtags">${badge.hashtags.join(', ')}</div>
                    `;
                    
                    badgeList.appendChild(badgeItem);
                }
            }
            
            // Handle media upload
            mediaUpload.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    
                    reader.onload = function(event) {
                        mediaPreview.innerHTML = '';
                        
                        if (file.type.startsWith('image/')) {
                            const img = document.createElement('img');
                            img.src = event.target.result;
                            mediaPreview.appendChild(img);
                        } else if (file.type.startsWith('video/')) {
                            const video = document.createElement('video');
                            video.src = event.target.result;
                            video.controls = true;
                            mediaPreview.appendChild(video);
                        }
                        
                        const removeBtn = document.createElement('button');
                        removeBtn.className = 'remove-media';
                        removeBtn.innerHTML = '<i class="fas fa-times"></i>';
                        removeBtn.addEventListener('click', function() {
                            mediaPreview.innerHTML = '';
                            mediaUpload.value = '';
                        });
                        
                        mediaPreview.appendChild(removeBtn);
                        mediaPreview.style.display = 'block';
                    };
                    
                    reader.readAsDataURL(file);
                }
            });
            
            // Handle form submission
            postForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                if (!isLoggedIn) {
                    alert('Please login to share your eco actions!');
                    return;
                }
                
                const caption = document.getElementById('post-caption').value;
                const hashtagsText = document.getElementById('post-hashtags').value;
                
                // Process hashtags - handle both comma-separated and space-separated
                let hashtags = [];
                if (hashtagsText.includes(',')) {
                    // Comma-separated
                    hashtags = hashtagsText.split(',').map(tag => tag.trim()).filter(tag => tag);
                } else {
                    // Space-separated
                    hashtags = hashtagsText.split(' ').map(tag => tag.trim()).filter(tag => tag);
                }
                
                // Format hashtags with # if not already present
                const formattedHashtags = hashtags.map(tag => {
                    return tag.startsWith('#') ? tag : '#' + tag;
                });
                
                // Get media data
                let mediaData = null;
                let mediaType = null;
                
                if (mediaPreview.querySelector('img')) {
                    mediaData = mediaPreview.querySelector('img').src;
                    mediaType = 'image';
                } else if (mediaPreview.querySelector('video')) {
                    mediaData = mediaPreview.querySelector('video').src;
                    mediaType = 'video';
                }
                
                // Create new post object
                const newPost = {
                    id: Date.now(),
                    userId: 'current-user',
                    userName: userName,
                    userAvatar: userAvatar,
                    media: mediaData,
                    mediaType: mediaType,
                    caption: caption,
                    hashtags: formattedHashtags,
                    likes: 0,
                    comments: 0,
                    shares: 0,
                    timestamp: new Date().toISOString()
                };
                
                // Add to posts array
                posts.unshift(newPost);
                
                // Save to localStorage
                localStorage.setItem('ecoPosts', JSON.stringify(posts));
                
                // Check for new badges
                checkForNewBadges(formattedHashtags);
                
                // Reset form
                postForm.reset();
                mediaPreview.innerHTML = '';
                mediaPreview.style.display = 'none';
                
                // Re-render posts
                renderPosts(posts);
                
                // Show success message
                showNotification('Your eco action has been shared successfully!');
            });
            
            // Handle cancel button
            cancelPostBtn.addEventListener('click', function() {
                postForm.reset();
                mediaPreview.innerHTML = '';
                mediaPreview.style.display = 'none';
            });
            
            // Handle load more button
            loadMoreBtn.addEventListener('click', function() {
                // In a real app, this would load more posts from the server
                // For demo purposes, we'll just show a notification
                showNotification('No more posts to load. Be the first to share your eco action!');
            });
            
            // Handle badge popup close button
            badgeCloseBtn.addEventListener('click', function() {
                badgePopupOverlay.classList.remove('show');
            });
            
            // Function to check for new badges
            function checkForNewBadges(hashtags) {
                console.log('Checking for new badges with hashtags:', hashtags);
                
                const newBadges = [];
                
                // Check each badge condition
                for (const [badgeId, badge] of Object.entries(badges)) {
                    console.log(`Checking badge ${badgeId}:`, badge.name);
                    console.log(`User already has this badge:`, earnedBadges.includes(badgeId));
                    
                    // Skip if user already has this badge
                    if (earnedBadges.includes(badgeId)) {
                        console.log(`Skipping badge ${badgeId} because user already has it`);
                        continue;
                    }
                    
                    // Check if any of the badge's hashtags are in the post's hashtags
                    const badgeHashtags = badge.hashtags.map(tag => normalizeHashtag(tag));
                    const postHashtags = hashtags.map(tag => normalizeHashtag(tag));
                    
                    const conditionMet = badgeHashtags.some(badgeTag => 
                        postHashtags.some(postTag => postTag.includes(badgeTag))
                    );
                    
                    console.log(`Badge condition met:`, conditionMet);
                    
                    if (conditionMet) {
                        earnedBadges.push(badgeId);
                        newBadges.push(badge);
                        console.log(`Added badge ${badgeId} to earned badges`);
                    }
                }
                
                // Save updated badges to localStorage
                localStorage.setItem('earnedBadges', JSON.stringify(earnedBadges));
                console.log('Saved earned badges to localStorage:', earnedBadges);
                
                // Update badge list
                renderBadgeList();
                
                // Show badge popups for each new badge earned
                if (newBadges.length > 0) {
                    console.log('Showing badge popups for:', newBadges);
                    showBadgePopups(newBadges);
                } else {
                    console.log('No new badges earned');
                }
            }
            
            // Function to show badge popups
            function showBadgePopups(badgesToShow) {
                console.log('Showing badge popups for:', badgesToShow);
                
                // Show badges one by one with a delay
                badgesToShow.forEach((badge, index) => {
                    setTimeout(() => {
                        console.log(`Showing badge popup for ${badge.name}`);
                        
                        // Update badge popup content
                        badgeIcon.innerHTML = `<i class="${badge.icon}"></i>`;
                        badgeName.textContent = badge.name;
                        badgeDescription.textContent = badge.description;
                        
                        // Show the badge popup
                        badgePopupOverlay.classList.add('show');
                        
                        // Auto-hide after 5 seconds
                        setTimeout(() => {
                            badgePopupOverlay.classList.remove('show');
                        }, 5000);
                    }, index * 6000); // 6 seconds between each badge popup
                });
            }
            
            // Function to render posts
            function renderPosts(postsToRender) {
                postsFeed.innerHTML = '';
                
                postsToRender.forEach(post => {
                    const postCard = document.createElement('div');
                    postCard.className = 'post-card';
                    
                    // Format timestamp
                    const postDate = new Date(post.timestamp);
                    const timeAgo = getTimeAgo(postDate);
                    
                    postCard.innerHTML = `
                        <div class="post-header">
                            <img src="${post.userAvatar}" alt="${post.userName}" class="post-avatar">
                            <div class="post-user-info">
                                <h4>${post.userName}</h4>
                                <p class="post-time">${timeAgo}</p>
                            </div>
                        </div>
                        ${post.media ? `
                        <div class="post-media">
                            ${post.mediaType === 'image' 
                                ? `<img src="${post.media}" alt="Eco action">` 
                                : `<video controls src="${post.media}"></video>`}
                        </div>
                        ` : ''}
                        <div class="post-content">
                            <p class="post-caption">${post.caption}</p>
                            <div class="post-hashtags">
                                ${post.hashtags.map(tag => `<a href="#">${tag}</a>`).join('')}
                            </div>
                        </div>
                        <div class="post-actions">
                            <button class="action-btn like-btn" data-id="${post.id}">
                                <i class="far fa-heart"></i> <span class="like-count">${post.likes}</span>
                            </button>
                            <button class="action-btn comment-btn" data-id="${post.id}">
                                <i class="far fa-comment"></i> <span class="comment-count">${post.comments}</span>
                            </button>
                            <button class="action-btn share-btn" data-id="${post.id}">
                                <i class="fas fa-share"></i> <span class="share-count">${post.shares}</span>
                            </button>
                        </div>
                    `;
                    
                    postsFeed.appendChild(postCard);
                });
                
                // Add event listeners to action buttons
                addActionListeners();
            }
            
            // Function to add event listeners to action buttons
            function addActionListeners() {
                // Like buttons
                const likeButtons = document.querySelectorAll('.like-btn');
                likeButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        const postId = parseInt(this.getAttribute('data-id'));
                        const post = posts.find(p => p.id === postId);
                        
                        if (post) {
                            // Toggle like state
                            const isLiked = this.classList.contains('liked');
                            
                            if (isLiked) {
                                post.likes--;
                                this.classList.remove('liked');
                                this.querySelector('i').className = 'far fa-heart';
                            } else {
                                post.likes++;
                                this.classList.add('liked');
                                this.querySelector('i').className = 'fas fa-heart';
                            }
                            
                            // Update UI
                            this.querySelector('.like-count').textContent = post.likes;
                            
                            // Save to localStorage
                            localStorage.setItem('ecoPosts', JSON.stringify(posts));
                        }
                    });
                });
                
                // Comment buttons
                const commentButtons = document.querySelectorAll('.comment-btn');
                commentButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        const postId = parseInt(this.getAttribute('data-id'));
                        // In a real app, this would open a comment section
                        showNotification('Comment feature coming soon!');
                    });
                });
                
                // Share buttons
                const shareButtons = document.querySelectorAll('.share-btn');
                shareButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        const postId = parseInt(this.getAttribute('data-id'));
                        const post = posts.find(p => p.id === postId);
                        
                        if (post) {
                            post.shares++;
                            
                            // Update UI
                            this.querySelector('.share-count').textContent = post.shares;
                            
                            // Save to localStorage
                            localStorage.setItem('ecoPosts', JSON.stringify(posts));
                            
                            // Show notification
                            showNotification('Post shared successfully!');
                        }
                    });
                });
            }
            
            // Function to format time ago
            function getTimeAgo(date) {
                const seconds = Math.floor((new Date() - date) / 1000);
                
                let interval = seconds / 31536000;
                if (interval > 1) {
                    return Math.floor(interval) + " years ago";
                }
                
                interval = seconds / 2592000;
                if (interval > 1) {
                    return Math.floor(interval) + " months ago";
                }
                
                interval = seconds / 86400;
                if (interval > 1) {
                    return Math.floor(interval) + " days ago";
                }
                
                interval = seconds / 3600;
                if (interval > 1) {
                    return Math.floor(interval) + " hours ago";
                }
                
                interval = seconds / 60;
                if (interval > 1) {
                    return Math.floor(interval) + " minutes ago";
                }
                
                return Math.floor(seconds) + " seconds ago";
            }
            
            // Function to show notification
            function showNotification(message) {
                const notification = document.createElement('div');
                notification.className = 'notification';
                notification.textContent = message;
                
                document.body.appendChild(notification);
                
                // Show notification
                setTimeout(() => {
                    notification.classList.add('show');
                }, 10);
                
                // Hide notification after 3 seconds
                setTimeout(() => {
                    notification.classList.remove('show');
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 300);
                }, 3000);
            }
        });
        
        // Initialize page when DOM is loaded
        window.addEventListener('DOMContentLoaded', () => {
            checkLoginStatus();
        });
    