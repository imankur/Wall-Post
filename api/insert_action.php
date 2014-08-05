<?php
	require '../configs/DB_connection.php';
	if($_SERVER['REQUEST_METHOD']=='POST'||$_SERVER['REQUEST_METHOD']=='PUT'){
		$req= json_decode(file_get_contents('php://input'));
		$a=$req->{'name'};
		$b=$req->{'posts'};
		var_dump($req);
		$sql="INSERT INTO wall (id, name, posts) VALUES (NULL, '".$a."', '".$b."');";
		$result=mysql_query($sql,$link) or die("Error".mysql_error());
	}
	else if($_SERVER['REQUEST_METHOD']=='DELETE'){
		$url=explode("/",$_SERVER['PATH_INFO'])[1];
		$sql="DELETE FROM  wall WHERE id=".$url;
		$result=mysql_query($sql,$link) or die("Error".mysql_error());
	}
?>