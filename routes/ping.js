const router = require('express').Router()

router.route('/').get((req, res) =>{
  res.json("pong")
})



module.exports = router
