<?php 
session_start();
$pdo = new PDO('mysql:host=localhost;dbname=trikot25', 'test', '');
 
if(isset($_GET['login'])) {
    $mail = $_POST['mail'];
    $password = $_POST['password'];
    
    $statement = $pdo->prepare("SELECT * FROM user WHERE mail = :mail");
    $result = $statement->execute(array('mail' => $mail));
    $user = $statement->fetch();
        
    //Überprüfung des Passworts
    if ($user !== false && password_verify($password, $user['password'])) {
        $_SESSION['userid'] = $user['id'];
        die('Login erfolgreich. Weiter zu <a href="index.php">internen Bereich</a>');
    } else {
        $errorMessage = "E-Mail oder Passwort war ungültig<br>";
    }
    
}
?>
<!DOCTYPE html> 
<html> 
<head>
  <title>Login</title>    
</head> 
<body>
 
<?php 
if(isset($errorMessage)) {
    echo $errorMessage;
}
?>
 
<form action="?login=1" method="post">
E-Mail:<br>
<input type="mail" size="40" maxlength="250" name="mail"><br><br>
 
Dein Passwort:<br>
<input type="password" size="40"  maxlength="250" name="password"><br>
 
<input type="submit" value="Abschicken">
</form> 
</body>
</html>