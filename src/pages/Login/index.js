import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button} from 'antd';
import  {login} from "../../axios/api"
import  "./style/index.scss"
class Login extends React.Component {
    onFinish(data){
        login(data).then(res=>{
            if(res.code === 1 && res.data){
                localStorage.setItem('uid',res.data)
                const  {history} = this.props
                history.push('/home')
            }else{
                console.log('登陆失败')
            }
        })
    }
    render() {
        return (
           <div className="login">
               <div className="login-content">
                   <Form
                       className="form_box"
                       onFinish={this.onFinish.bind(this)}
                   >
                       <Form.Item
                           label="用 户"
                           name="username"
                       >
                           <Input />
                       </Form.Item>
                       <Form.Item
                           label="密 码"
                           name="password"
                       >
                           <Input.Password />
                       </Form.Item>
                       <Form.Item>
                           <Button type="primary" htmlType="submit">
                               登录
                           </Button>
                       </Form.Item>
                   </Form>
               </div>
           </div>
        )
    }
}
export  default  withRouter(Login);