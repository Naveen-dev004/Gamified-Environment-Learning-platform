
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
                
                document.getElementById('logout-btn').style.display = 'flex';
                document.getElementById('login-btn').style.display = 'none';
            } else {
                // Hide protected navigation items
                protectedNavItems.forEach(item => {
                    item.style.display = 'none'; // Hide protected links
                });
                
                document.getElementById('logout-btn').style.display = 'none';
                document.getElementById('login-btn').style.display = 'flex';
            }
            
            return isLoggedIn;
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
        
        // DIY Projects Data
        const projectsData = [
             
            {
                id: 2,
                title: "Compost Bin",
                category: "compost",
                description: "Build a simple compost bin to turn kitchen waste into nutrient-rich soil.",
                difficulty: "medium",
                time: "2 hours",
                materials: "Plastic container, drill, soil, kitchen waste",
                image: "assets/images/compost.png",
                rating: 4.2,
                ratingCount: 18,
                steps: [
                    {
                        title: "Choose a Container",
                        description: "Select a large plastic container (at least 20 liters) with a lid. Clean it thoroughly.",
                        image: "assets/images/compost1.jpg" 
                    },
                    {
                        title: "Create Drainage Holes",
                        description: "Drill several small holes in the bottom and sides of the container for aeration and drainage.",
                        image: "assets/images/compost2.jpg"            
                           },
                    {
                        title: "Add Base Layer",
                        description: "Place a layer of soil or finished compost at the bottom (about 2 inches thick) to introduce beneficial microorganisms.",
                        image: "assets/images/compost3.jpg"
                    },
                    {
                        title: "Layer Organic Waste",
                        description: "Add kitchen waste like fruit peels, vegetable scraps, and coffee grounds. Alternate with dry materials like leaves or paper.",
                        image: "assets/images/compost4.jpg"
                    },
                    {
                        title: "Maintain the Compost",
                        description: "Keep the compost moist but not wet. Turn it every few weeks to aerate. Your compost will be ready in 2-3 months.",
                        image: "assets/images/compost5.jpg"
                    }
                ],
                tips: [
                    "Avoid adding meat, dairy, or oily foods",
                    "Chop large pieces into smaller bits for faster decomposition",
                    "Add red worms to create vermicompost for better results",
                    "Use the finished compost in your garden or potted plants"
                ],
                impact: [
                    { icon: "fas fa-trash", value: "50%", label: "Waste Reduced" },
                    { icon: "fas fa-seedling", value: "2x", label: "Plant Growth" },
                    { icon: "fas fa-mountain", value: "0", label: "Chemical Fertilizers" }
                ],
                reviews: [
                    {
                        name: "Amit Kumar",
                        date: "2023-06-10",
                        rating: 5,
                        text: "Best compost bin I've ever used! My plants are thriving with the compost I made."
                    },
                    {
                        name: "Sneha Reddy",
                        date: "2023-05-28",
                        rating: 4,
                        text: "Simple to set up and maintain. I've reduced my kitchen waste significantly."
                    }
                ]
            },
            {
                id: 3,
                title: "Plastic Bottle Planter",
                category: "recycled",
                description: "Transform plastic bottles into beautiful planters for herbs and small plants.",
                difficulty: "easy",
                time: "45 minutes",
                materials: "Plastic bottles, scissors, paint, soil, seeds",
                image: "assets/images/bottle.png",
                rating: 4.7,
                ratingCount: 32,
                steps: [
                    {
                        title: "Clean the Bottle",
                        description: "Thoroughly clean a plastic bottle and remove any labels. Rinse well and let it dry completely.",
                        image: "assets/images/bottle1.jpg"
                    },
                    {
                        title: "Cut the Bottle",
                        description: "Cut the bottle in half horizontally. You can use either the top or bottom part as your planter.",
                        image: "assets/images/bottle2.jpg"
                    },
                    {
                        title: "Add Drainage Holes",
                        description: "Punch several small holes in the bottom of the planter for water drainage.",
                        image: "assets/images/bottle3.jpg"
                    },
                    {
                        title: "Decorate the Planter",
                        description: "Paint the outside of the bottle with eco-friendly paint or wrap it with decorative paper.",
                        image: "assets/images/bottle4.jpg"
                    },
                    {
                        title: "Plant Seeds",
                        description: "Fill the planter with soil and plant your seeds or small plants. Water gently and place in sunlight.",
                        image: "assets/images/bottle5.jpg"
                    }
                ],
                tips: [
                    "Use clear bottles to watch root growth",
                    "Create a self-watering system by using the top part as a reservoir",
                    "Group multiple planters together for a beautiful display",
                    "Use herbs like basil or mint for easy kitchen gardening"
                ],
                impact: [
                    { icon: "fas fa-recycle", value: "1", label: "Bottle Recycled" },
                    { icon: "fas fa-leaf", value: "O2", label: "Oxygen Produced" },
                    { icon: "fas fa-home", value: "Indoor", label: "Air Quality" }
                ],
                reviews: [
                    {
                        name: "Kavita Singh",
                        date: "2023-06-05",
                        rating: 5,
                        text: "I've made 10 of these now for my herb garden. They work perfectly!"
                    },
                    {
                        name: "Vikram Mehta",
                        date: "2023-05-18",
                        rating: 4,
                        text: "Great way to reuse plastic bottles. My kids enjoyed decorating them."
                    }
                ]
            },
            {
                id: 4,
                title: "Solar Oven",
                category: "energy",
                description: "Build a simple solar oven to cook food using renewable solar energy.",
                difficulty: "hard",
                time: "3 hours",
                materials: "2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                image: "assets/images/solar.png",
                rating: 4.0,
                ratingCount: 15,
                steps: [
                    {
                        title: "Prepare the Box",
                        description: "Find a sturdy cardboard box. Paint the inside black to absorb heat. Let it dry completely.",
                        image: "assets/images/solar1.jpg"
                    },
                    {
                        title: "Create Reflectors",
                        description: "Cut the box flaps to create reflector panels. Cover them with aluminum foil, shiny side out.",
                        image: "assets/images/solar2.jpg"
                    },
                    {
                        title: "Add Insulation",
                        description: "Line the bottom of the box with crumpled newspaper for insulation. This helps retain heat.",
                        image: "assets/images/solar3.jpg"
                    },
                    {
                        title: "Create the Window",
                        description: "Cut a rectangular opening in the top of the box. Cover it with plastic wrap to create a greenhouse effect.",
                        image: "assetassetss/images/solar4.jpg"
                    },
                    {
                        title: "Use the Solar Oven",
                        description: "Place food in a black pot inside the oven. Angle the reflectors toward the sun. Cooking time varies by weather.",
                        image: "assets/images/solar5.jpg"
                    }
                ],
                tips: [
                    "Use on sunny days with clear skies",
                    "Preheat the oven for 30 minutes before cooking",
                    "Cook simple foods like rice, vegetables, or heat leftovers",
                    "Never leave the oven unattended and use oven mitts when handling"
                ],
                impact: [
                    { icon: "fas fa-sun", value: "100%", label: "Renewable Energy" },
                    { icon: "fas fa-bolt", value: "0", label: "Electricity Used" },
                    { icon: "fas fa-smog", value: "0", label: "Carbon Emissions" }
                ],
                reviews: [
                    {
                        name: "Ananya Joshi",
                        date: "2023-04-30",
                        rating: 4,
                        text: "It took some time to get the hang of it, but now I can cook simple meals without gas or electricity!"
                    },
                    {
                        name: "Rahul Verma",
                        date: "2023-04-15",
                        rating: 3,
                        text: "Interesting project but requires a lot of sunlight. Works well on hot summer days."
                    }
                ]
            },
            {
                id: 5,
                title: "Rainwater Harvester",
                category: "water",
                description: "Create a simple rainwater harvesting system to collect and store rainwater.",
                difficulty: "medium",
                time: "4 hours",
                materials: "Large barrel, mesh screen, spigot, downspout, tools",
                image: "assets/images/rain.png",
                rating: 4.3,
                ratingCount: 21,
                steps: [
                    {
                        title: "Choose a Location",
                        description: "Select a location near a downspout where the barrel can be placed on a stable, level surface.",
                        image: "assets/images/rain1.jpg"
                    },
                    {
                        title: "Prepare the Barrel",
                        description: "Clean a large food-grade barrel thoroughly. Drill a hole near the bottom for the spigot and install it.",
                        image: "assets/images/rain2.jpg"
                    },
                    {
                        title: "Create the Lid",
                        description: "Cut a hole in the barrel lid large enough for the downspout. Cover it with mesh to keep out debris.",
                        image: "assets/images/rain3.jpg"
                    },
                    {
                        title: "Install the Diverter",
                        description: "Install a rainwater diverter in the downspout that directs water into the barrel when it rains.",
                        image: "assets/images/rain4.jpg"
                    },
                    {
                        title: "Set Up Overflow",
                        description: "Create an overflow pipe near the top of the barrel to direct excess water away from your foundation.",
                        image: "assets/images/rain5.jpg"
                    }
                ],
                tips: [
                    "Use the collected water for gardening, not drinking",
                    "Elevate the barrel on blocks for better water pressure",
                    "Clean the system regularly to prevent mosquito breeding",
                    "Cover the barrel during winter to prevent freezing"
                ],
                impact: [
                    { icon: "fas fa-tint", value: "1000L", label: "Water Saved" },
                    { icon: "fas fa-cloud-rain", value:"50%", label: "Rainwater Utilized" },
                    { icon: "fas fa-hand-holding-water", value :"Free", label: "Water Source" }
                ],
                reviews: [
                    {
                        name: "Sanjay Gupta",
                        date: "2023-06-20",
                        rating: 5,
                        text: "This system has saved me so much water for my garden. Easy to set up and maintain."
                    },
                    {
                        name: "Meera Nair",
                        date: "2023-05-30",
                        rating: 4,
                        text: "Great project! I've reduced my water bill significantly during the monsoon season."
                    }
                ]
            },
            {
                id: 6,
                title: "Recycled Paper",
                category: "paper",
                description: "Make your own recycled paper from scrap paper and old newspapers.",
                difficulty: "medium",
                time: "2 days",
                materials: "Scrap paper, water, blender, screen, towels",
                image: "assets/images/paper.jpg",
                rating: 4.6,
                ratingCount: 27,
                steps: [
                    {
                        title: "Prepare Paper",
                        description: "Tear scrap paper into small pieces. Avoid glossy paper. Soak in warm water for several hours or overnight.",
                        image: "assets/images/paper1.jpg"
                    },
                    {
                        title: "Create Pulp",
                        description: "Blend the soaked paper with water in a blender until it forms a smooth pulp. Add more water if needed.",
                        image: "assets/images/paper2.jpg"
                    },
                    {
                        title: "Set Up Workspace",
                        description: "Fill a large container with water. Add the paper pulp and stir until it's evenly distributed.",
                        image: "assets/images/paper3.jpg"
                    },
                    {
                        title: "Form the Paper",
                        description: "Dip a screen into the pulp mixture. Lift it out evenly, letting the water drain. The pulp should form a layer on the screen.",
                        image: "assets/images/paper4.jpg"
                    },
                    {
                        title: "Dry the Paper",
                        description: "Transfer the pulp layer onto a towel. Cover with another towel and press to remove excess water. Let dry completely.",
                        image: "assets/images/paper5.jpg"
                    }
                ],
                tips: [
                    "Add flower petals or leaves for decorative paper",
                    "For colored paper, add natural dyes during blending",
                    "Use a rolling pin to make the paper smoother",
                    "Create different thicknesses by varying the pulp amount"
                ],
                impact: [
                    { icon: "fas fa-tree", value: "1", label: "Tree Saved" },
                    { icon: "fas fa-recycle", value: "100%", label: "Recycled Content" },
                    { icon: "fas fa-water", value: "50%", label: "Water Saved" }
                ],
                reviews: [
                    {
                        name: "Deepika Iyer",
                        date: "2023-06-12",
                        rating: 5,
                        text: "I've started making my own paper for greeting cards. It's a fun and rewarding process!"
                    },
                    {
                        name: "Arjun Patel",
                        date: "2023-05-25",
                        rating: 4,
                        text: "Great project for kids. We made paper for school projects and learned about recycling."
                    }
                ]
            }
        ];
        
        // Initialize projects grid
        function initializeProjects() {
            const projectsGrid = document.getElementById('projects-grid');
            projectsGrid.innerHTML = '';
            
            projectsData.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.dataset.category = project.category;
                projectCard.dataset.id = project.id;
                
                // Generate star rating HTML
                let starsHTML = '';
                const fullStars = Math.floor(project.rating);
                const hasHalfStar = project.rating % 1 >= 0.5;
                
                for (let i = 1; i <= 5; i++) {
                    if (i <= fullStars) {
                        starsHTML += '<i class="fas fa-star"></i>';
                    } else if (i === fullStars + 1 && hasHalfStar) {
                        starsHTML += '<i class="fas fa-star-half-alt"></i>';
                    } else {
                        starsHTML += '<i class="far fa-star"></i>';
                    }
                }
                
                projectCard.innerHTML = `
                    <button class="favorite-btn" data-id="${project.id}">
                        <i class="far fa-heart"></i>
                    </button>
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-rating">
                            <div class="stars">${starsHTML}</div>
                            <span class="rating-count">(${project.ratingCount})</span>
                        </div>
                        <div class="project-meta">
                            <div class="meta-item">
                                <i class="fas fa-clock"></i>
                                <span>${project.time}</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-tools"></i>
                                <span>${project.materials}</span>
                            </div>
                        </div>
                        <div class="difficulty ${project.difficulty}">${project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}</div>
                        <button class="view-project-btn">View Project</button>
                    </div>
                `;
                
                projectsGrid.appendChild(projectCard);
            });
            
            // Add click event listeners to project cards
            document.querySelectorAll('.project-card').forEach(card => {
                card.addEventListener('click', function(e) {
                    // Don't open modal if favorite button was clicked
                    if (e.target.closest('.favorite-btn')) return;
                    
                    const projectId = parseInt(this.dataset.id);
                    openProjectModal(projectId);
                });
            });
            
            // Add click event listeners to favorite buttons
            document.querySelectorAll('.favorite-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const projectId = parseInt(this.dataset.id);
                    toggleFavorite(projectId, this);
                });
            });
            
            // Initialize favorite buttons based on saved favorites
            updateFavoriteButtons();
        }
        
        // Toggle favorite status
        function toggleFavorite(projectId, buttonElement) {
            const isLoggedIn = checkLoginStatus();
            
            if (!isLoggedIn) {
                // Show login prompt
                const loginPrompt = document.createElement('div');
                loginPrompt.style.position = 'fixed';
                loginPrompt.style.top = '20px';
                loginPrompt.style.right = '20px';
                loginPrompt.style.backgroundColor = '#f44336';
                loginPrompt.style.color = 'white';
                loginPrompt.style.padding = '15px 20px';
                loginPrompt.style.borderRadius = '5px';
                loginPrompt.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                loginPrompt.style.zIndex = '1001';
                loginPrompt.textContent = 'Please login to add favorites';
                document.body.appendChild(loginPrompt);
                setTimeout(() => loginPrompt.remove(), 3000);
                return;
            }
            
            // Get current favorites from localStorage
            let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            
            // Toggle favorite status
            const index = favorites.indexOf(projectId);
            if (index === -1) {
                // Add to favorites
                favorites.push(projectId);
                buttonElement.classList.add('active');
                buttonElement.innerHTML = '<i class="fas fa-heart"></i>';
                
                // Show success message
                const successMsg = document.createElement('div');
                successMsg.style.position = 'fixed';
                successMsg.style.top = '20px';
                successMsg.style.right = '20px';
                successMsg.style.backgroundColor = 'var(--light-green)';
                successMsg.style.color = 'white';
                successMsg.style.padding = '15px 20px';
                successMsg.style.borderRadius = '5px';
                successMsg.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                successMsg.style.zIndex = '1001';
                successMsg.textContent = 'Added to favorites!';
                document.body.appendChild(successMsg);
                setTimeout(() => successMsg.remove(), 3000);
            } else {
                // Remove from favorites
                favorites.splice(index, 1);
                buttonElement.classList.remove('active');
                buttonElement.innerHTML = '<i class="far fa-heart"></i>';
            }
            
            // Save updated favorites to localStorage
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
        
        // Update favorite buttons based on saved favorites
        function updateFavoriteButtons() {
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            
            document.querySelectorAll('.favorite-btn').forEach(btn => {
                const projectId = parseInt(btn.dataset.id);
                if (favorites.includes(projectId)) {
                    btn.classList.add('active');
                    btn.innerHTML = '<i class="fas fa-heart"></i>';
                }
            });
        }
        
        // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active button
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter projects
                const filter = this.dataset.filter;
                const projects = document.querySelectorAll('.project-card');
                
                projects.forEach(project => {
                    if (filter === 'all' || project.dataset.category === filter) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                });
            });
        });
        
        // Modal functionality
        const modal = document.getElementById('project-modal');
        const closeBtn = document.querySelector('.close-btn');
        let currentProjectId = null;
        let completedSteps = {};
        
        function openProjectModal(projectId) {
            currentProjectId = projectId;
            const project = projectsData.find(p => p.id === projectId);
            if (!project) return;
            
            // Load completed steps from localStorage
            const savedCompletedSteps = JSON.parse(localStorage.getItem('completedSteps') || '{}');
            completedSteps = savedCompletedSteps[projectId] || {};
            
            // Update modal content
            document.getElementById('modal-header-image').src = project.image;
            document.getElementById('modal-title').textContent = project.title;
            
            // Update project info
            const projectInfo = document.getElementById('project-info');
            projectInfo.innerHTML = `
                <div class="info-box">
                    <i class="fas fa-signal"></i>
                    <h4>Difficulty</h4>
                    <p>${project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}</p>
                </div>
                <div class="info-box">
                    <i class="fas fa-clock"></i>
                    <h4>Time Required</h4>
                    <p>${project.time}</p>
                </div>
                <div class="info-box">
                    <i class="fas fa-tools"></i>
                    <h4>Materials</h4>
                    <p>${project.materials}</p>
                </div>
            `;
            
            // Update steps
            const stepsContainer = document.getElementById('project-steps');
            stepsContainer.innerHTML = '';
            
            project.steps.forEach((step, index) => {
                const stepNumber = index + 1;
                const isCompleted = completedSteps[stepNumber] || false;
                
                const stepElement = document.createElement('div');
                stepElement.className = `step ${isCompleted ? 'completed' : ''}`;
                stepElement.innerHTML = `
                    <div class="step-header">
                        <input type="checkbox" class="step-checkbox" data-step="${stepNumber}" ${isCompleted ? 'checked' : ''}>
                        <div class="step-number">${stepNumber}</div>
                    </div>
                    <div class="step-content">
                        <h4 class="step-title">${step.title}</h4>
                        <p class="step-description">${step.description}</p>
                        <img src="${step.image}" alt="${step.title}" class="step-image">
                    </div>
                `;
                stepsContainer.appendChild(stepElement);
            });
            
            // Add event listeners to checkboxes
            document.querySelectorAll('.step-checkbox').forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const stepNumber = parseInt(this.dataset.step);
                    const isCompleted = this.checked;
                    
                    // Update completed steps
                    completedSteps[stepNumber] = isCompleted;
                    
                    // Update UI
                    const stepElement = this.closest('.step');
                    if (isCompleted) {
                        stepElement.classList.add('completed');
                    } else {
                        stepElement.classList.remove('completed');
                    }
                    
                    // Update progress bar
                    updateProgressBar();
                    
                    // Save to localStorage
                    const savedCompletedSteps = JSON.parse(localStorage.getItem('completedSteps') || '{}');
                    savedCompletedSteps[projectId] = completedSteps;
                    localStorage.setItem('completedSteps', JSON.stringify(savedCompletedSteps));
                });
            });
            
            // Initialize progress bar
            updateProgressBar();
            
            // Update tips
            const tipsContainer = document.getElementById('project-tips');
            tipsContainer.innerHTML = '';
            
            project.tips.forEach(tip => {
                const tipElement = document.createElement('li');
                tipElement.textContent = tip;
                tipsContainer.appendChild(tipElement);
            });
            
            // Update impact
            const impactContainer = document.getElementById('project-impact');
            impactContainer.innerHTML = '';
            
            project.impact.forEach(metric => {
                const metricElement = document.createElement('div');
                metricElement.className = 'impact-metric';
                metricElement.innerHTML = `
                    <i class="${metric.icon}"></i>
                    <h4>${metric.value}</h4>
                    <p>${metric.label}</p>
                `;
                impactContainer.appendChild(metricElement);
            });
            
            // Update reviews
            const reviewsList = document.getElementById('reviews-list');
            reviewsList.innerHTML = '';
            
            if (project.reviews && project.reviews.length > 0) {
                project.reviews.forEach(review => {
                    const reviewElement = document.createElement('div');
                    reviewElement.className = 'review-item';
                    
                    // Generate star rating HTML for review
                    let reviewStarsHTML = '';
                    for (let i = 1; i <= 5; i++) {
                        if (i <= review.rating) {
                            reviewStarsHTML += '<i class="fas fa-star"></i>';
                        } else {
                            reviewStarsHTML += '<i class="far fa-star"></i>';
                        }
                    }
                    
                    reviewElement.innerHTML = `
                        <div class="review-header">
                            <span class="reviewer-name">${review.name}</span>
                            <span class="review-date">${formatDate(review.date)}</span>
                        </div>
                        <div class="review-rating">${reviewStarsHTML}</div>
                        <div class="review-text">${review.text}</div>
                    `;
                    reviewsList.appendChild(reviewElement);
                });
            } else {
                reviewsList.innerHTML = '<p>No reviews yet. Be the first to review this project!</p>';
            }
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        
        // Update progress bar
        function updateProgressBar() {
            const totalSteps = document.querySelectorAll('.step-checkbox').length;
            const completedCount = Object.values(completedSteps).filter(Boolean).length;
            const percentage = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;
            
            document.getElementById('progress-bar').style.width = `${percentage}%`;
        }
        
        // Format date for reviews
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        }
        
        // Rating input functionality
        const ratingStars = document.querySelectorAll('#rating-input i');
        let selectedRating = 0;
        
        ratingStars.forEach(star => {
            star.addEventListener('click', function() {
                selectedRating = parseInt(this.dataset.rating);
                updateRatingDisplay();
            });
            
            star.addEventListener('mouseover', function() {
                const hoverRating = parseInt(this.dataset.rating);
                highlightStars(hoverRating);
            });
        });
        
        document.getElementById('rating-input').addEventListener('mouseleave', function() {
            updateRatingDisplay();
        });
        
        function highlightStars(rating) {
            ratingStars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.remove('far');
                    star.classList.add('fas', 'active');
                } else {
                    star.classList.remove('fas', 'active');
                    star.classList.add('far');
                }
            });
        }
        
        function updateRatingDisplay() {
            highlightStars(selectedRating);
        }
        
        // Submit review
        document.getElementById('submit-review').addEventListener('click', function() {
            const isLoggedIn = checkLoginStatus();
            
            if (!isLoggedIn) {
                // Show login prompt
                const loginPrompt = document.createElement('div');
                loginPrompt.style.position = 'fixed';
                loginPrompt.style.top = '20px';
                loginPrompt.style.right = '20px';
                loginPrompt.style.backgroundColor = '#f44336';
                loginPrompt.style.color = 'white';
                loginPrompt.style.padding = '15px 20px';
                loginPrompt.style.borderRadius = '5px';
                loginPrompt.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                loginPrompt.style.zIndex = '1001';
                loginPrompt.textContent = 'Please login to submit a review';
                document.body.appendChild(loginPrompt);
                setTimeout(() => loginPrompt.remove(), 3000);
                return;
            }
            
            const reviewText = document.getElementById('review-text').value.trim();
            
            if (selectedRating === 0) {
                // Show error message
                const errorMsg = document.createElement('div');
                errorMsg.style.position = 'fixed';
                errorMsg.style.top = '20px';
                errorMsg.style.right = '20px';
                errorMsg.style.backgroundColor = '#f44336';
                errorMsg.style.color = 'white';
                errorMsg.style.padding = '15px 20px';
                errorMsg.style.borderRadius = '5px';
                errorMsg.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                errorMsg.style.zIndex = '1001';
                errorMsg.textContent = 'Please select a rating';
                document.body.appendChild(errorMsg);
                setTimeout(() => errorMsg.remove(), 3000);
                return;
            }
            
            if (reviewText === '') {
                // Show error message
                const errorMsg = document.createElement('div');
                errorMsg.style.position = 'fixed';
                errorMsg.style.top = '20px';
                errorMsg.style.right = '20px';
                errorMsg.style.backgroundColor = '#f44336';
                errorMsg.style.color = 'white';
                errorMsg.style.padding = '15px 20px';
                errorMsg.style.borderRadius = '5px';
                errorMsg.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                errorMsg.style.zIndex = '1001';
                errorMsg.textContent = 'Please write a review';
                document.body.appendChild(errorMsg);
                setTimeout(() => errorMsg.remove(), 3000);
                return;
            }
            
            // Get user info
            const userName = localStorage.getItem('userName') || 'Anonymous';
            
            // Create new review
            const newReview = {
                name: userName,
                date: new Date().toISOString().split('T')[0],
                rating: selectedRating,
                text: reviewText
            };
            
            // Add review to project data
            const project = projectsData.find(p => p.id === currentProjectId);
            if (project) {
                if (!project.reviews) {
                    project.reviews = [];
                }
                project.reviews.unshift(newReview);
                
                // Update project rating
                const totalRating = project.reviews.reduce((sum, review) => sum + review.rating, 0);
                project.rating = parseFloat((totalRating / project.reviews.length).toFixed(1));
                project.ratingCount = project.reviews.length;
                
                // Refresh the projects grid to show updated rating
                initializeProjects();
                
                // Refresh the reviews list in modal
                const reviewsList = document.getElementById('reviews-list');
                reviewsList.innerHTML = '';
                
                project.reviews.forEach(review => {
                    const reviewElement = document.createElement('div');
                    reviewElement.className = 'review-item';
                    
                    // Generate star rating HTML for review
                    let reviewStarsHTML = '';
                    for (let i = 1; i <= 5; i++) {
                        if (i <= review.rating) {
                            reviewStarsHTML += '<i class="fas fa-star"></i>';
                        } else {
                            reviewStarsHTML += '<i class="far fa-star"></i>';
                        }
                    }
                    
                    reviewElement.innerHTML = `
                        <div class="review-header">
                            <span class="reviewer-name">${review.name}</span>
                            <span class="review-date">${formatDate(review.date)}</span>
                        </div>
                        <div class="review-rating">${reviewStarsHTML}</div>
                        <div class="review-text">${review.text}</div>
                    `;
                    reviewsList.appendChild(reviewElement);
                });
                
                // Reset form
                document.getElementById('review-text').value = '';
                selectedRating = 0;
                updateRatingDisplay();
                
                // Show success message
                const successMsg = document.createElement('div');
                successMsg.style.position = 'fixed';
                successMsg.style.top = '20px';
                successMsg.style.right = '20px';
                successMsg.style.backgroundColor = 'var(--light-green)';
                successMsg.style.color = 'white';
                successMsg.style.padding = '15px 20px';
                successMsg.style.borderRadius = '5px';
                successMsg.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                successMsg.style.zIndex = '1001';
                successMsg.textContent = 'Review submitted successfully!';
                document.body.appendChild(successMsg);
                setTimeout(() => successMsg.remove(), 3000);
            }
        });
        
        // Close modal
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Initialize page
        window.addEventListener('DOMContentLoaded', () => {
            checkLoginStatus();
            initializeProjects();
        });
    