
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
        
        // Initialize 3D Globe
        function initGlobe() {
            const container = document.querySelector('.globe-container');
            const canvas = document.getElementById('globe-canvas');
            
            // Scene setup
            const scene = new THREE.Scene();
            
            // Camera setup
            const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
            camera.position.z = 3;
            
            // Renderer setup
            const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            
            // Earth geometry and material
            const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
            
            // Create earth texture
            const textureLoader = new THREE.TextureLoader();
            const earthTexture = textureLoader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
            const bumpTexture = textureLoader.load('https://threejs.org/examples/textures/planets/earth_normal_2048.jpg');
            const specularTexture = textureLoader.load('https://threejs.org/examples/textures/planets/earth_specular_2048.jpg');
            
            const earthMaterial = new THREE.MeshPhongMaterial({
                map: earthTexture,
                bumpMap: bumpTexture,
                bumpScale: 0.05,
                specularMap: specularTexture,
                specular: new THREE.Color('grey')
            });
            
            // Create earth mesh
            const earth = new THREE.Mesh(earthGeometry, earthMaterial);
            scene.add(earth);
            
            // Add cloud layer
            const cloudGeometry = new THREE.SphereGeometry(1.01, 64, 64);
            const cloudTexture = textureLoader.load('https://threejs.org/examples/textures/planets/earth_clouds_1024.png');
            const cloudMaterial = new THREE.MeshPhongMaterial({
                map: cloudTexture,
                transparent: true,
                opacity: 0.4
            });
            const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
            scene.add(clouds);
            
            // Add ambient light
            const ambientLight = new THREE.AmbientLight(0x333333);
            scene.add(ambientLight);
            
            // Add directional light (sun)
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(5, 3, 5);
            scene.add(directionalLight);
            
            // Add point light for better illumination
            const pointLight = new THREE.PointLight(0xffffff, 0.5);
            pointLight.position.set(5, 3, 5);
            scene.add(pointLight);
            
            // Mouse interaction variables
            let isDragging = false;
            let previousMousePosition = { x: 0, y: 0 };
            let rotationVelocity = { x: 0, y: 0 };
            
            // Mouse event handlers
            canvas.addEventListener('mousedown', (e) => {
                isDragging = true;
                previousMousePosition = { x: e.clientX, y: e.clientY };
            });
            
            canvas.addEventListener('mousemove', (e) => {
                if (isDragging) {
                    const deltaMove = {
                        x: e.clientX - previousMousePosition.x,
                        y: e.clientY - previousMousePosition.y
                    };
                    
                    rotationVelocity = {
                        x: deltaMove.x * 0.01,
                        y: deltaMove.y * 0.01
                    };
                    
                    previousMousePosition = { x: e.clientX, y: e.clientY };
                }
            });
            
            canvas.addEventListener('mouseup', () => {
                isDragging = false;
            });
            
            canvas.addEventListener('mouseleave', () => {
                isDragging = false;
            });
            
            // Touch event handlers for mobile
            canvas.addEventListener('touchstart', (e) => {
                isDragging = true;
                previousMousePosition = { 
                    x: e.touches[0].clientX, 
                    y: e.touches[0].clientY 
                };
            });
            
            canvas.addEventListener('touchmove', (e) => {
                if (isDragging) {
                    const deltaMove = {
                        x: e.touches[0].clientX - previousMousePosition.x,
                        y: e.touches[0].clientY - previousMousePosition.y
                    };
                    
                    rotationVelocity = {
                        x: deltaMove.x * 0.01,
                        y: deltaMove.y * 0.01
                    };
                    
                    previousMousePosition = { 
                        x: e.touches[0].clientX, 
                        y: e.touches[0].clientY 
                    };
                }
            });
            
            canvas.addEventListener('touchend', () => {
                isDragging = false;
            });
            
            // Handle window resize
            window.addEventListener('resize', () => {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            });
            
            // Animation loop
            function animate() {
                requestAnimationFrame(animate);
                
                // Apply rotation velocity with damping
                if (!isDragging) {
                    rotationVelocity.x *= 0.95;
                    rotationVelocity.y *= 0.95;
                }
                
                // Rotate earth and clouds
                earth.rotation.y += rotationVelocity.x;
                earth.rotation.x += rotationVelocity.y;
                clouds.rotation.y += rotationVelocity.x * 1.1; // Slightly faster rotation for clouds
                clouds.rotation.x += rotationVelocity.y * 1.1;
                
                // Limit vertical rotation
                earth.rotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, earth.rotation.x));
                clouds.rotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, clouds.rotation.x));
                
                // Auto-rotate when not being dragged
                if (!isDragging && Math.abs(rotationVelocity.x) < 0.001) {
                    earth.rotation.y += 0.002;
                    clouds.rotation.y += 0.0022;
                }
                
                renderer.render(scene, camera);
            }
            
            animate();
            
            // Position hotspots on the globe
            function updateHotspotPositions() {
                const globeRect = container.getBoundingClientRect();
                const radius = container.clientWidth / 2;
                
                // Hotspot positions (latitude, longitude in degrees)
                const hotspotPositions = [
                    { lat: 28.6139, lon: 77.2090, id: 'hotspot-1' },  // Delhi
                    { lat: 19.0760, lon: 72.8777, id: 'hotspot-2' },  // Mumbai
                    { lat: 13.0827, lon: 80.2707, id: 'hotspot-3' },  // Chennai
                    { lat: 22.5726, lon: 88.3639, id: 'hotspot-4' }   // Kolkata
                ];
                
                hotspotPositions.forEach(pos => {
                    const hotspot = document.getElementById(pos.id);
                    
                    // Convert lat/lon to 3D position
                    const phi = (90 - pos.lat) * (Math.PI / 180);
                    const theta = (pos.lon + 180) * (Math.PI / 180);
                    
                    // Calculate position on sphere
                    const x = -(radius * Math.sin(phi) * Math.cos(theta));
                    const y = radius * Math.cos(phi);
                    const z = radius * Math.sin(phi) * Math.sin(theta);
                    
                    // Apply rotation
                    const rotatedX = x * Math.cos(earth.rotation.y) - z * Math.sin(earth.rotation.y);
                    const rotatedZ = x * Math.sin(earth.rotation.y) + z * Math.cos(earth.rotation.y);
                    
                    // Project to 2D screen coordinates
                    const scale = 300 / (300 + rotatedZ);
                    const screenX = rotatedX * scale + radius;
                    const screenY = y * scale + radius;
                    
                    // Position hotspot
                    hotspot.style.left = `${screenX}px`;
                    hotspot.style.top = `${screenY}px`;
                    
                    // Hide hotspot if it's on the back of the globe
                    hotspot.style.display = rotatedZ > 0 ? 'block' : 'none';
                });
            }
            
            // Update hotspot positions in the animation loop
            function animateWithHotspots() {
                updateHotspotPositions();
                animate();
            }
            
            animateWithHotspots();
            
            // Hotspot interaction for eco-facts
            const hotspots = document.querySelectorAll('.hotspot');
            const facts = document.querySelectorAll('.eco-fact');
            
            hotspots.forEach((hotspot, index) => {
                hotspot.addEventListener('mouseenter', () => {
                    facts[index].style.display = 'block';
                    // Position fact near hotspot
                    const hotspotRect = hotspot.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    facts[index].style.left = `${hotspotRect.left - containerRect.left + 15}px`;
                    facts[index].style.top = `${hotspotRect.top - containerRect.top - 80}px`;
                });
                
                hotspot.addEventListener('mouseleave', () => {
                    facts[index].style.display = 'none';
                });
            });
        }
        
        
        // Initialize globe when page loads
        window.addEventListener('DOMContentLoaded', () => {
            checkLoginStatus();
            initGlobe();
        });
    