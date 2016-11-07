var http = require("http");

counter1 = 1;
counter2 = 1;

message1 = "";
message2 = "";

portNumber1 = 8888;
portNumber2 = 8889;

http.createServer(
	function(request, response) {
		message1 = "\r\n\r\nHi Bishoy, a new request was just received on " + portNumber1 + "!\r\nRequest number is: " + counter1 + message1;
		console.log(message1);
		counter1++;
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(message1);
		response.end();
	}
).listen(portNumber1);


http.createServer(
	function(request, response) {
		message2 = "\r\n\r\nHi Bishoy, a new request was just received on " + portNumber2 + "!\r\nRequest number is: " + counter2 + message2;
		console.log(message2);
		counter2++;
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(message2);
		response.end();
	}
).listen(portNumber2);