//imports
    const fs = require('fs');
    const MongoClient = require('mongodb').MongoClient 
    //const assert = require('assert');
    const url =  'mongodb://localhost:27017/creforge';
    const db = 0;

MongoClient.connect(url, (err, database) => {
    if(err) {
        console.log("Error connecting to database:", err);
    } else {
        db = database;
        console.log("Connected to server successfully!");
    }
}); //run at startime

module.exports = { 
    building : function(id, response){
        //fetch building data based on database
    },
    renter : function(id, response){
        //fetch building data based on database
    }
}

/*
    cost_over_lease_term = rental_rate * size * lease_term
    freebies = [rental_rate * size * free_rent] + tennant_budget
    ENR = (cost - freebies) / size
    ENR is actual cost per square footage 

 */