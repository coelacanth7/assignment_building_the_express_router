const http = require("http");
const url = require("url");
//const router = require("./router");

var gregsExpress = function() {
	var app = {};

	app.methods = ["get", "post"];

	app.routes = {};

	app.listen = function(port, host, callback) {
		var server = http.createServer(app.handle);
		server.listen(port, host, callback);
	};

	app.methods.forEach(method => {
		app.routes[method] = {};
		app[method] = (path, callback) => {
			app.routes[method][path] = callback;
		};
	});

	app.handle = (req, res) => {
		var method = req.method.toLowerCase();
		var path = url.parse(req.url).pathname;

		if (app.routes[method][path]) {
			var p = new Promise(resolve => {
				if (method !== "get") {
					_extractPostData(req, resolve);
				} else {
					resolve();
				}
			});

			p.then(function() {
				app.routes[method][path](req, res);
			});
		} else {
			res.statusCode = 404;
			res.end("404 not found");
		}
		p.catch(error => {
			console.error(error);
		});
	};

	function _extractPostData(req, done) {
		var body = "";
		req.on("data", data => {
			body += data;
		});
		req.on("end", () => {
			req.body = body;
			done();
		});
	}

	return app;
};

module.exports = gregsExpress;
