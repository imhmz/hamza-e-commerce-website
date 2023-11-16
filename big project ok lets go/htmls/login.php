<?php
// Replace these variables with your actual database credentials
$servername = "your_servername";
$username = "your_username";
$password = "your_password";
$dbname = "your_dbname";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Assuming your users table has columns 'username', 'email', 'phone', 'dob', and 'password'
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $dob = $_POST['dob'];
    $password = $_POST['password'];

    // You should hash the password before storing it
    // Example: $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (username, email, phone, dob, password) 
            VALUES ('$username', '$email', '$phone', '$dob', '$password')";

    if ($conn->query($sql) === TRUE) {
        // Registration successful, you may redirect the user to the home page
        header("Location: index.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    error_reporting(E_ALL);
ini_set('display_errors', 1);

}

$conn->close();
?>

