const express = require('express');
const router = express.Router();
const productsControllers = require(`../controller/productsController`);


/* GET home page. */
router.get('/', productsControllers.myIndex);

module.exports = router;
