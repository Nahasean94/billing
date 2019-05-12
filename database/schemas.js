"use strict"
/*
Declare schemas
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SimCardSchema = new Schema({
    iccid: {
        type: Number,
        unique: true,
        required: [true, 'ICCID is a required field'],
        max: 20,
        min: 20
    },
    imsi: {
        type: Number,
        unique: true,
        required: [true, 'IMSI is a required field'],
        max: 15,
        min: 20
    },
    ki: {
        type: String,
        required: [true, 'Authentication key is a required field'],
        max: 20,
        min: 20
    },
    pin1: {
        type: Number,
        required: [true, 'PIN is a required field'],
        max: 4,
        min: 4
    },
    puc: {
        type: Number,
        required: [true, 'PUC is a required field'],
        max: 6,
        min: 6
    },
    status: {
        type: Number,
        required: [true, 'status is a required field'],
        max: 1,
        min: 1,
        enum: [0, 1],
        default: 0
    },
    msisdn: {
        type: Number,
        required: [true, 'status is a required field'],
        default: 0
    },
    accountBalance: {
        type: Number,
        required: [true, 'accountBalance is a required field'],
        default: 0
    }
})


const SimCard = mongoose.model('Sim', SimCardSchema)

module.exports = {
    Sim,

}
