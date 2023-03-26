import mongoose from 'mongoose'

const UserScheme = new mongoose.Schema({
    name: {
        type: String
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
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }
},
    {
        timestamps: true,
        versionKey: false
    })

const userModel = mongoose.model('users', UserScheme)

export default userModel