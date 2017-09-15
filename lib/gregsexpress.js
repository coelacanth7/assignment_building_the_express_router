var http = require("http");
var router = require("./router");

var gregsExpress = function() {
	console.log("hey");
	app = {};

	app.listen = function() {
		http.createServer(router.handle);
	};

	app.get = function() {};
};

module.exports = gregsExpress;
