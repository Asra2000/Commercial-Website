const { default: Stripe } = require("stripe");
Stripe.setPublishableKey(stripePublicKey);

var submit = document.getElementById('submit');
var form = document.getElementById('checkout-form');
console.log(submit);

submit.addEventListener('click',function(){
    submit.disabled =true;
    Stripe.card.createToken({
        number : form.element["card-number"].value,
        cvv: form.element["cvv"].value,
        exp_month : form.element["card-expiry-month"].value,
        exp_year: form.element["card-expiry-year"].value,
    }, StripeResponseHandler);
    return false;
})

