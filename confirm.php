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
<div class="confirm-container">
  <h1>Confirmation!</h1>
  <div class="confirm">

    <?php if (isset($user)): ?>
        <div class="confirm-p">
            <p>Hello <?= htmlspecialchars($user["name"]) ?></p>
            <p>Congrats! You are now Logged In</p>
        </div>
        <a href="https://discord.gg/SkNvRu3S" class="hero-btn">Join Community</a>
      
      <br>
      <br>
    <?php else: ?>
      <p><a href="login.php" class="hero-btn">Log in</a> or <a href="signup.html"class="hero-btn">sign up</a></p>
    <?php endif; ?>
    <p>
    <a href="logout.php"  class="hero-btn">Log out</a></p>
  </div>
</div>
    
    
    
</body>
</html>
