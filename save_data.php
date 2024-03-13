<?php
// Check if the form data was sent
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve form data
  $email = $_POST['email'];
  $password = $_POST['password'];

  // Create connection to MySQL database
  $servername = "localhost";
  $username_db = "saajal"; // Replace with your MySQL username
  $password_db = "root"; // Replace with your MySQL password
  $dbname = "tamagochi"; // Replace with your MySQL database name
  $conn = new mysqli($servername, $username_db, $password_db, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Prepare SQL statement to insert data into the 'tamagochi' table
  $stmt = $conn->prepare("INSERT INTO tamagochi (email, password) VALUES (?, ?)");
  $stmt->bind_param("ss", $email, $password);

  // Execute the prepared statement
  if ($stmt->execute() === TRUE) {
    echo "Data submitted successfully";
  } else {
    echo "Error: " . $stmt->error;
    // Additional error handling
    echo "Error message: " . mysqli_error($conn); // Print detailed MySQL error message
  }

  fetch('http://127.0.0.1:5500/save_data.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      return response.text(); // Parse response as text
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    console.log(data); // Log response data
    // You can perform further actions based on the response here
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  
  // Close the prepared statement and database connection
  $stmt->close();
  $conn->close();
} else {
  // Handle invalid requests
  echo "Invalid request";
}
?>
