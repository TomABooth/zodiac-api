const { Router } = require('express');
const { horoscopes } = require('../horoscopes-data.js');

module.exports = Router().get('/:name', (req, res) => {
  let match;
  for (const scope of horoscopes) {
    if (scope.name === req.params.name) {
      match = scope;
    }
  }
  return res.json(match);
});
