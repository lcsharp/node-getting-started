var http = require("http");

var static = require("./static.js")

http.createServer(function webRequestHandler(request, response){
	console.log('Incoming request' + request.url);
	
	
	if(static.canHandleRequest(request)) {
		static.serveStaticAsset(request, response);
		return;
	}
	
	response.end("Hello World!");
}).listen(3000, "127.0.0.1", function(){
	console.log('Server "Boss" is listening on localhost port 3000');
});