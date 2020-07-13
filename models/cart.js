var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
    image: 'String',
    price: 'String', 
});

var Cart = mongoose.model('Cart', cartSchema);

module.exports  = Cart;
