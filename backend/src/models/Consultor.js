
const mongoose = require ('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ConsultorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.plugin(mongoosePaginate);

mongoose.model('Consultor', ConsultorSchema);




