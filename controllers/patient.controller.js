const Patient = require('../server/models/patient.model');

// 1. Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// 2. Create new product --> POST localhost:1234/products/create
// Write in body, with x-www-form tagged


exports.patient_create = function (req, res) {
    let patient = new Patient(
        {
            name: req.body.name,
            surname: req.body.price
        }
    );
    patient.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Patient Created successfully')
    })
};

// 3. Reading product by ID --> GET localhost:1234/patient/5b9404bf57c1d01785b25e54
exports.patient_read = function (req, res) {
    Patient.findById(req.params.id, function (err, patient) {
        if (err) return next(err);
        res.send(patient);
    })
};

//4. Update products --> PUT localhost:1234/products/5b93d701054875164f68ac6b/update
exports.patient_update = function (req, res) {
    Patient.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, Patient) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

//5. delete products --> DELETE localhost:1234/products/5b93d701054875164f68ac6b/delete
exports.patient_delete = function (req, res) {
    Patient.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
