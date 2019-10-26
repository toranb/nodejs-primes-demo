var request = require('request');
var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 8080;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.send('<html><head></head><body><h1>NodeJS</h1> <form action="/calculate" autocapitalize="off" autocomplete="off" autocorrect="off" method="post"> <p> <input id="number" name="number" placeholder="number" type="text"> </p> <p> <button type="submit">Calculate</button> </p> </form> </body></html>');
});

  app.post('/calculate', function(req, res) {
    var number = null;

    try {
      number = parseInt(req.body.number, 10);
    } catch(e) {
      console.log('error: invalid number value');
    }

    if (!number) {
      res.status(400);
      return res.send('<h1>error: invalid number</h1>');
    }

    calculate(number);

    return res.send('<h1>Done</h1>');
  });

app.listen(port, function(){
  console.log('server running');
})

function calculate(limit) {
  for(let number = 2; number <= limit; number++) {
    let isPrime = true;
    for(let factor = 2; factor < number; factor++) {
      if(number % factor == 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) {
      console.log(number);
    }
  }
}
