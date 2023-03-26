import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    name: {
        type: String
    },
    street: {
        type: String
    },
    number: {
        type: Number
    },
    postalCode: {
        type: Number
    },
    city: {
        type: String
    },
    colony: {
        type: String
    },
    phone: {
        type: String
    },
    type: {
        type: String,
        default: 'envio'
    }
},  {
        timestamps: true,
        versionKey: false
    })

const addressSchema = mongoose.model('address', AddressSchema)

export default addressSchema
