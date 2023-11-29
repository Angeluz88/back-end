const express = require('express');
const router = express.Router();
const productsControllers = require(`../controller/productsController`);
const {validarModelo} = require('../middlewares/validarModelo')
const checks = require('../middlewares/checks')
const {checksValidation} = require('../middlewares/validationResult')


router.get('/', productsControllers.getProducts)
router.post('/agregarProducto', checks, checksValidation, productsControllers.postProduct)
router.put('/editProduct/:id', checks, checksValidation, productsControllers.putProducts)
router.delete('/deleteProduct?model', validarModelo, productsControllers.deleteProduct)

module.exports = router;
