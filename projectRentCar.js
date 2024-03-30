document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission (for demonstration purposes)
  
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // For demonstration purposes: Show entered values
    console.log("Username:", username);
    console.log("Password:", password);
  
    // In a real application, you'd send this data to a server for authentication
    // This is a basic example without actual authentication logic
  });
  