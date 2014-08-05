<?php 
	$link = mysql_connect("localhost","root","");
	if(!$link){
		die("No link".mysql_error());
	}
	
	$db=mysql_select_db("ankur1",$link);
	if(!$db){
		die("Fail.. " . mysql_error());
	}
?>
	
	