const router = require('express').Router();
const db = require('../config/dbService');

router.get("/", (req, res) => {
  res.send("Welcome to Food Menu Page page ")
  
});

// getAll
// getByLocation

router.post("/", async (req, res) => {
  const { location } = req.body;
  const foodMenuList = await db.select().table('food_menu')  
  .then(foodList => {
    return foodList
    }) 
    // console.log(foodMenuList)
    const filteredFood = foodMenuList.filter(food => {
      return food.vendor_location.toLowerCase().includes(location.toLowerCase());
    })
    
    console.log(filteredFood)
  })

module.exports = router