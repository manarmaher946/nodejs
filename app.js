var express = require('express');
var fs = require('fs');
const { TLSSocket } = require('tls');

var app = express();

app.get('/login', function (req, res) {
   res.writeHead(201, { 'content-type': "text/html" })
   var html = fs.readFileSync('login.html')
   res.write(html);
   const userName = req.query.username;
   const Email = req.query.email;
   const Password = req.query.pass;
   const w = {
      'userName': userName,
      'Email': Email,
      'Password': Password
   };
   var json = JSON.stringify(w);
   fs.writeFile('data.json', json, (err) => {
      if (err) throw err;
      else {
         console.log("data added in JSON successfully in the info.text ")
      }
   });



});



app.get('/profile', function (req, res) {

   const Email = req.query.email;
   const Password = req.query.pass;
   fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
         console.log("File read failed:", err);
         return;
      }
      else {
         var t = JSON.parse(data);
         console.log("File data:   " + t.Email + " " + t.Password);
         console.log("login data:   " + Email + " " + Password);
         if (t.Email == Email && t.Password != Password) {
            res.writeHead(400, { 'content-type': "text/html" })
            res.write('<html><head></head><body><h1>Error 400<h1/><h3>You Entered Wrong Password</h3></body></html>')
         }
         else if (t.Email != Email && t.Password == Password) {
            res.writeHead(400, { 'content-type': "text/html" })
            res.write('<html><head></head><body><h1>Error 400<h1/><h3>You Entered Wrong Email</h3></body></html>')
         }
         else if (t.Email != Email && t.Password != Password) {
            res.writeHead(400, { 'content-type': "text/html" })
            res.write('<html><head></head><body><h1>Error 400<h1/><h3>you entered email does not exist please signup</h3></body></html>')
         }
         else {
            res.send('<html><head></head><body><h1>profile<h1/><h3>Hello: ' + t.userName + '</h3></body></html>');
         }
      }

   });

});



app.get('/signup', function (req, res) {
   res.writeHead(201, { 'content-type': "text/html" })
   var html = fs.readFileSync('signup.html')
   res.write(html);

});




app.listen(3000);
