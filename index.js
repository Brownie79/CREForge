//import statements
    const express = require('express');
    const app = express();

//port listener
app.listen(80, (err) => {
    if(err){console.log("Cannot listen on port 80: ", err);}
    else {console.log("Server started on port 80!");}
});


app.get("/building1", (request, response) => {
    //show HTML page owners
});

app.get("/building2", (request, response) => {
    //show HTML page owners
});

// buildings //hard coded to avoid login
app.get("/building3", (request, response) => {
    //show HTML page owners
});

app.get("/building4", (request, response) => {
    //show HTML page owners
});

app.get("/building5", (request, response) => {
    //show HTML page owners
});

app.get("/renter1", (request, response) => {

});

app.get("/renter1", (request, response) => {
    
});