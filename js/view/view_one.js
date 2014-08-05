var postView= Backbone.View.extend({
	// sedj kj skfjd l k
	tagName:'tr',
	className:'single_post',
	template: _.template($('#list_template').html()),
	events:{
	'click #del_but':'del_post'
	},
	render:function(){
		this.$el.attr("height","100px").html(this.template(this.model.toJSON()));
		console.log(this.model.get('id'));
		return this;
	},
	del_post:function(){
		this.model.url=this.model.url+"?id="+this.model.id;
		console.log(this.model.url);
		this.model.destroy({
		success:function(mod,res){
			console.log("sucess",res,mod);
		},
		error:function(res){
			console.log("failed");
		}
		});
		this.remove();
	}
});

var wallView= Backbone.View.extend({
	el:'#container',
	events:{
		'click #post_add':'add_post'
	},
	template: _.template($('#list_template').html()),
	initialize : function(){
		console.log("initializing view");
		this.collection.on('add', this.update, this);
		this.collection.on('reset', this.update, this);
		this.render();
	},
	update:function(){
		this.$el.find("tbody").html(" ");
		this.render();
	},
	render:function(){
	this.collection.each(function(item){
			var xyz= new postView({model:item});
			this.$el.find("table").append(xyz.render().el);
		},this);
	},
	add_post:function(){
		var tempModel=new postModel();
		var name1=$('#name').val();
		var status1=$('#status').val();
		if(name1==""||status1==""){
			alert("Please fill details corectly");
			return false;
		}
		tempModel.save({ID:'',name:name1,posts:status1});
	}
	
});

