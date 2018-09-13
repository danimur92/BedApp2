const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PatientSchema = new Schema({
    name: {
      type: String,
      required: true,
      max: 100
    },
    surname: {
      type: Number,
      required: true
    },
});



// Export the model
module.exports = mongoose.model('Patient', PatientSchema);

console.log('3. model');
