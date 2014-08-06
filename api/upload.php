<?php
	var_dump($_FILES);
	move_uploaded_file($_FILES["myfile"]["tmp_name"],'image\\'.$_FILES["myfile"]["name"]);
	
	
?>