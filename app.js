var express = require("express");
var app = express();


app.get("/", function(req, res) {

  var ua = req.headers['user-agent'];
  var host = req.headers['host'];
  var lang = req.headers['accept-language'];
  var ip = req.ip;
  console.log(ip);
  res.end();
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
})
