/*const fs = require('fs');

fs.writeFile('./texto.txt', 'linea uno', function(err){
    if (err){
        console.log(err);
    }
    console.log('Archivo creado');
});

console.log('ultima linea de codigo');

fs.readFile('./texto.txt', function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
*/
/*const http = require('http');
//const { Console } = require('node:console');

const colors = require('colors');

const handleServer = function(req, res){
    res.writeHead(200, { 'Content-type': 'text/html' });   
    res.write('<h1>Se da comienzo a la funa de matias munoz</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on port 3000'.rainbow);
});*/

const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function(req, res){
    res.send('<h1> Hola Matias </h1>');
    res.end();
});

server.listen(3000, function(){
    console.log('server on port 3000'.blue)
})