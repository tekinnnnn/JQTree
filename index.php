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

			$('li').click(function () {
				if (this.getAttribute("id") == "hiddenli") {
					$(this).attr("id", "visibleli");
					$(this).children('#hidden').slideDown("fast").attr("id", "visible");
				} else if (this.getAttribute("id") == "visibleli") {
					$(this).attr("id", "hiddenli");
					$(this).children('#visible').slideUp("fast").attr("id", "hidden");
				}
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