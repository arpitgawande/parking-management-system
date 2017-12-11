var express = require('express');
var app = express();
require('./app')(app);
app.listen(3000);