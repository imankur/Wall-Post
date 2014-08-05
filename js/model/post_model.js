var postModel = Backbone.Model.extend({
	urlRoot:"api/insert_action.php",
	defaults:{
		id:'',
		name:'Nil',
		posts:'not specified'
	},
});
var mmodel=new postModel();