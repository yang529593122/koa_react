import React from 'react';
import {withRouter} from "react-router-dom";
// 组建
import Header from "../../components/Header"
// 方法
import  {get_home_data} from "../../axios/api"
import  { isLogin } from "../../tools";
class Home extends React.Component {

        state={
            list:[]
        }

    componentDidMount() {
        if(!isLogin()){
            const  {history} = this.props
            history.push('/login')
        }
    }
    getHomeData(){
        get_home_data().then(res=>{
            console.log(res)
            this.setState({
                list:res.data
            })
        })
    }
    render() {
        const  { list } = this.state
        return (
            <>
                <Header />
                <span onClick={() => this.getHomeData() }>点击 send 请求</span>
                {
                    list.map( item=> <p key={item.id}>{item.name}</p>)
                }
            </>
        )
    }
}
export  default   withRouter(Home);