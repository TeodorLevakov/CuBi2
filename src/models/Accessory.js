const { default: mongoose } = require('mongoose');
const nongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: /^https?/,
            message: 'Url schuld be a link'
        }
    },
    description: {
        type: String,
        required: true,
        maxlength: 120
    },
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;

