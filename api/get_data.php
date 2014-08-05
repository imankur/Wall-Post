<?php  
	require '../configs/DB_connection.php';
	if($_SERVER['REQUEST_METHOD']=='GET'){
		$sql="SELECT * FROM wall";
		$result=mysql_query($sql,$link);
		while($row=mysql_fetch_assoc($result)){
			$temp[]=$row;
		}
	}
	echo json_encode($temp);
?>