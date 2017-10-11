<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Slideshow</title>
  <link rel="stylesheet" type="text/css" href="styles/all.css" media="all"/>
  <!-- Load jQuery from CDN -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <!-- Load jQuery script-->
  <script src="scripts/slideshow.js"></script>
</head>

<?php include "includes/header.php"; ?>

<body>

      <h1>Slideshows are useful!</h1>
      <div id="image_container">
        <!-- images taken by Kyle Harms-->
        <img id="current_img" src="images/tower1.png">
      </div> <!-- end of image_container div -->

      <div id="button_container">
          <button onclick="Prev();">Previous</button>
          <button onclick="Next();">Next</button>
      </div> <!-- end of button_container div -->

    <footer>

    </footer>
  </body>
</html>
  </div>
</body>

</html>
