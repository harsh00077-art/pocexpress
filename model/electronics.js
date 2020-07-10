const mongoose = require('mongoose')

const electronicsSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: {
            values: ['Mobile', 'AC'],
            message: 'For {PATH} the value {VALUE} is not valid. Only Mobile and AC allowed'
        }
    },
    price: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('ElectronicsSchema',electronicsSchema);