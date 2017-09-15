//require gregs custom lib
var gregsExpress = require("./lib/gregsexpress");
var http = require("http");

//store app function
var app = gregsExpress();

var port = process.env.PORT || 3000;
var host = "localhost";

app.listen(port, host, () => {
  console.log(`Listening at: http://${host}:${port}`);
});
