
document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const loginData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    try {
        const res = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        });
        const data = await res.json();
        
        let msgEl = document.getElementById('login-message');
        if (!msgEl) {
            msgEl = document.createElement('div');
            msgEl.id = 'login-message';
            msgEl.style.marginTop = '20px';
            document.querySelector('.login-form').appendChild(msgEl);
        }

        if (data.success) {
            msgEl.style.color = 'green';
            msgEl.textContent = 'Login successful! Redirecting...';
            
            // --- MODIFIED SECTION ---
            // Save the full user object for profile pages
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);
            
            // Save individual items for easy access by the nav bar's checkLoginStatus() function
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', data.user.name);
            localStorage.setItem('userRole', data.user.role || 'Student'); // Default to 'Student' if role is not provided
            localStorage.setItem('userAvatar', data.user.avatar || 'https://randomuser.me/api/portraits/lego/0.jpg'); // Default avatar
            
            setTimeout(() => window.location.href = 'profile.html', 1500); // Redirect to profile page
        } else {
            msgEl.style.color = 'red';
            msgEl.textContent = data.message || 'Login failed.';
        }
    } catch (err) {
        let msgEl = document.getElementById('login-message');
        if (!msgEl) {
            msgEl = document.createElement('div');
            msgEl.id = 'login-message';
            msgEl.style.marginTop = '20px';
            document.querySelector('.login-form').appendChild(msgEl);
        }
        msgEl.style.color = 'red';
        msgEl.textContent = 'Error connecting to server';
    }
});
