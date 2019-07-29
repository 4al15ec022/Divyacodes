var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost",function(err,db){
    var mydb = db.db("college");
mydb.collection("student",function(err,student){
 var m={name:"Ben"};
 var n={$set:{marks:99}};
 student.update(m,n,function(err,item){
     console.log(item);
 
//  student.find({"name":"Ben"},function(err,item){
//      console.log(item);
    });
 });
});