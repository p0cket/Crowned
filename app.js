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
  'page1' : {
    name : "Aaron Goldblatt",
    text : 'Hey, whats up?'
  }
}

var id = 0;
// I put in the bones of my node

app.post('/asking', function(req, res) {
  console.log(req.body);
  var displayName = req.body.questionName;
  var displayText = req.body.questionText;
  pages[id++] = {
    name : displayName,
    text : displayText
  }
  res.redirect('/page/' + id)
});

app.get("/page/:makeNewPage", function(req, res) {
  var thisPage = pages[req.params.makeNewPage];
  res.render('page', {
    displayName : thisPage.name,
    displayText : thisPage.text
  })
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
