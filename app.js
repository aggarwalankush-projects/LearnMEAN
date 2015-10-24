var express = require('express');
var app = express();
var handleRoutes=require('./routes/handleRoutes');
var port = 3000;

app.set('view engine', 'jade');
app.use('/assets/js', express.static('./public/javascripts'));

handleRoutes(app);

app.listen(port);
