'use strict'

//CARS AND CATS


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
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); //send data about response
            response.write(contents); //send response body
            response.end(); //finished!
        });
    }else if (request.url === "/cars") {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); //send data about response
            response.write(contents); //send response body
            response.end(); //finished!
        });
    }else if (request.url === "/cats") {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); //send data about response
            response.write(contents); //send response body
            response.end(); //finished!
        });
    }else if (request.url === "/cars/new") {
        fs.readFile('views/cars2.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); //send data about response
            response.write(contents); //send response body
            response.end(); //finished!
        });
    }else if(request.url === '/stylesheets/styles.css'){ //----!changed this from style.css to styles.css!----
        fs.readFile('stylesheets/styles.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }else if(request.url === '/images/2016-sand-cat-group.jpg'){ //-------!REPLACE pizza.jpg WITH IMAGE NAME!
    // notice we won't include the utf8 encoding
        fs.readFile('images/2016-sand-cat-group.jpg', function(errors, contents){//-------!REPLACE pizza.jpg WITH IMAGE NAME!
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }else if(request.url === '/images/sports-car-146873_960_720.png') {
        // notice we won't include the utf8 encoding
        fs.readFile('images/sports-car-146873_960_720.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
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
server.listen(7077);

//Print this to our terminal window

console.log("Running in localhost at port 7077");
