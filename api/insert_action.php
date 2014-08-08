<?php
	require '../configs/DB_connection.php';
	if($_SERVER['REQUEST_METHOD']=='POST'){
		move_uploaded_file($_FILES["myfile"]["tmp_name"],'image\\'.$_FILES["myfile"]["name"]);	
		$sql="INSERT INTO wall (id, name, posts,img_url,`like`) VALUES (NULL, 'Ankur', '".$_POST['statuss']."','api/image/".$_FILES["myfile"]["name"]."',NULL)";
		echo $sql;
		$result=mysql_query($sql,$link) or die("Error".mysql_error());
	}
	
	else if($_SERVER['REQUEST_METHOD']=='DELETE'){
		$url=explode("/",$_SERVER['PATH_INFO'])[1];
		$sql="DELETE FROM  wall WHERE id=".$url;
		$result=mysql_query($sql,$link) or die("Error".mysql_error());
	}
	else if($_SERVER['REQUEST_METHOD']=='PUT'){
		$req= json_decode(file_get_contents('php://input'));
		$b=$req->{'posts'};
		$a=$req->{'like'};
		$sql="UPDATE wall SET posts = '".$b."', `like` ='".$a."' WHERE id=".$req->{'id'};
		echo $sql;
		$result=mysql_query($sql,$link) or die("Error".mysql_error());
	}

?>