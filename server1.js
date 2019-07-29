var MongoClient=require('mongodb').MongoClient;
var dispProd=function(name){
MongoClient.connect("mongodb://localhost",function(err,db) {
var myDB=db.db("test");
myDB.collection("product",function(err,product){
    product.findOne({pname:name},function(err,item){
        console.log("Record found");
        console.log(item);
    
    });
});
});
}
module.exports=dispProd;

//server.js



const util=require('./doc_find.js');
const express=require('express')
const app=express()
const port=3000
app.get('/',(req,res)=> {res.send('Hello World'),
util(req.query.pname)
})


app.listen(port,()=>console.log('Example app listening on port no'+port))