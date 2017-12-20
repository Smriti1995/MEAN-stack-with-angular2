var express =require('express');
var app =express();
var mongoose= require("mongoose");
const config =require('./config/database');
const path =require('path');

mongoose.promise=global.promise;
mongoose.connect(config.uri, (err)=>
	{
		if(err)
		{
			console.log('couldnt connect to databse',err);
		}
		else{
			console.log(config.secret);
			console.log("connected to database"+ config.db);
		}
	});

app.use(express.static(__dirname + 'client/dist'));
app.get('/',(req,res)=>
{
	res.sendFile(path.join(__dirname +'/client/dist/index.html'));
});

app.listen(4000,()=>
{
	console.log("listening to port 4000");
});