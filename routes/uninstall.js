const express = require('express'),
router = express.Router(),
BigCommerce = require('node-bigcommerce');
const bigCommerce = new BigCommerce({
secret: 'oo3ab0c33jlaoy5zzj3vmc42i7q1r0o',
responseType: 'json'
});

router.get('/', (req, next) => {
try {
const data = bigCommerce.verify(req.query['signed_payload']);
console.log(data);
} catch (err) {
next(err);
}
});

module.exports = router;