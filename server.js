var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var login = require('./routerApi');
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/',login);
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','index.html'));
});

app.listen(port, function() {
	console.log("Server Started at port 3000");
});