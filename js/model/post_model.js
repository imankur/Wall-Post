var postModel = Backbone.Model.extend({
	urlRoot:"api/insert_action.php",
	defaults:{
		id:'',
		name:'Nil',
		posts:'not specified',
		img_url:''
	},
});
var mmodel=new postModel();