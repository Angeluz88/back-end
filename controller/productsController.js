const { Product } = require("../models/products");


const productsControllers = {
  myIndex(req, res) {
    res.render("index", { title: "Express" });
  },

  getProducts: async (req, res) => {
    const products = await Product.find();
    res.json({products})
  },

  postProduct: async (req, res) => {
   const product = new Product(req.body);
   await product.save();
   res.status(201).json(product);
    
  },
  
async putProducts(req, res){
 const newProduct = await Product.findByIdAndUpdate(req.id, req.body);
  res.status(201).json(newProduct);
 
},

async deleteProduct(req, res){
  await Product.findOneAndDelete(req.query);
  res.status(201).json({
    msg: "el producto" + req.query + "se elimino satisfactoriamente"
  });
  
},
  
};

module.exports = productsControllers;
