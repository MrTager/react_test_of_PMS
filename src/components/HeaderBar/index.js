import React, { Component } from 'react'
import propTypes from 'prop-types';
import { defaults } from 'js-cookie';
import { connect } from 'react-redux';
import { telescopicSldebar } from '../../store/HeaderBar/action'
import { MenuFoldOutlined,MenuUnfoldOutlined,ShrinkOutlined,ArrowsAltOutlined } from '@ant-design/icons';
import screenfull from "screenfull";
import { message } from 'antd';
import './index.css'

class HeaderBar extends Component {
    static propTypes = {
        collapsed: propTypes.bool.isRequired,
        telescopicSldebar: propTypes.func.isRequired
    }
    state = {
        iconSize:25,
        screenFull:false
    }
    changeCollapsed = () => {
        this.props.telescopicSldebar('collapsed',this.props.collapsed)
    }
    changeScreenFull = () => {
        if(screenfull.isEnabled){
            screenfull.toggle()
            this.setState({screenFull:!screenfull.isFullscreen})
        }else{
            message.error('您的浏览器不支持此功能！')
        }
    }
    render() {
        return (
            <div id="header-bar">
                <div className={'collapsed'} onClick={this.changeCollapsed}>
                    {
                        this.props.collapsed ? (<MenuFoldOutlined style={{ fontSize: `${this.state.iconSize}px` }}/>) : (<MenuUnfoldOutlined style={{ fontSize: `${this.state.iconSize}px` }} />)
                    }
                </div>
                <div style={{lineHeight:'64px',float:'right'}}>
                    <ul className={'header-ul'}>
                        <li onClick={this.changeScreenFull}>
                            {
                                this.state.screenFull ? (<ShrinkOutlined style={{ fontSize: `${this.state.iconSize}px` }}/>) : (<ArrowsAltOutlined style={{ fontSize: `${this.state.iconSize}px` }}/>)
                            }
                        </li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        collapsed:state.HeaderBar.collapsed
    }
}
export default connect(mapStateToProps,{
    telescopicSldebar
})(HeaderBar)
