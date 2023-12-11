const fs = require('fs');
const http = require('http');
const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const contactPage = fs.readFileSync('contact.html');
const notFoundPage = fs.readFileSync('notFound.html');

const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        res.end(aboutPage);
    }
    else if (req.url === "/" || req.url === "/home") {
        res.writeHead(200);
        res.end(homePage);
    }
    else if (req.url === "/contact") {
        res.end(contactPage)
    }
    else {
        res.writeHead(404);
        res.end(notFoundPage);
    }
});

server.listen(8000, () => {
    console.log("Server started on port 8000");
});