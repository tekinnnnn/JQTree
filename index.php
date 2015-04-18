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
	<title></title>
	<link rel="stylesheet" href="css.css">
	<script src="bower_components/jquery/dist/jquery.min.js"></script>
	<script type="text/javascript">
		$(document).ready(function () {
			$("#jqtree li ul").attr("id", "hidden").hide();
			$("ul li").has("ul").attr("id", "hiddenli");

			$('li#hiddenli').click(function () {
				$(this).children('ul#hidden').slideDown("fast").removeAttr("id").attr("id", "visible");
				$(this).removeAttr("id").attr("id", "visibleli");
			});

			$('li#visibleli').click(function () {
				$(this).children('ul#visible').slideUp("fast").removeAttr("id").attr("id", "hidden");
				$(this).removeAttr("id").attr("id", "hiddenli");
			});
		})
	</script>
</head>
<body>
<ul id="jqtree">
	<li>asd</li>
	<li>asd</li>
	<li>asd</li>
	<li>qwe
		<ul>
			<li>asd</li>
			<li>asd</li>
			<li>asd</li>
			<li>qwe
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
	<li>qwe
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