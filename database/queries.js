"use strict"
const {SimCard} = require('./schemas')
const mongoose = require('mongoose')

//Connect to Mongodb

mongoose.connect('mongodb://localhost/simcards', {useMongoClient: true, promiseLibrary: global.Promise})
const queries = {

   provisionSim:async (sim={})=>{
       return await new SimCard({
           ...sim,
           status:0,
           activeBalance:0
       }).save()
   }


}
module.exports = queries