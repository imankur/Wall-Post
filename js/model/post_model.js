var postModel = Backbone.Model.extend({
	url:"api/insert_action.php",
	defaults:{
		ID:'',
		name:'Nil',
		posts:'not specified'
	},
});
var mmodel=new postModel();