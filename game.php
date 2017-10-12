<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Catch the Block</title>

  <link rel="stylesheet" type="text/css" href="styles/all.css" media="all"/>
  <!-- Load jQuery from CDN -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <!-- Load jQuery script-->
  <script src="scripts/game.js"></script>

</head>

<?php include "includes/header.php"; ?>

<body>

  <div class="text_box">

    <p><strong>Gameplay: </strong>One player uses the mouse to try and click the box. The other player evades the mouse using the arrow keys to move. How long can you last?</p>

    <center>
      <button id="start">Start</button>
      <h2 id="score">Score: 0</h2>
    </center>

    <div class="container">
      <div id="catch_me"></div>
    </div>

  </div>



</body>

</html>
