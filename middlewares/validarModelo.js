const {Product} = require('../models/products')

const validarModelo = async (req, res, next) =>{
    try{
        const search = await Product.findOne(req.query)
        if (search !== null) {
            next()
        } else {
            res.status(400).json({
                msg:"el model ingresado"+ req.query + "no existe"
            })
            
        }
    }catch (err) {
            res.status(400).json(error)
        }
}
module.exports = {validarModelo}