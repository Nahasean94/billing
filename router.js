const queries = require('./database/queries')


// provisionSim
// activateSim
// querySubscriber
// adjustAccountBalance





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