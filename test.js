const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello world');
});

module.exports = router;

router.get('/', (req, res) => {});

const hbs = require('hbs');

app.set('view engine', 'html');
app.engine('html', hbs.__express);
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

class Name {
  constructor() {}
}
