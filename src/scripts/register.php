<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);


    $firstname = $request->firstname;
    $lastname = $request->lastname;
    $mail = $request->mail;
    $password = $request->password;
    $sql = "INSERT INTO user (firstname, lastname, mail, password) VALUES ('$firstname', '$lastname','$mail','$password')";
    if(mysqli_query($db,$sql)){
        http_response_code(201);
    }
    else{
         http_response_code(422);
    }

}
?>