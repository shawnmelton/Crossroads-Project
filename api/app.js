var app = require("express").createServer();
app.set("title", "CrossRoads API");

// Add routes.
require("./controllers/users.js");

app.listen(8080);