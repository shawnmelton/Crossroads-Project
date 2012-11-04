var app = require("express").createServer();
app.set("title", "Crossroads API");

// Add routes.
require("./controllers/users.js");

app.listen(8080);