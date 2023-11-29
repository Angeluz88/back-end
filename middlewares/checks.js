const {check}= require('express-validator')

const checks = [
check('id')
.notEmpty().isNumeric().withMessage('el id es un campo obligatorio'),
check('model')
    .notEmpty().isString().withMessage('campo requerido o formato incorrecto'),
check('marca')
    .notEmpty().withMessage('campo requerido o formato incorrecto'),
check('price')
    .isNumeric().withMessage('campo requerido o formato incorrecto'),
check('cilindrada')
    .isString().withMessage('campo requerido o formato incorrecto')
]
module.exports = checks