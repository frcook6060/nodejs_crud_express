const express = require('express');

const app = express();

const port = 8080;

app.get('/', (req, res) => res.send('Hello, World!'));

app.listen(port, () => console.log('Example application listening on port http://localhost:'+port+' !'));
