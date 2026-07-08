const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    res.end( "hiii");
});
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, World!</h1>');
});

 server.listen(4200, () => {
    console.log('Server is running on http://localhost:4200');
}); 

