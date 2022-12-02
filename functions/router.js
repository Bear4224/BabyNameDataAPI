const router = require('express').Router();
const test = require('./routes/test');
  
router.get("/test", test);

module.exports = router;