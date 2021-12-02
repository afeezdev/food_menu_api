const router = require('express').Router();
const db = require('../config/dbService');
const bcrypt = require('bcrypt-nodejs');

router.get("/", (req, res) => {
  res.send("Welcome to login page ")
  
});


// User SignIn
router.post("/", async (req, res) => {
  const { email, password } = req.body
  db.select('email', 'hash').from('login')
  .where('email', '=', email )
    .then(data => {
      const isValid = bcrypt.compareSync( password, data[0].hash)
      if (isValid) {
        db.select('*').from('users')
        .where('email', '=', email)
        .then(user => {
          res.json(user[0])
        })
        .catch(err => res.status(400).json('unable to ge user'))
      } else{
        res.status(400).json('Wrong Credentials')
      }
    }).catch(err => res.status(400).json('Wrong Credentials'))
  })
 


module.exports = router

module.exports = router