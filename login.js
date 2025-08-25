// login.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const msgDiv = document.getElementById('msg');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('loginUser').value.trim();
        const password = document.getElementById('loginPass').value;

        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        // Find user by username and password
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            msgDiv.textContent = 'Login successful! Welcome, ' + user.username + '.';
            msgDiv.style.color = 'green';
            window.location.href = 'home_page.html'; // Redirect to dashboard or home page
            // You can redirect to a dashboard here if you want:
            // window.location.href = 'dashboard.html';
        } else {
            msgDiv.textContent = 'Invalid username or password.';
            msgDiv.style.color = 'red';
        }
    });
});
