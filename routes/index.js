const router = require('express').Router();

router.get("/", (req, res) => {
  res.send("Welcome to Food Menu App ")
  
});

module.exports = router