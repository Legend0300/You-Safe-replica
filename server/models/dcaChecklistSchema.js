const mongoose = require('mongoose');

const DCAListSchema = new mongoose.Schema({
    suitabilityCheckbox: {
        type: String,
        enum: ["Compliant", "Non-Compliant"],
        required: true
    },
    status: {
      type: String,
      enum: ['In Progress', 'Pending', 'Completed'],
      required: true
    },
    actionRemarks: {
      type: String,
      required: true
    },
    responsibility: {
      type: String,
      required: true
    }
  });

const DCAList = mongoose.model('DCAList', DCAListSchema);


module.exports = DCAList
  