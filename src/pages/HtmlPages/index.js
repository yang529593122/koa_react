import React from 'react';
import {withRouter} from "react-router-dom";
import Header from "../../components/Header";
// 组建
// 方法
// style
class HtmlPages extends React.Component {
    state={

    }
    render() {
        return (
            <div className='HtmlPages'>
                <Header />
                HtmlPages
            </div>
        )
    }
}
export  default  withRouter(HtmlPages);