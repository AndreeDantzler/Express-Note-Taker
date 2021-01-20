

//dependencies

const express = require("express");
const fs = require("fs");

//tell node we are creating an express server

const app = express();

//set initial port

const PORT = 3000;

app.use(express.static('public'))

//set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//points to a series of routes files

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



//listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});