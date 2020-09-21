//core modulos y servidro



const http = require("http"); //servidor

// el nombre entre llaves no es de la variable si no del nombre de la exportacion

var {
  info,
  error
} = require("./modules/my-log");
var utils = require("./utils/consts");
var firebase = require("../libs/firebase");
var {countries}  = require("countries-list");
var url = require("url");
var querystring = require("querystring");

var server = http.createServer(function (request, response) {
  var parset = url.parse(request.url);
  console.log("parse:", parset)

  var pathname = parset.pathname;

  var query = querystring.parse(parset.query);
  console.log("query",query)


  if (pathname === "/") {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.write('<html ><body><p>Hola pablo</p></body></html>');
    response.end()

  } else if (pathname === "/exit") {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.write('<html >   <body><p>hasta luego</p></body></html>');
    response.end()

  }else if (pathname === "/country") {
    response.writeHead(200, { 'Content-Type': "application/json"});
    response.write(JSON.stringify([query.code])); //ES EL VALOR PASADO EN LA URL
    response.end()

  }  else if (pathname === "/info") {
    var result = info(pathname)
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.write(result);
    response.end()

  } else if (pathname === "/error") {
    var result = error(pathname)
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.write(result);
    response.end()

  } else {
    response.writeHead(404, {
      'Content-Type': 'text/html'
    });
    response.write('<html >   <body><p>not found</p></body></html>');
    response.end()
  }
});



server.listen(4000)
console.log("running on port 4000")
