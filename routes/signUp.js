const router = require('express').Router();
const db = require('../config/dbService');
const bcrypt = require('bcrypt-nodejs');

router.get("/", (req, res) => {
  res.send("Welcome to SignUp page ")
  
});

// REGISTER As Vendor Or Buyer
router.post("/:type", async (req, res) => {
  let userID; 
  const { type } = req.params
  if(type === 'vendor' || type ==='buyer'){
    const { email, name, password, location } = req.body;
    const hash = bcrypt.hashSync(password);
    db.transaction(trx => {
      trx.insert({
        hash: hash,
        email: email  
      })  
      .into('login')
      .then(loginEmail => {
        return db('users')
        .insert({
          email:email,
          name: name,
          type: type,
          location,
          joined: new Date()
        }).then(response => {
          userID = response[0]
          db('users').where('userID', userID)
          .then( user => {
            res.send(user)
          })
        })  
      })
      .then(trx.commit) 
      .catch(trx.rollback)
    }) 
    .catch (error => {
      res.status(400).json("Unable to register")
    })
  } else{
    res.status(400).json("Invalid Url")
  }
  
  })
 


module.exports = router