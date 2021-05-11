import React from 'react';
import {withRouter} from "react-router-dom";
import Header from "../../components/Header";
// 组建
// 方法
// style
class JavaScriptPages extends React.Component {
    state={

    }
    render() {
        return (
            <div className='JavaScriptPages'>
                <Header />
                JavaScriptPages
            </div>
        )
    }
}
export  default   withRouter(JavaScriptPages);