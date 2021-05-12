const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const keys=require('./keys')
const mysql = require('../mysql')
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretKeys;
module.exports = (passport)=>{
    passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
        const  data = await mysql.login(jwt_payload)
        if(data.length>0){
            return done(null, data);
        }else{
            return done(null, false);
        }
    }));
}