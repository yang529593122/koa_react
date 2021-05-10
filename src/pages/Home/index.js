import React from 'react';
import  {get_home_data} from "../../axios/api"
import  { isLogin } from "../../tools";
import {withRouter} from "react-router-dom";

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
                <span onClick={() => this.getHomeData() }>点击 send 请求</span>
                {
                    list.map( item=> <p key={item.id}>{item.name}</p>)
                }
            </>
        )
    }
}
export  default   withRouter(Home);