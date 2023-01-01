<?php
$servername = "localhost";
$username = "root";
$password = "mysql";
$dbname="wwiiwar";

$q = strval($_GET['q']);
$words = explode(" ", $q);
$username_html=$words[0];
$password_html=$words[1];
$firstname=$words[2];
$lastname=$words[3];
$email=$words[4];
$type_of_user=$words[5];
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";
  echo $type_of_user;
  // sql to create table
  
  $stmt = $conn->prepare("INSERT INTO war (username, passwordd, firstname, lastname, email, type_of_user) VALUES (?, ?, ?, ?, ?,?)");
  $stmt->bind_param("ssssss",$username_html, $password_html, $firstname, $lastname, $email,$type_of_user);
  $stmt->execute();
  
  
  $stmt->close();
    $conn->close();
?>