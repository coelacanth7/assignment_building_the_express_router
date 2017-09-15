//require gregs custom lib
var gregsExpress = require("./lib/gregsexpress");

//store app function
var app = gregsExpress();

app.get("/", (req, res) => {
	res.end("Oh shit, waddup");
});

var port = process.env.PORT || 3000;
var host = "localhost";

app.listen(port, host, () => {
	console.log(`Listening at: http://${host}:${port}`);
});
