// webServer.js
const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 3453;
let indexFile;
let cssFile;

const requestListener = function (req, res) {
    switch (req.url) 
    {
        case "/":
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(indexFile);
            break
        
        case "/index.css":
            res.setHeader("Content-Type", "text/css");
            res.writeHead(200);
            res.end(cssFile);
            break
    }
};

const server = http.createServer(requestListener);
fs.readFile("./frontend/index.html")
    .then(contents => {
        indexFile = contents;
        fs.readFile("./frontend/index.css")
            .then(contents => {
            cssFile = contents;
            server.listen(port, host, () => {
                console.log(`Server is running on http://${host}:${port}`);
            });
        })
        .catch(err => {
            console.error(`Could not read index.css file: ${err}`);
            process.exit(1);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });
