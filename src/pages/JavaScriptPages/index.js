import React from 'react';
import {withRouter} from "react-router-dom";
import Header from "../../components/Header";
// 组建
import  { Button } from 'antd'
// 方法
import  {batchDelete} from "../../axios/api"
// style
class JavaScriptPages extends React.Component {
    state={

    }
    delData(){
       let obj={arr:[
               {name:'小可爱',age:12},
               {name:'帅帅',age:18},
           ]}
        batchDelete(obj).then(res=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div className='JavaScriptPages'>
                <Header />
                <Button type="primary" onClick={this.delData.bind(this)}>批量删除</Button>
            </div>
        )
    }
}
export  default   withRouter(JavaScriptPages);