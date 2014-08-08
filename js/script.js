$(document).ready(function(){	
	var uploadObj = $("#fileuploader").uploadFile({
	url:"api/insert_action.php",
	autoSubmit:false,
	fileName:"myfile",
	maxFileSize:1000000,
	allowedTypes:"jpg,png,gif",
	showDone:false,
	multiple:false,
	showStatusAfterSuccess:false
	});

	$('#post_add').click(function(){
		if($('#status').val()==''){
		alert("Plz fill status");
	}
	else{
		var status1={'status':$('#status').val()};
		uploadObj.update({
			dynamicFormData:function()
				{
					var data ={"statuss":$('#status').val()};
					return data;        
				}
		});
		uploadObj.startUpload();
	}});
	$("#container").on("click", ".del_but", function() {
		$("#dialog").dialog("open");
		console.log(this);
	});
	var mmodel=new postModel();
});