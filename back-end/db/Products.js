const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId:String,
    company:String,
    id:String
})
module.exports = mongoose.model("product", productSchema);