// Dependencies
var express = require("express");
var PORT = process.env.PORT || 8080;
var path = require("path");
var bodyParser = require("body-parser");

var app = express();


app.use(express.static(path.join(__dirname,"public")));
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

