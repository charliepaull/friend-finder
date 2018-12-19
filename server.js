// require express
var express = require("express");

// Sets up Express - BOILER PLATE 
// --------------------------------
var app = express(); //triggers express

// set up PORT - PORT# through Heroku or localhost
var PORT = process.env.PORT || 3000;

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// ROUTE REQUIRES
// Helps link the server to a our route files
// gives server a map of how to respond when users visit or request data from various URLs.

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// Starts the server to begin listening
// -------------------------------------

app.listen(PORT, function() {
    console.log("BIG DAWWG WE ARE LIIIIVEEEEE " + PORT);
});


/*server.js is completed. all other server/routes
code should be in routes.js*/