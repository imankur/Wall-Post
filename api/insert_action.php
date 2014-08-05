 <?php 
	require '../configs/DB_connection.php';
	echo $_SERVER['REQUEST_METHOD'];
	if($_SERVER['REQUEST_METHOD']=='POST'||$_SERVER['REQUEST_METHOD']=='PUT'){
		$req= json_decode(file_get_contents('php://input'));
		$a=$req->{'name'};
		$b=$req->{'posts'};
		var_dump(file_get_contents('php://input'));
		echo $a.$b;
		$sql="INSERT INTO wall (id, name, posts) VALUES (NULL, '".$a."', '".$b."');";
		$result=mysql_query($sql,$link) or die("Error".mysql_error());
	}
	else if($_SERVER['REQUEST_METHOD']=='DELETE'){
		$sql="DELETE FROM  wall WHERE id=".$_GET['id'];
		$result=mysql_query($sql,$link) or die("Error".mysql_error());
	}
?>