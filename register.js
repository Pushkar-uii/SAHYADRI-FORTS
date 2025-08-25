// register.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const username = form.elements['username'].value.trim();
        const email = form.elements['email'].value.trim();
        const password = form.elements['password'].value;

        // Retrieve existing users or create new array
        let users = JSON.parse(localStorage.getItem('users') || '[]');

        // Check if email already exists
        if (users.some(user => user.email === email)) {
            alert('Email already registered. Please use another email or login.');
            return;
        }

        // Save new user
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful! You can now login.');
        form.reset();
        window.location.href = 'login.html'; // Redirect to login page
    });
});
