const express = require('express');
const router = express.Router();

/* GET Validation page. */
router.get('/', function(req, res, next) {
  res.render('user', {title: 'Form Validation', success: req.session.success, errors: req.session.errors});
  req.session.errors = null;
  req.session.success = null;
});

router.post('/submit', function(req, res, next) {
  req.check('email', 'Invalid email address').isEmail();
  req.check('password', 'Password is invalid').isLength({min: 4}).equals(req.body.confirmPassword);
  console.log('qui');

  var errors = req.validationErrors();
  if (errors){
    req.session.errors = errors;
    req.session.success = false;
  } else {
    req.session.success = true;
  }
  res.redirect('/');
});

module.exports = router;
