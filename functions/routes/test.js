const test = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Test function is working!'
  });
}

module.exports = test;
