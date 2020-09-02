// Dependencies
var fs = require("fs");
var express = require("express");
var path = require("path");

// Express App
var app = express();
var PORT = 3000;

// Sets up the Express App
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });


// Server Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  