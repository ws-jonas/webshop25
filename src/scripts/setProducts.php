<?php
require_once 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    //$file_chunks = explode(";base64,", $request->image);

    //$fileType = explode("image/", $file_chunks[0]);
    //$image_type = $fileType[1];
   // $base64Img = base64_decode($file_chunks[1]);

    //$file = $DIR . uniqid() . '.png';
    //file_put_contents($file, $base64Img);

    $image = $request->image;
    $name = $request->name;
    $stock = $request->stock;
    $description = $request->description;
    $price = $request->price;
    $sql = "INSERT INTO products (name, stock, description, price, image) VALUES ('$name', '$stock','$description','$price', '$image')";
    if(mysqli_query($db,$sql)){
        http_response_code(201);
    }
    else{
         http_response_code(422);
    }

}
?>