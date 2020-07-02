/* get libraries */
var http = require('http');
var through = require('through');

/* set vars */
var port = parseInt(process.argv[2]);

/* transform input to uppercase string */
var to_upper = function (buffer) {
	this.queue(buffer.toString().toUpperCase())
}

/* create the server and serve the response */
var server = http.createServer(function (request, response) {
	if (request.method === 'POST')
	{
		request.pipe(through(to_upper)).pipe(response);
	}
	else
	{
		response.end('Send me a POST!\n');
	}
});
server.listen(port);
