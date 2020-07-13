var mongoose = require('mongoose');

var dinSchema = new mongoose.Schema({
    image: 'String',
    price: 'String', 
    description: 'String'
});

var Din = mongoose.model('Din', dinSchema);
// var din = {image : 'img/dining/d2.jpg', price: '$200.0', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Din.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });
// din = {image : 'img/dining/d1.jpg', price: '$110.0', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Din.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });
//  din = {image : 'img/dining/d3.jpg', price: '$300.0', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Din.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });
// din = {image : 'img/dining/d4.jpg', price: '$190.0', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Din.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });
// din = {image : 'img/dining/d5.jpg', price: '$210.0', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Din.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });
// din = {image : 'img/dining/d6.jpg', price: '$150.0', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Din.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });


module.exports = Din;
