import("./webServer.js");
const WebSocket = require('ws');


const wss = new WebSocket.Server({port: 8880});

wss.on('connection', function connection(gamews) {
	gamews.on('message', function incoming(message) {
		console.log(message.toString());
        gamews.send("Hello!")
	});
});