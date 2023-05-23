<?php

session_start();

if (isset($_SESSION["user_id"])) {
    
    $mysqli = require __DIR__ . "/database.php";
    
    $sql = "SELECT * FROM user
            WHERE id = {$_SESSION["user_id"]}";
            
    $result = $mysqli->query($sql);
    
    $user = $result->fetch_assoc();
}

?>
<!DOCTYPE html>
<html>
<head>
    <title>Confirmation</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="confirm">

    <h1 style="color:#fff;">Home</h1>
    
    <?php if (isset($user)): ?>
        
        <p style="color:#fff;">Hello <?= htmlspecialchars($user["name"]) ?></p>
        <p style="color:#fff;">Congrats! You are now Logged In</p> 
        <p><a href="logout.php">Log out</a></p>
        
    <?php else: ?>
        
        <p><a href="login.php">Log in</a> or <a href="signup.html">sign up</a></p>
        
    <?php endif; ?> <p><a href="index.html">Go To Home Page</a></p>
    </div>
    
    
</body>
</html>