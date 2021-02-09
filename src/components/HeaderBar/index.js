import React, { Component } from 'react'
import propTypes from 'prop-types';
import { defaults } from 'js-cookie';
import { connect } from 'react-redux';
import { telescopicSldebar } from '../../store/HeaderBar/action'
import { MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
import './index.css.map'

class HeaderBar extends Component {
    static propTypes = {
        collapsed: propTypes.bool.isRequired,
        telescopicSldebar: propTypes.func.isRequired
    }
    state = {

    }
    changeCollapsed = () => {
        this.props.telescopicSldebar('collapsed',this.props.collapsed)
    }
    render() {
        return (
            <div id="header-bar">
                <div className={'collapsed'} onClick={this.changeCollapsed}>
                    {
                        this.props.collapsed ? (<MenuFoldOutlined style={{ fontSize: '25px' }}/>) : (<MenuUnfoldOutlined style={{ fontSize: '25px' }} />)
                    }
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
