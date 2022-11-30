const { byName, byYear } = require('us-baby-names');

const test = (req, res) => {
  res.status(200).json({
    success: true,
    data: 'hlaef'
  })
}

module.exports = test;
