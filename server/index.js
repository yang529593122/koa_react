const Koa = require('koa')
const config = require('./config/default')
const mysql = require('./mysql')
const cors = require('koa-cors');
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const Crypt = require('./mysql/crypt')
const jwt = require('jsonwebtoken');
const  keys = require('./config/keys')
const passport = require('koa-passport')

const app =  new Koa()
app.use(cors());
app.use(bodyParser());
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)
app.use(router['routes']()).use(router.allowedMethods());

router.get('/get_home_data', async (ctx) => {
    let data = await mysql.query()
    ctx.body = {
        "code": 1,
        "data": data,
        "massage": 'ok'
    }
})
router.get('/userinfo',passport.authenticate('jwt', { session: false }) ,async (ctx) => {
    console.log(ctx.state.user)
    ctx.body = {
        "code": 1,
        "data": {
            uid:ctx.state.user[0].uid,
            name:ctx.state.user[0].name
        },
        "massage": 'ok'
    }
})
//注册
router.post('/registered', async (ctx) => {

    let data = await mysql.search(ctx.request.body)
    if(data.length>0){
        ctx.body = {
            "code": 0,
            "data": null,
            "massage": '用户已存在'
        }
    }else{
        ctx.request.body.password=Crypt.encrypt(ctx.request.body.password)
        let registerData = await mysql.register(ctx.request.body)
        if(registerData){
            ctx.body = {
                "code": 1,
                "data": null,
                "massage": '注册成功'
            }
        }

    }

})
// 登陆
router.post('/login', async (ctx) => {

    let data = await mysql.login(ctx.request.body)
    console.log(data)
    if(data.length===0){
        ctx.body = {
            "code": 404,
            "data":null,
            "massage": '用户不存在'
        }
    }else{
        let flag =Crypt.decrypt(ctx.request.body.password,data[0].password)
        console.log(flag)
        if(flag){
            // 登陆成功
            const payLoad={
                uid:data[0].uid,
                username:data[0].name
            }
            const  token = jwt.sign(payLoad,keys.secretKeys,{ expiresIn: 3600})
            ctx.body = {
                "code": 1,
                "data":'Bearer '+ token,
                "massage": '登陆成功'
            }
        }else{
            ctx.body = {
                "code": 401,
                "data":null,
                "massage": '密码错误'
            }
        }
    }
})
//批量删除
router.post('/batchdelete', async (ctx) => {

    const values = [];
    ctx.request.body.arr.forEach(function(n) {
            values.push(`('${n.name}',${n.age})`);
    });
    const addSql = `INSERT INTO test_dome (name,age) VALUES ${values.join(',')}`;
    const _result = await mysql.query(addSql);
    if (_result) {
        ctx.body = {
            "code": 1,
            "data":null,
            "massage": 'ok'
        }
    }



})
app.listen(8000)
