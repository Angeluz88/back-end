const mongoose = require(`mongoose`);


const Schema = mongoose.Schema;
const storeSchema = new Schema ({
    id:{
        type: Number,
        required: true,
        unique: true,
    },
    model:{
        type: String,
     required: true,
     unique:true
    },

    marca:{
        type: String,
        required: true,
    },

    tipo:{
        type: String,
        required: false
    },

    price:{
        type: Number,
        require: true
    },

    cilindrada:{
        type: String,
        required: true
    }

})

const Product = mongoose.model(`Product`, storeSchema)
module.exports = {Product};