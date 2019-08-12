const express = require('express'),
router = express.Router(),
BigCommerce = require('node-bigcommerce');

const bigCommerce = new BigCommerce({
clientId: 'h532orj0rkyptym302pj93o36b6hf2r',
secret: 'oo3ab0c33jlaoy5zzj3vmc42i7q1r0o',
callback: 'https://ff0592af.ngrok.io/auth',
responseType: 'json'
});

router.get('/', (req, res, next) => {
bigCommerce.authorize(req.query)
.then(data => console.log(data))
.then(data => res.render('auth', { title: 'Authorized!' })
.catch(err));
});
module.exports = router;