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


router.get('/provisionSim', KoaBody, async ctx => {
    const iccid = ctx.request.body.iccid
    const imsi = ctx.request.body.imsi
    const ki = ctx.request.body.ki
    const pin1 = ctx.request.body.pin1
    const puc = ctx.request.body.puc
    await queries.provisionSim({
        iccid, imsi, ki, pin1, puc
    }).then(response => {
    })
})


router.post('/activateSim', KoaBody, async ctx => {
    const msidn = ctx.request.body.msisdn
    const iccid = ctx.request.body.iccid
    const imsi = ctx.request.body.imsi

    await queries.activateSim({msidn,iccid,imsi}).then(async function (results) {
        if (results === null) {
            ctx.body = `${ctx.request.body.upi} does not match any records`
        } else {
            ctx.body = results
        }
    }).catch(function (err) {
        ctx.body = err
    })
})

router.get('/querySubscriber', async ctx => {
    ctx.render('school_info')

})
router.post('/adjustAccountBalance', koaBody, async ctx => {

})


//use middleware
app.use(cors())
app.use(router.routes())
app.listen(3000, () => {
    console.log("Server running on port 3000")
})


