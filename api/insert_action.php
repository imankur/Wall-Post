<?php
	require '../configs/DB_connection.php';
	$req= json_decode(file_get_contents('php://input'));
	$a=$req->{'name'};
	$b=$req->{'posts'};
	$sql="INSERT INTO wall (ID, name, posts) VALUES (NULL, '".$a."', '".$b."');";
	$result=mysql_query($sql,$link) or die("Error".mysql_error());
?>