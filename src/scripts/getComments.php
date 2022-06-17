<?php
require'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $productID = $request->productID;

    $sql = "SELECT * FROM products WHERE productID = '$productID'";
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

} else {
  echo "No Data";
}


