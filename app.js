var express = require('express');
var bodyParser = require('body-parser');

// Other settings
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(bodyParser.json({limit:5000000}));
app.use(bodyParser.urlencoded({limit:5000000, extended:true, parameterLimit: 5000000}));
// Routes
app.use('/setting', require('./routes/admin'));
app.use('/', require('./routes/basic'));
app.use('/api', require('./routes/api'));

// Port setting
var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
