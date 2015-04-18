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
	<script src="bower_components/jquery/dist/jquery.min.js"></script>
	<script type="text/javascript">
		$(document).ready(function () {
			$("ul li ul").attr("id", "hidden").hide();
			$("li").click(function () {
				$(this).children("#hidden").slideDown("fast").attr("id", "visible");
			});
		})
	</script>
</head>
<body>
<ul>
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