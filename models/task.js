const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Task name can not be empty'],
        trim: true,
        maxlength: [30, 'Name can not be more than 30 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task',taskSchema);