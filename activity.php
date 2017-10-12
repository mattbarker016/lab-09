<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Block Makeover</title>
  <link rel="stylesheet" type="text/css" href="styles/all.css" media="all"/>
  <!-- Load jQuery from CDN -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <!-- Load jQuery script-->
  <script src="scripts/activity.js"></script>
</head>

<?php include "includes/header.php"; ?>

<body>

	<div class="activity">



		<h3>1. Change the color of the box to blue.</h3>

		<div class="block" id="one">
			<p>I'm a block!</p>
		</div>


		<h3>2. Change the text to, "Well, more of a rectangle, really!".</h3>

		<div class="block" id="two">
			<p>I'm a block!</p>
		</div>

		<p>Note: This text shouldn't change and the above text should stay white!</p>



		<h3>3. Increase the width to 300px to let the block be more expressive.</h3>

		<div class="block" id="three">
			<p>I'm a block!</p>
		</div>

		<p>Note: Copy your jQuery from #2.</p>


		<h3>4. Decrease the nerdy block's font by 4px.</h3>

		<div class="block" id="four">
			<p>I'm a block!</p>
		</div>



		<h3>5. On a click, banish the smart-aleck block by slowly, intimately, fading it out of existence.</h3>

		<div class="block" id="five">
			<p>I'm a block!</p>
		</div>



		<h3>6. Implement the two button's respective functions.</h3>

		<div class="block" id="six">
			<p>I'm a <em>block!</em></p>
		</div>

		<button id="button_text">Show Text</button>
		<button id="button_html">Show HTML</button>

		<h4 id="status">Description of the block's phrase</h4>
		<p>Note: Each button should have a different output!</p>



		<h3>7. Move the block right when mousing over. Challenge: Can you move it back when repeated?</h3>

		<div class="block" id="seven">
			<p>I'm a block!</p>
		</div>



		<h3>8. Challenge: Change the block's color whenever you press DOWN on a KEY.</h3>

		<div class="block" id="eight">
			<p>I'm a block!</p>
		</div>



		<center>
			<h3>To see what else you can do with jQuery, try to <a href="game.php">Catch the Block!</a></h3>
		</center>



	</div>

	
</body>

</html>
