var express 		= require('express');
var bodyParser  = require('body-parser');
var ejs         = require('ejs');
var http			  = require('http');
var app         = express()
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('view options', {layout: false});
// why I then do this again? We'll find out
app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.set('view options', {layout: false});


app.get('/', function (req, res) {
  res.render('index')
})


var pages = {
  'page0' : {
    name : "Aaron Goldblatt",
    text : 'Hey, whats up?',
    responderName : "Elon Musk",
    responderText : "Not much, glad to be here"
  }
}

var id = 1;

//when '/asking' is triggered
app.post('/asking', function(req, res) {
  console.log(req.body);
  //take the contents submitted
  var displayName = req.body.questionName;
  var displayText = req.body.questionText;
  //assign the contents to an object, a page object
  pages[id] = {
    name : displayName,
    text : displayText
  }
  //then send them to that page
  res.redirect('/page/' + id)
  //change the unique page ID (Here by adding one)
  id++
});

app.post('/responding', function(req, res) {
  console.log(req.body);
  //take the contents submitted
  var responseName = req.body.responderName;
  var responseText = req.body.responderText;
  //assign the contents to an object, a page object
  pages[id] = {
    rname : responseName,
    rtext : responseText
  }
  //then send them to the same page
  res.redirect('/page/' + id)
  //and we do not change the unique page ID
});

//randomvar is in the URL bar
app.get("/page/:randomvar", function(req, res) {
  var pageNum = req.params.randomvar;
  //so now pageNum becomes the number of the page
  var thisPage = pages[pageNum];
  //thisPage is the object from that number, lets access it
  //When its called on, lets render it with the name and text contents
  res.render('page', {
    displayName : thisPage.name,
    displayText : thisPage.text,
    responseName : thisPage.rname,
    responseText : thisPage.rtext
  })
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
