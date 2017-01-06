var express = require('express'),  
    app = express();  
  
app.use(express.static(__dirname + '/publie'));  
  
app.listen("8080");