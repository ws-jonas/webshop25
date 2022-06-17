<?php
require'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$sql = "SELECT (productID, name, stock, description, price) FROM products";
$result = mysqli_query($db,$sql);
$myArray = array();
if ($result->num_rows > 0) {
  // output data of each row
    while($row = $result->fetch_assoc()){
      $myArray[] = $row;
    }
    echo json_encode($myArray);

} else {
  echo "0 results";
}



