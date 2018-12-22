// require path to get correct file paths for HTML
var path = require("path");

// require friends.js file to allow apiRoutes to use
var friends = require("../data/friends");

// ROUTING
// --------------

module.exports = function(app){

    /* GET request that routes to the homepage, 
    will show when user clicks on "API Friends" button on home.html*/
    app.get("/api/friends", function(req, res){
        // functionality to GET data from server
        res.json(friends);
    });

    /* POST request adds user inputted data to friendData array
    in friends.js file*/
    app.post("/api/friends", function(req, res){
        // functionality to POST data to server
        friends.push(req.body);
        res.json(true);

    // POST REQUEST IS WORKING 
    });
}