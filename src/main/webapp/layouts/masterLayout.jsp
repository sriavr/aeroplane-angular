
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<!doctype html>
<html>
<head>
<title><tiles:getAsString name="title" /></title>
<tiles:insertAttribute name="common-head" />
<head>
<link rel="icon" type="image/png" href="img/favicon.ico" />
<style type="text/css">
header {
	background-color: blue;
	color: white;
	text-align: center;
}

footer {
	background-color: green;
	color: white;
	text-align: center;
	position: absolute;
	width: 100%;
	bottom: 0;
}
</style>
</head>
<body>

	<div class="container-fluid">
		<div class="row header-box">
			<tiles:insertAttribute name="header" />
		</div>
		<div class="row body-box">
			<tiles:insertAttribute name="body" />
		</div>

		<div class="row footer-box">
			<tiles:insertAttribute name="footer" />
		</div>
	</div>

</body>




</html>
