<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">
  <title>Slideshow</title>

  <link rel="stylesheet" type="text/css" href="styles/all.css" media="all"/>

  <!-- TODO: ADD SCRIPTS HERE -->

</head>

<!-- TODO: INCLUDE HEADER HERE -->

<body>

  <div id="slide">

      <h1>A Tour of Cornell</h1>
      <div id="image_container">
        <!-- images taken by Kyle Harms-->
        <center>
          <img id="current_img" src="images/tower1.png">
        </center>
      </div> <!-- end of image_container div -->

      <div id="button_container">
          <button class="slide_button" id="left" onclick="prev();">Previous</button>
          <button class="slide_button" id="right" onclick="next();">Next</button>
      </div> <!-- end of button_container div -->

  </div>

</body>

<footer>
  <p id="date"></p>
</footer>

</html>
