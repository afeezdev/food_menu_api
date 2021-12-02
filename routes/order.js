const router = require('express').Router();
const db = require('../config/dbService');

router.get("/", (req, res) => {
  res.send("Welcome to Order page ")
  
});

router.post("/", async (req, res) => {
  let orderID
  const { food, email } = req.body;
  const foodDetails = await db('food_menu').where({'food': food})
  .then(foodInfo => {
    return foodInfo[0]
    }) 
    // console.log(foodDetails)
      db('food_order')
      .insert({
        food: food,
        price: foodDetails.price,
        buyer_email: email,
      }).then(response => {
        orderID = response[0]
          db('food_order').where('ID', orderID)
          .then( orderInfo => {
            res.send(orderInfo)
          })
      })
    
  })

module.exports = router