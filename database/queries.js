"use strict"
const {SimCard} = require('./schemas')
const mongoose = require('mongoose')

//Connect to Mongodb

mongoose.connect('mongodb://localhost/simcards', { promiseLibrary: global.Promise, useCreateIndex: true,useNewUrlParser: true })
const queries = {

   provisionSim:async (sim={})=>{
       return await new SimCard({
           ...sim,
       }).save()
   },
    activateSim :async (sim={})=>{
       return await SimCard.findOneAndUpdate({
           iccid:sim.iccid,
           imsi:sim.imsi
       },{status:1,msisdn:sim.msisdn},{new:true}).exec()
   },
    querySubscriberInfo :async (sim={})=>{
       return await SimCard.findOne({
           msisdn:sim.msisdn
       }).exec()
   },
    adjustAccountBalance :async (sim={})=>{
       return await SimCard.findOneAndUpdate({
           msisdn:sim.msisdn
       },{$inc:{'accountBalance':sim.amount}},{new:true}).exec()
   }


}
module.exports = queries