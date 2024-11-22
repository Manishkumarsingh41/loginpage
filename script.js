document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "user" && password === "web_dev") {
        alert("Login successful!");
        // Redirect or perform other actions
    } else {
        alert("Invalid username or password.");
    }
});