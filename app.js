if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const stripeSecretKey  = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
 var express = require('express'),
        path = require('path'),
        mongoose = require('mongoose'),
         app = express(), 
         bodyParser = require('body-parser'), 
         stripe = require('stripe')(stripeSecretKey);;

mongoose.connect("mongodb://localhost/items", { useUnifiedTopology: true,useNewUrlParser: true});
var Beds = require('./models/bed');
var Din = require('./models/din');
var Bath = require('./models/bath');
var Items = require('./models/cart');
var price = 0.0;

const { log } = require('console');
const { runInNewContext } = require('vm');

app.set('view engine', 'ejs');
//setting middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/bedroom', (req, res)=>{
    Beds.find({}, (err, item)=>{
        if (err)
        console.log(err);
        else
        res.render('display', {items: item, index: 1});
    })
});

app.get('/dining', (req, res)=>{
    Din.find({}, (err, item)=>{
        if (err)
        console.log(err);
        else
        res.render('display', {items: item, index: 2});
    })
});

app.get('/bathroom', (req, res)=>{
    Bath.find({}, (err, item)=>{
        if (err)
        console.log(err);
        else
        res.render('display', {items: item, index: 3});
    })
});

app.get('/info/:no/:id', (req, res)=>{
    var no = req.params.no;
    if(no == '1'){
    Beds.findById(req.params.id, (err, found)=>{
        if (err)
        console.log(err);
        else
        res.render('information', {data: found});
        });
    }
    else if(no == '2'){
        Din.findById(req.params.id, (err, found)=>{
            if (err)
            console.log(err);
            else
            res.render('information', {data: found});
            });
        }
    else{
            Bath.findById(req.params.id, (err, found)=>{
                if (err)
                console.log(err);
                else
                res.render('information', {data: found});
                });
        }
});

app.get('/create/img/:folder/:image/:price', (req, res)=>{
    var image = 'img'+'/'+req.params.folder + "/"+req.params.image;
    var din = {image :image, price: req.params.price};
    Items.create(din, (err, newbed)=>{
        if (err)
        console.log('something went wrong');
        else{
        res.redirect('back');
        }
    });
})

app.get('/cart', (req, res)=>{
    Items.find({}, (err, item)=>{
        if (err)
        console.log(err);
        else{
        res.render('cart', {items: item ,stripePublicKey:stripePublicKey});
        }
    })
});

app.post('/delete/:id', (req, res)=>{
    Items.findByIdAndDelete(req.params.id, (err, item)=>{
        if(err)
        console.log(err);
        else
        {
            res.redirect('back');
        }
        
    });
});
app.post('/delete_all', (req, res)=>{
    Items.remove({}, (err)=>{
        if (err)
        console.log(err);
        else{
            price = 0.0;
        res.redirect('back');
        }
    });
});

app.post('/charge/:price', (req, res)=>{
        var amount = req.params.price;
     console.log(req.body);
     stripe.customers.create({
         email: req.body.stripeEmail,
         source: req.body.stripeToken,
     })
    //  .then(customer => stripe.charges.create({
    //      amount,
    //      customer: customer.id,
    //      currency : 'usd'
    //  }))
    //  .then(charge => res.render('index'));
    res.send('thanks for the purchase');
});

app.listen(process.env.PORT||5000, process.env.IP, ()=>{
    console.log('running');
});