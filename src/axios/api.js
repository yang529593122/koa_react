import service from "./request";

// get home Page data
export const get_home_data = ()=>{
    return service({
        url:'/get_home_data',
        method:'get'
    })
}
// 用户登录
export const login = (data)=>{
    return service({
        url:'/login',
        method:'post',
        data:data
    })
}
// 用户注册
export const registered = (data)=>{
    return service({
        url:'/registered',
        method:'post',
        data:data
    })
}
// 获取用户信息
export const userinfo = (data)=>{
    return service({
        url:'/userinfo',
        method:'get',
        data:data
    })
}