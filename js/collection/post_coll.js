var postCollection = Backbone.Collection.extend({
	model:postModel,
	url:"api/get_data.php",
	initialize: function(){
        this.fetch({
			'reset': true,
            success: this.fetchSuccess,
            error: this.fetchError
        });
    },
    fetchSuccess: function (response) {
		new  wallView({collection:response});
    },
    fetchError: function (collection, response) {
		console.log(response);
		new  wallView({collection:collection});
    }
});
var hh= new postCollection();
setInterval(function() {
	hh.fetch();
	console.log("ankur");
}, 1000);