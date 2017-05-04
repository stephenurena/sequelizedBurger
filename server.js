//----------------------------------------------
//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
//----------------------------------------------

var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

//------updated for sequelize---------
// Requiring our models for syncing
var db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

//handlebars
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//---------------previous orm routes------------------------
// var routes = require("./controllers/burgers_controller");

// app.use("/", routes);
// app.use("/update", routes);
// app.use("/create", routes);
//----------------------------------------------------------

//------updated for sequelize---------
// Routes =============================================================
require("./routes/index-routes.js")(app);
require("./routes/burger-ctrl.js")(app);

//------updated for sequelize---------
// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
