const { byName, byYear } = require('us-baby-names');

const nameSearch = (req, res) => {
  res.status(200).json({
    success: true,
    data: dataset
  })
}

module.exports = nameSearch;
