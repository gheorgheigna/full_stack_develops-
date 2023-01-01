<?php
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
  echo "Connected successfully";
  
  
  $sql = "SELECT id, username, passwordd, firstname, lastname, email, reg_date, type_of_user FROM war ";
  $result = $conn->query($sql);
 
if ($result->num_rows > 0) {
  echo "<table><tr><th>ID</th><th>username</th><th>passwordd</th><th>firstname</th><th>lastname</th>
  <th>email</th><th>reg_date</th><th>type_of_user</th></tr>";
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "<tr><td>".$row["id"]."</td><td>".$row["username"]."</td><td>".$row["passwordd"]."</td><td>".$row["firstname"]."</td>
    <td>".$row["lastname"]."</td><td>".$row["email"]."</td><td>".$row["reg_date"]."</td><td>".$row["type_of_user"]."</td></tr>";
  }
  
  echo "</table>";
} else {
  echo "0 results";
}
$conn->close();
?>




