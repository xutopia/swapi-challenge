require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());


app.use(express.static(path.join(__dirname, '/../dist')));

app.get('/', function (req, res) {
  res.status(200).send('ok');
});

const port = process.env.APP_PORT || 8000;

module.exports = app.listen(port, function() {
  console.log('Listening on port ', port);
});
