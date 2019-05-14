const queries = require('./database/queries')


// provisionSim
// activateSim
// querySubscriber
// adjustAccountBalance


router.get('/provisionSim', async ctx => {
    const iccid=ctx.request.body.iccid
    const imsi=ctx.request.body.imsi
    const ki=ctx.request.body.ki
    const pin1=ctx.request.body.pin1
    const puc=ctx.request.body.puc
   await queries.provisionSim({
       iccid,imsi,ki,pin1,puc
   }).then(response=>{
   })
   // await queries.
})


router.post('/activateSim', koaBody, async ctx => {

    await queries.searchUPI(ctx.request.body.upi).then(async function (results) {
        if (results === null) {
            ctx.body = `${ctx.request.body.upi} does not match any records`
        }
        else {
            ctx.body = results

        }
    }).catch(function (err) {
        ctx.body=err
    })
})

router.get('/querySubscriber', async ctx => {
    ctx.render('school_info')

})


router.post('/adjustAccountBalance', koaBody, async ctx => {

})

/**
 * if (ctx.path === '/favicon.ico') return
 if (ctx.session.isNew) {
        ctx.render('admin_signup')
    } else {
        if (ctx.session.role === 'system') {
            queries.loadSystemAdminDashboard(ctx).catch(function (err) {
                ctx.body=err
            })
        }
        if (ctx.session.role === 'nemis') {
            //loadNemisAdminDashboard(ctx)
        }
    }
 **/