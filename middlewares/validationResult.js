const { validationResult} = require('express-validator')

const checksValidation = (req, res, next)=>{
    const err = validationResult(req)
    if (err.isEmpty()) {
        next()
    } else {
        res.status(400).json(err)
    }
}
module.exports = {checksValidation}