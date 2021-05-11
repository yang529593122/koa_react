import React from 'react';
import {withRouter} from "react-router-dom";
import Header from "../../components/Header";
// 组建
// 方法
// style
class CssStylePages extends React.Component {
    state={

    }
    render() {
        return (
            <div className='CssStylePages'>
                <Header />
                CssStylePages
            </div>
        )
    }
}
export  default   withRouter(CssStylePages);