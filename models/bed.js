var mongoose = require('mongoose');

var bedSchema = new mongoose.Schema({
    image: 'String',
    price: 'String', 
    description: 'String'
});

var Bed = mongoose.model('Bed', bedSchema);
// var din = {image : 'img/bedroom/b1.jpg', price: '$250.0', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Bed.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });
// din = {image : 'img/bedroom/b2.jpg', price: '$100.5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Bed.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });
//  din = {image : 'img/bedroom/b3.jpg', price: '$70.5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Bed.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });
// din = {image : 'img/bedroom/b4.jpg', price: '$290.5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Bed.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });
// din = {image : 'img/bedroom/b5.jpg', price: '$200.5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Bed.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });
// din = {image : 'img/bedroom/b6.jpg', price: '$190.5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Bed.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });


module.exports = Bed;
