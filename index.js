const express = require('express');
const path = require('path');
const app = express();
const nunjucks = require('nunjucks');
const selectorsExamplesRenderer = require('./lib/selectors-examples-renderer');
const markdownEngine = require('./lib/markdown-renderer');

// Define port to run server on
var port = process.env.PORT || 3000 ;

app.use(express.static('public'));

app.get('/css/selectors/examples/*', selectorsExamplesRenderer);

app.get('*', markdownEngine);

app.listen( port ) ;
console.log('Listening on port %s...', port) ;