import React from 'react';
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux'
// style
import "./style/header.scss"

class Header extends React.Component {
    select_item(item){
        const { updateState,history } = this.props
        updateState({active_id:item.item_id})
        history.push(item.path)
    }
    render() {
        const  { list, active_id } = this.props
        return (
            <div className='header'>
                <div className="header-nav">
                    <div className='header-nav-left'>
                        <span>个人博客</span>
                        <span>排名技术贴</span>
                    </div>
                    <div className='header-nav-list'>
                        {
                            list.map( item=>{
                                return (
                                    <p
                                        onClick={()=>this.select_item(item)}
                                        className={ `${ active_id===item.item_id ? 'active' : ''}` }
                                        key={item.item_id}>
                                        {item.name}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        )
    }
}
export  default connect(
    ({ header }) => ({ ...header}),
    ({ header }) => ({ ...header })
)(withRouter(Header));