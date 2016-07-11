var express = require('express'),
    app = express(),
    path = require('path');


app.set('port', process.env.PORT || 3000)

app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(app.get('port'), function () {
  console.log('Listening on port', app.get('port'));
});