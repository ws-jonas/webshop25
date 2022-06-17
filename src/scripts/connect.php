<?php
$servername = "localhost";
$username = "test";
$password = "";
$database= "trikot25";

// Create connection
$db = mysqli_connect($servername, $username, $password, $database);

// Check connection
if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}
?>