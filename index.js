"use strict"
/**
 * Declare and initialize all variables need in this codebase
 */
const Koa = require('koa')
const Router = require('koa-router')

const KoaBody = require('koa-body')
const cors = require('koa2-cors')

const router = new Router()
const app = new Koa()


//use middleware
app.use(cors())
app.use(router.routes())
app.listen(3000, () => {
    console.log("Server running on port 3000")
})

