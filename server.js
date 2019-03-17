/*
=============================
Initialize Packages
=============================
*/

// Express
var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

// Express Middleware
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*
=============================
Route Handlers
=============================
*/

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

/*
=============================
Start Server
=============================
*/

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});