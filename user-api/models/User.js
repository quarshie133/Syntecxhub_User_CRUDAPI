const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            match:  [/\S+@\S+\.\S+/, 'Please enter a valid email'],
        },
        age: {
            typr: Number,
            min: [0, 'Age cannot be negative'],
        },
},
        { timestamps: true} // adds createdAt & updatedAt automatically
);

module.exports = mongoose.model('User', userSchema)
