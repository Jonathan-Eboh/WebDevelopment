'use strict'

//getting the http module:
let http = require('http');

//This lets us utilize the fs module to read and write content for responses
let fs = require('fs');

//THIS LINE IS IMPORTANT
// This line lets us use the http module to create a server

let server = http.createServer(function (request, response){
//This allows us to see what URL the clients are requesting:

    console.log('client request URL:', request.url);

//OUR ROUTES GO HERE
//-------------------------------------------------------------------------------
    if(request.url === '/'){
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); //send data about response
            response.write(contents); //send response body
            response.end(); //finished!
        });
    }else if (request.url === "/ninjas") {
        fs.readFile('ninjas.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); //send data about response
            response.write(contents); //send response body
            response.end(); //finished!
        });
    }else if (request.url === "/dojos/new") {
        fs.readFile('dojos.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); //send data about response
            response.write(contents); //send response body
            response.end(); //finished!
        });
    }
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }

});

// => functionName() {
//
// }

//-------------------------------------------------------------------------------

//This line tells the server which port to run on
server.listen(6789);

//Print this to our terminal window

console.log("Running in localhost at port 6789");
