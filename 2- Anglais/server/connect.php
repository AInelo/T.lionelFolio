<?php
// var_dump($_POST);


// Retrieve from data 
$name = $_POST['name'];
$email = $_POST['email'];
$countryCode = $_POST['countryCode'];
$tel = $_POST['tel'];
$msgobject = $_POST['msgobject'];
$message = $_POST['message'];

// name, email, countryCode, tel, msgobject, message

//Connect to PHPMyAdmin 
$servername = "localhost"; // Change to your database server name
$username = "root"; // Change to your database username
$password = "20024"; // Change to your database password
$dbname = "folio2"; // Change to your database name

// Create connection
$conn = new mysqli($servername,$username,$password,$dbname);

// Check Connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//Insert form data into database 
$sql = "INSERT INTO visiteur (name, email, countryCode, tel, msgobject, message) VALUES ('$name', '$email', '$countryCode', '$tel', '$msgobject', '$message')";

$result = mysqli_query( $conn , $sql);

// if ($conn->query($sql) === TRUE) {
//     echo "Form data inserted successfully!";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }

// Close connection
$conn->close();
?>


