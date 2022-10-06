const express = require("express");

// Creating app
const app = express();

// GET request for single file
app.get("/", function (req, res) {
  res.download("POSTMAN.pdf", function (err) {
    if (err) {
      console.log(err);
    }
  });
});

// Creating server at port 3000
app.listen(process.env.PORT || 3000, function (req, res) {
  console.log("Server started to listen at 3000");
});
