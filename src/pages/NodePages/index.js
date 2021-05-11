import React from 'react';
import {withRouter} from "react-router-dom";
import Header from "../../components/Header";
// 组建
// 方法
// style
class NodePages extends React.Component {
    state={

    }
    render() {
        return (
            <div className='NodePages'>
                <Header />
                NodePages
            </div>
        )
    }
}
export  default   withRouter(NodePages);