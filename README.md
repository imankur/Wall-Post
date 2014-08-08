Wall-Post
=========

####Backbone Application

This is a SPA(Single Page Application) which retrieve records from mysql database and add new record.

####Technology Used:
HTML,    
CSS,  
Java Script,  
Jquery,  
Backbone,  
Underscore,  
PHP,  
Mysql  

####Database Schema :  
Table Name = wall

######Column:  
id    |  int(2) //primary key, auto  
name  |	varchar(20) 		
posts |	text
img_url| varchar(50)
like |int(2)


####Workflow :
After the page gets load in the browser, a new Collection(postCollection) object is created. This object retrieve data from database and assign it to cointainer view(wallView) object. This view object render each model using single view(postView) object. A JavaScript function setInterval() is used to refresh the state of collection in every second.

####Classes:  
postModel - Model Class  
postCollection - Collection Class  
postView - Single Post View  
wallView - Wall View (Container)  

####PHP Script :  
insert_action.php - For inserting new post  
get_data.php - For getting data from database inform of JSON object  










