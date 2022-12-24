const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8000;
const app = express();
const route = require('./route');

app.use(bodyParser.json());
app.use(cors());
app.use('/', route);

app.listen(port, () => {
    console.log(`express app listening on http://localhost:${port}`)
})