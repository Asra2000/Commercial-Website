var mongoose = require('mongoose');

var bathSchema = new mongoose.Schema({
    image: 'String',
    price: 'String', 
    description: 'String'
});

var Bath = mongoose.model('Bath', bathSchema);
// var din = {image : 'img/bathroom/w3.jpg', price: '$120.0', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Bath.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });
// din = {image : 'img/bathroom/w1.jpg', price: '$100.5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Bath.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });
//  din = {image : 'img/bathroom/w2.jpg', price: '$70.5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Bath.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });
// din = {image : 'img/bathroom/w4.jpg', price: '$290.5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Bath.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });
// din = {image : 'img/bathroom/w5.jpg', price: '$200.5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Bath.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });
// din = {image : 'img/bathroom/w6.jpg', price: '$190.5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel perspiciatis nihil quis voluptatibus saepe sapiente voluptates laborum suscipit autem dignissimos iusto, commodi cupiditate perferendis eligendi! Non nesciunt excepturi eos suscipit.'}
// Bath.create(din, (err, newbed)=>{
//     if (err)
//     console.log('something went wrong');
//     else
//     console.log(newbed);
// });

module.exports = Bath;
