<?php
/**
 * Created by PhpStorm.
 * User: Tekin Aydoğdu
 * Date: 18.4.2015
 * Time: 12:26
 */

?>
<!DOCTYPE html>
<html>
<head lang="en">
	<meta charset="UTF-8">
	<title>jQree</title>
	<link rel="stylesheet" href="css.css">
	<script src="jquery.js"></script>
	<script type="text/javascript">
		$(document).ready(function () {
			
			$('li#baslik ul').hide();
			$('li#baslik').click(function(){
				var oku = $(this).children('ul');
				
				if(oku.attr("style") == "display: none;"){
					$(this).children('ul').slideDown();
				}else {
					$(this).children('ul').slideUp();
				}

			})
		})
	</script>
</head>
<body>
<ul id="jqree">
	<li>asd</li>
	<li>asd</li>
	<li>asd</li>
	<li id="baslik">qwe
		<ul>
			<li>asd</li>
			<li>asd</li>
			<li>asd</li>
			<li id="baslik">qwe
				<ul>
					<li>asd</li>
					<li>asd</li>
					<li>asd</li>
					<li>asd</li>
				</ul>
			</li>
		</ul>
	</li>
	<li>asd</li>
	<li>asd</li>
	<li id="baslik">qwe
		<ul>
			<li>asd</li>
			<li>asd</li>
			<li>asd</li>
			<li>asd</li>
		</ul>
	</li>
</ul>
</body>
</html>