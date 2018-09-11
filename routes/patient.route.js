const express = require('express');
const router = express.Router();

console.log('2. route');

// Require the controllers WHICH WE DID NOT CREATE YET!!
const patient_controller = require('../controllers/patient.controller');

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
