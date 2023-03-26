import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
    name: {
        type: String
    },
    rfc: {
        type: String
    },
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }]
})

const companyModel = mongoose.model('company', CompanySchema)

export default companyModel