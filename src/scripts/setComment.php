<?php
require_once 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);


    $productID = $request->productID;
    $userID = $request->userID;
    $title = $request->title;
    $comment = $request->comment;
    $hasBought = $request->hasBought;



    $sql = "INSERT INTO comments (productID, userID, title, comment, hasBought) VALUES ('$productID', '$userID','$title','$comment','$hasBought')";
    if(mysqli_query($db,$sql)){
        http_response_code(201);
    }
    else{
         http_response_code(422);
    }

}
?>



