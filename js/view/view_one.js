var postView= Backbone.View.extend({
	tagName:'tr',
	className:'single_post',
	template: _.template($('#list_template').html()),
	template2:_.template($('#edit_template').html()),

	events:{
	'click .del_but':'del_post',
	'click .edit_but':'edit_post',
	'click .cancel_update_but':'edit_cancel',
	'click .update_but':'edit_save',
	'click .like_but':'like_save'
	},
	render:function(){
		this.$el.css({'border-bottom': '5px solid rgba(240, 242, 255, 0.65)'});
		this.$el.attr("height","100px").html(this.template(this.model.toJSON()));
		console.log(this.model.get('id'));
		return this;
	},
	like_save:function(){
		var count=this.model.get('like');
		count++;
		this.model.set('like',count);
		this.model.save();
		this.render();
	},
	del_post:function(){
		var self =this;
		$( "#dialog" ).dialog({
			resizable: false,
			autoOpen: false,
			height:200,
			width:400,
			modal: true,
			buttons: {
				"Delete": function() {
					$( this ).dialog( "close" );
					var vc=self.model.destroy({
						success:function(mod,res){
							console.log("sucess",res,mod);
						},
						error:function(res){
							console.log("failed");
						}
					});
					self.remove();			
				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			}
		});
	},
	edit_post:function(){
		if($('body').find('.edit_post').length>0){
			alert("Frist Update/Cancel Other Record");
			return false;
		};
		this.$el.attr("class","edit_post").html(this.template2(this.model.toJSON()));
	},
	edit_cancel:function(){
		this.$el.attr('class','single_post');
		this.render();
	},
	edit_save:function(){
		var status1=$('#edit_status').val();
		this.model.set('posts',status1);
		this.$el.attr('class','single_post');
		this.render();
		this.model.save();
	}
});

var wallView= Backbone.View.extend({
	el:'#container',
	state:{
		currentPage:0,
		limit:5,
		total:0,
		totalPage:0
	},
	events:{
		'click #post_add':'add_post',
		'click #page_next':'next_page',
		'click #page_prev':'prev_page',
	},
	template: _.template($('#list_template').html()),
	initialize : function(){
		this.state.total=this.collection.models.length;
		this.state.totalPage=Math.ceil(this.state.total/this.state.limit);
		this.collection.on('add', this.update, this);
		this.collection.on('reset', this.update, this);
		this.setButtons();
		this.render();
	},
	update:function(){
		this.$el.find("tbody").html(" ");
		this.render();
	},
	render:function(){
		$('#page_div').css('display','grid');
		var collection1= this.getcollection();
		_.each(collection1,function(item){
			var xyz= new postView({model:item});
			this.$el.find("table").append(xyz.render().el);
		},this);
	},
	add_post:function(){
		var tempModel=new postModel();
		var name1=$('#name').val();
		var status1=$('#status').val();
		if(status1==""){
			alert("Please fill details corectly");
			return false;
		}
		tempModel.save({id:'',name:'',posts:status1});
	},
	getcollection:function(){
		var start =this.state.currentPage*this.state.limit;
		var end=start+this.state.limit;
		return(this.collection.slice(start,end));
	},
	next_page:function(){
		this.state.currentPage++;
		this.$el.find('table').html("");
		this.render();
		this.setButtons();
	},
	prev_page:function(){
		this.state.currentPage--;
		this.$el.find('table').html("");
		this.render();
		this.setButtons();
	},
	setButtons:function(){
	if(this.state.currentPage==0){
		$('#page_prev').prop('disabled',true).css('color','rgb(226, 226, 226)');
	}else{
		$('#page_prev').prop('disabled',false).css('color','darkseagreen');;
	}
	var x=this.state.currentPage+1;console.log("x",x);
	var y= this.state.totalPage;console.log("y",y);
	if(x == y){
		$('#page_next').prop('disabled',true).css('color','rgb(226, 226, 226)');
	}else{
		$('#page_next').prop('disabled',false).css('color','darkseagreen');;
	}
	}
	
	
	
});



