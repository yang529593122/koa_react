import React from 'react';
import {withRouter} from "react-router-dom";
// 组建
import Header from "../../components/Header"
import { Carousel } from 'antd';
// 方法
import  {get_home_data,userinfo} from "../../axios/api"
import  { isLogin } from "../../tools";
// style
import "./style/index.scss"
import ban_1 from "../../images/ban_1.jpg"
import ban_2 from "../../images/ban_2.png"
import top_1 from "../../images/top1.jpg"
import top_2 from "../../images/top2.jpg"
class Home extends React.Component {

        state={
            list:[]
        }

    componentDidMount() {
        if(!isLogin()){
            const  {history} = this.props
            history.push('/login')
        }else{
            userinfo().then(res=>{
                console.log(res)
            })
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

        return (
            <>
                <Header />
                <div className='home'>
                    <div className='home-left'>
                       <div className='home-images'>
                           <div className='image-loop'>
                               <Carousel autoplay>
                                   <div>
                                       <img  src={ban_1} alt=""/>
                                   </div>
                                   <div>
                                       <img  src={ban_2} alt=""/>
                                   </div>
                               </Carousel>
                           </div>
                           <div className='image-list'>
                               <div>
                                   <img src={top_1} alt=""/>
                               </div>
                               <div>
                                   <img src={top_2} alt=""/>
                               </div>
                           </div>
                       </div>
                    </div>
                    <div className='home-right'>
                        <div className='author'>
                            <h6>杨青青的名片</h6>
                            <ul>
                                <li><span>职业：女程序员，Web前端设计师</span></li>
                                <li><span>现居：四川省-成都市</span></li>
                                <li><span>工作室：青于蓝-排名技术建站</span></li>
                                <li><span>Email：dancesmiling@qq.com</span></li>
                            </ul>
                        </div>
                    </div>
                    {/*<span onClick={() => this.getHomeData() }>点击 send 请求</span>*/}
                    {/*{*/}
                    {/*    list.map( item=> <p key={item.id}>{item.name}</p>)*/}
                    {/*}*/}
                </div>

            </>
        )
    }
}
export  default   withRouter(Home);