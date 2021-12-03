const router = require('express').Router();
const db = require('../config/dbService');

router.get("/", (req, res) => {
  res.send("Welcome to food menu page ")
  
});


router.post("/", async (req, res) => {
  let foodID
  const { food, price, email } = req.body;
  const vendor = await db('users').where({'email': email})
  .then(user => {
    return user[0]
    }) 
    if(vendor.type === 'vendor') {
      try {
        db('food_menu')
        .insert({
          food: food,
          price: price,
          vendor_email: email,
          vendor_location: vendor.location,
        }).then(response => {
          foodID = response[0]
            db('food_menu').where('ID', foodID)
            .then( foodInfo => {
              res.send(foodInfo)
            })
        })
      } catch (error) {
        res.status(400).json(`food's name already exist`)
      }
    } else {
      res.status(400).json('Only Vendor user can create food menu')
    }
  })

module.exports = router