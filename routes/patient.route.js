const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const patient_controller = require('../controllers/patient.controller');

/* GET patient page. */
router.get('/', function(req, res, next) {
  res.render('patient', { title: 'Patient!'});
});

//1. a simple test url to check that all of our files are communicating correctly.
router.get('/test', patient_controller.test);

//2. Creating new product
router.post('/create', patient_controller.patient_create);

//3. Reading a product
router.get('/:id', patient_controller.patient_read);

//4. Update a products
router.put('/:id/update', patient_controller.patient_update);

//5. Delete a products
router.delete('/:id/delete', patient_controller.patient_delete);

module.exports = router;

console.log('2. route');
