import mongoose from 'mongoose'

const UserScheme = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },

    password: {
        type: String
    },
    role: {
        type: String,
        default: 'user'
    }
},
    {
        timestamps: true,
        versionKey: false
    })

const userModel = mongoose.model('users', UserScheme)

export default userModel