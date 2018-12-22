// require path to get correct file paths for HTML
var path = require("path");

// ROUTING
// --------------

module.exports = function(app){
    /*HTML GET REQUESTS (getting the data from .html pages)
    and displaying them to the browser*/
    // code invoked when user visits a specific URL page

    // get request that routes to the homepage
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}