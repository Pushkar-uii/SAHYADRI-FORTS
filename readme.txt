login and sign up
details

<!-- Simple HTML form for Login and Sign Up -->
<!DOCTYPE html>
<html>
<head>
    <title>Login and Sign Up</title>
</head>
<body>
    <h2>Sign Up</h2>
    <form id="signupForm">
        Username: <input type="text" id="signupUsername" required><br>
        Password: <input type="password" id="signupPassword" required><br>
        <button type="submit">Sign Up</button>
    </form>

    <h2>Login</h2>
    <form id="loginForm">
        Username: <input type="text" id="loginUsername" required><br>
        Password: <input type="password" id="loginPassword" required><br>
        <button type="submit">Login</button>
    </form>

    <script>
        // Save sign up details to localStorage
        document.getElementById('signupForm').onsubmit = function(e) {
            e.preventDefault();
            var username = document.getElementById('signupUsername').value;
            var password = document.getElementById('signupPassword').value;
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('Sign up successful!');
        };

        // Check login details from localStorage
        document.getElementById('loginForm').onsubmit = function(e) {
            e.preventDefault();
            var username = document.getElementById('loginUsername').value;
            var password = document.getElementById('loginPassword').value;
            var savedUsername = localStorage.getItem('username');
            var savedPassword = localStorage.getItem('password');
            if (username === savedUsername && password === savedPassword) {
                alert('Login successful!');
            } else {
                alert('Invalid username or password.');
            }
        };
    </script>
</body>
</html>