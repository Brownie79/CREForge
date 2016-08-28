//import statements
    //app tie ins
    const express = require('express');
    const app = express();
    const url = require('url');

    //scripts
    const htmlhandler = require('')
//port listener
app.listen(80, (err) => {
    if(err){console.log("Cannot listen on port 80: ", err);}
    else {
        console.log("Server started on port 80!");
    }
});


app.get("/building", (request, response) => {
    let querydata = url.parse(request.url, true); //the true makes it into an object
    htmlhandler.building(querydata.id, response);
});

app.get("/renter", (request, response) => {
    let querydata = url.parse(request.url);
    htmlhandler.building = url.parse(request.url, true);
    htmlhandler.renter(querydata.id, response);
});
