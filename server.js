//dependencies
var express = require("express");
var expresshbs = require("express-handlebars");
var bodyParser = require("body-parser");

//setting port
var PORT = process.env.PORT || 3000;
//start express
var app = express();
var router = express.Router();
//connect routesjs
require("./config/routes")(router);
//public folder is static
app.use(express.static("public"));

//connect handlebars
app.engine("handlebars", expresshbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//connect body parser
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(router);

app.listen(PORT, function() {
  console.log("App running on port" + PORT);
});