const Koa = require('koa')
const config = require('./config/default')
const mysql = require('./mysql')
const  router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const app =  new Koa()
app.use(bodyParser());
app.use(router['routes']()).use(router.allowedMethods());
router.get('/get_home_data', async (ctx) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    let data = await mysql.query()
    ctx.body = {
        "code": 1,
        "data": data,
        "mesg": 'ok'
    }
})
router.post('/login', async (ctx) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    let data = await mysql.login(ctx.request.body)
    let uid= data.length===1 ? data[0].uid : null
    ctx.body = {
        "code": 1,
        "data":uid,
        "mesg": 'ok'
    }
})

app.listen(8000)
