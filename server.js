var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
var path = require('path');
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extened : true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
   var img_array = ["1","2"];

   // use the response object's .send() method to respond with an h1

//    response.send("<h1>Hello Express</h1>");
    response.render('cars', {items: img_array});
})

app.get('/:id', function(request, response) {
    // just for fun, take a look at the request and response objects
    var id = request.params.id;
    console.log(id);
    var List = [
        {id:1, name: "Ford", detail: ["Shelby Mustang","nice one"]},
        {id:2, name: "Chev", detail: "Camero SS"}
    ]
    for(var item in List) {
        if(List[item].id == id){
            var obj = List[item];
        }
    }
   console.log(obj);
//    response.send("<h1>Hello Express</h1>");
    response.render('detail', {img : obj});
})




// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})