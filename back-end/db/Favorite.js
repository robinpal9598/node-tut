const mongoose = require('mongoose');
const favoriteSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId:String,
    company:String,
    id:String
})
module.exports = mongoose.model("Favorite", favoriteSchema);