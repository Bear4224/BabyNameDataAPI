const test = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Hlaef'
  })
}

module.exports = test;
