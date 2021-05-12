import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button} from 'antd';
import  {registered} from "../../axios/api"
class Registered extends React.Component {
    onFinish(data){
        registered(data).then(res=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div className="registered">

                    <Form

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
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
            </div>
        )
    }
}
export  default  withRouter(Registered);