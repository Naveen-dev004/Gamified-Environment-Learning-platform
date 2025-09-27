
// Tab switching logic
document.querySelectorAll('.form-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.form-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.form-content').forEach(fc => fc.classList.remove('active'));
        document.getElementById(tab.dataset.tab + '-form').classList.add('active');
    });
});

// Student Signup
document.getElementById('student-signup-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const userData = {
        firstName: document.getElementById('student-firstname').value,
        lastName: document.getElementById('student-lastname').value,
        email: document.getElementById('student-email').value,
        password: document.getElementById('student-password').value,
        school: document.getElementById('student-school').value,
        grade: document.getElementById('student-grade').value,
        userType: 'student'
    };
    try {
        const res = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        const data = await res.json();
        const msgEl = document.getElementById('student-success-message');
        if (data.success) {
            msgEl.style.display = 'block';
            setTimeout(() => window.location.href = 'login.html', 1500);
        } else {
            msgEl.style.display = 'block';
            msgEl.style.backgroundColor = '#DB4437';
            msgEl.textContent = data.message || 'Signup failed.';
        }
    } catch (err) {
        document.getElementById('student-success-message').style.display = 'block';
        document.getElementById('student-success-message').style.backgroundColor = '#DB4437';
        document.getElementById('student-success-message').textContent = 'Error connecting to server';
    }
});

// School Signup
document.getElementById('school-signup-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const userData = {
        firstName: document.getElementById('principal-name').value,
        lastName: '',
        email: document.getElementById('school-email').value,
        password: document.getElementById('school-password').value,
        school: document.getElementById('school-name').value,
        grade: '',
        userType: 'school',
        address: document.getElementById('school-address').value,
        phone: document.getElementById('school-phone').value
    };
    try {
        const res = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        const data = await res.json();
        const msgEl = document.getElementById('school-success-message');
        if (data.success) {
            msgEl.style.display = 'block';
        } else {
            msgEl.style.display = 'block';
            msgEl.style.backgroundColor = '#DB4437';
            msgEl.textContent = data.message || 'Signup failed.';
        }
    } catch (err) {
        document.getElementById('school-success-message').style.display = 'block';
        document.getElementById('school-success-message').style.backgroundColor = '#DB4437';
        document.getElementById('school-success-message').textContent = 'Error connecting to server';
    }
});

// NGO Signup
document.getElementById('ngo-signup-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const userData = {
        firstName: document.getElementById('ngo-name').value,
        lastName: '',
        email: document.getElementById('ngo-email').value,
        password: document.getElementById('ngo-password').value,
        school: '',
        grade: '',
        userType: 'ngo',
        focus: document.getElementById('ngo-focus').value,
        address: document.getElementById('ngo-address').value,
        phone: document.getElementById('ngo-phone').value
    };
    try {
        const res = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        const data = await res.json();
        const msgEl = document.getElementById('ngo-success-message');
        if (data.success) {
            msgEl.style.display = 'block';
        } else {
            msgEl.style.display = 'block';
            msgEl.style.backgroundColor = '#DB4437';
            msgEl.textContent = data.message || 'Signup failed.';
        }
    } catch (err) {
        document.getElementById('ngo-success-message').style.display = 'block';
        document.getElementById('ngo-success-message').style.backgroundColor = '#DB4437';
        document.getElementById('ngo-success-message').textContent = 'Error connecting to server';
    }
});
