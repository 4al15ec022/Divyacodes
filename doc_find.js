var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost",function(err,db){
    var mydb=db.db("test");
    mydb.collection("restaurant",function(err,restaurant){
        restaurant.findOne({cuisine:"Sushi"},function(err,item){
            console.log("found one");
            console.log(item);
        });
    });
});