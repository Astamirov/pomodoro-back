const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    login: {
        type: String,
        minlength: 4,    
        required: true
    },
    password: {
        type: String,
        minlength: 4,
        required: true
    },
})

const User = mongoose.model('User', userSchema);
module.exports = User


// проверка