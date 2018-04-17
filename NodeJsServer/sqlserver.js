//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var sql = require("msnodesqlv8");
var app = express(); 

// Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 }); 
 //const connectionString = "server=192.168.243.2;Database=Northwind;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
 const connectionString = "server=IND-ARLIDW70076\SQLEXPRESS;Database=Northwind;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}" 
//Function to connect to database and execute query
var  executeQuery = function(res, query){             
    sql.query(connectionString, query, (err, rows) => {
        res.send(rows);
    });
    //  sql.connect(dbConfig, function (err) {
    //      if (err) {   
    //                  console.log("Error while connecting database :- " + err);
    //                  res.send(err);
    //               }
    //               else {
    //                      // create Request object
    //                      var request = new sql.Request();
    //                      // query to the database
    //                      request.query(query, function (err, res) {
    //                        if (err) {
    //                                   console.log("Error while querying database :- " + err);
    //                                   res.send(err);
    //                                  }
    //                                  else {
    //                                    res.send(res);
    //                                         }
    //                            });
    //                    }
    //   });           
}

//GET API
app.get("/api/Employees", function(req , res){
                var query = "select Top 2 FirstName from [Employees]";
                executeQuery (res, query);
});

//POST API
 app.post("/api/Employees", function(req , res){
                var query = "INSERT INTO [Employees] (Name,Email,Password) VALUES (req.body.Name,req.body.Email,req.body.Password);"
                executeQuery (res, query);
});

//PUT API
 app.put("/api/Employees/:id", function(req , res){
                var query = "UPDATE [Employees] SET Name= " + req.body.Name  +  " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
                executeQuery (res, query);
});

// DELETE API
 app.delete("/api/Employees /:id", function(req , res){
                var query = "DELETE FROM [Employees] WHERE Id=" + req.params.id;
                executeQuery (res, query);
});