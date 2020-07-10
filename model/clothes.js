const mongoose = require('mongoose')

const clothesSchema = new mongoose.Schema({
    color: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
        enum: {
            values: ['large', 'medium'],
            message: 'For {PATH} the value {VALUE} is not valid. Only large and medium are allowed'
        }
    }
})

module.exports = mongoose.model('ClothesSchema',clothesSchema);