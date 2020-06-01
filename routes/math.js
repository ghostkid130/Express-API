const router = require('express').Router()

let count = 0;
router.route('/count').put((req, res) =>{
  count++
  res.json({message: `This route has been hit ${count} times.`})
})

router.route('/count').delete((req, res) =>{
    count = 0; 
    res.json({message: `The count has been reset.`})
})

router.route('/sum').post((req, res) => { 
    res.json({body: `The sum of ${req.query.number} + 7 is ${Number(req.query.number) + 7}`})
})

router.route('/subtract').post((req, res) => { 
    res.json({body: `${req.query.number} minus 7 is ${Number(req.query.number) - 7}`})
})



module.exports = router
