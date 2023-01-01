<?php
$q = strval($_GET['q']);
$words = explode(" ", $q);
$username_html=$words[0];
$password_html=$words[1];
$type_of_user=$words[2];

$servername = "localhost";
$username = "root";
$password = "mysql";
$dbname="wwiiwar";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";
// sql to create table

// select user and pass from db
$sql = "SELECT  username, passwordd , type_of_user FROM war WHERE (username='$username_html') 
        AND (passwordd='$password_html') AND (type_of_user='$type_of_user')";
$result = mysqli_query($conn, $sql);

if(!$result){
	die(mysqli_error($conn));
}
$row = mysqli_fetch_assoc($result);
 if($username_html== $row["username"] && $password_html==$row["passwordd"] && $row["type_of_user"]=="admin"){
    //echo  $row["firstname"].  "<br>";
    echo "admin";
}
if($username_html== $row["username"] && $password_html==$row["passwordd"] && $row["type_of_user"]=="user"){
    //echo  $row["firstname"].  "<br>";
    echo "user";
}
//if(isset($_POST["click"])){
   


mysqli_close($conn);
?>