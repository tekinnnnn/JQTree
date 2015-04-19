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
	<script src="bower_components/jquery/dist/jquery.min.js"></script>
	<script type="text/javascript">
		$(document).ready(function () {
			$("#jqree li > ul").attr("id","hidden").hide();
			$("#jqree li").has("ul").attr("id", "hiddenli");

			$('#jqree li').click(function () {
				if ($(this).has("#hidden")) {
					if (this.getAttribute("id") != "visibleli") {
						$(this).removeAttr("id").attr("id", "visibleli");
						$(this).children('ul').stop().slideDown("fast");
					} else if (this.getAttribute("id") != "hiddenli") {
						$(this).removeAttr("id").attr("id", "hiddenli");
						$(this).children('ul').stop().slideUp("fast");
					}
				}
			});
		})
	</script>
</head>
<body>
<ul id="jqree">
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