// webServer.js
const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 3453;
let indexFile;
let cssFile;
let jsFile;

const requestListener = function (req, res) {
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'self' ws://localhost:8880 https://fonts.googleapis.com https://fonts.gstatic.com; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; script-src 'self' 'unsafe-inline';style-src 'self' 'sha256-AGnLo57nJXVwu7cQjG0JBh8b2pnaL7rKjC/cEFeVIus=' https://fonts.googleapis.com;"
    );
    fs.readFile("./frontend/index.html")
    .then(contents => {
         indexFile = contents;
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });
    fs.readFile("./frontend/index.js")
    .then(contents => {
         jsFile = contents;
    })
    .catch(err => {
        console.error(`Could not read index.js file: ${err}`);
        process.exit(1);
    });
    fs.readFile("./frontend/index.css")
    .then(contents => {
        cssFile = contents;
    })
    .catch(err => {
        console.error(`Could not read index.css file: ${err}`);
        process.exit(1);
    });
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
        case "/index.js":
            res.setHeader("Content-Type", "text/js");
            res.writeHead(200);
            res.end(jsFile);
            break
    }
};

const server = http.createServer(requestListener);
// fs.readFile("./frontend/index.html")
//     .then(contents => {
//         indexFile = contents;
//         fs.readFile("./frontend/index.css")
//             .then(contents => {
//             cssFile = contents;
//             fs.readFile("./frontend/index.js")
//                 .then(contents => {
//                 jsFile = contents;
//                 server.listen(port, host, () => {
//                 console.log(`Server is running on http://${host}:${port}`);
//                 });
            
//             })
//             .catch(err => {
//                 console.error(`Could not read index.js file: ${err}`);
//                 process.exit(1);
//             });
//         })
//         .catch(err => {
//             console.error(`Could not read index.css file: ${err}`);
//             process.exit(1);
//         });
//     })
//     .catch(err => {
//         console.error(`Could not read index.html file: ${err}`);
//         process.exit(1);
// });

server.listen(port, host, () => {
console.log(`Server is running on http://${host}:${port}`);
});
