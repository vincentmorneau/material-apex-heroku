const
  express = require('express'),
  proxy = require('http-proxy-middleware');

var app = express();

app.get('/', function(req, res, next){
  res.redirect('/pls/apex/f?p=12192:1');
});

app.use('**', proxy(
  {
    target: 'https://apex.oracle.com',
    changeOrigin: true
  }
));

app.listen(process.env.PORT || 3000);
