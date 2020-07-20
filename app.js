var express = require('express');
var app = express();

// Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname));

// Routes
app.use('/', require('./routes/admin'));
app.use('/basic', require('./routes/basic'));

// Port setting
var port = process.env.PORT || 3000;;

app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
