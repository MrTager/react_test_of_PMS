import React from 'react'
import { connect } from 'react-redux'
import NavigationOption from '../NavigationOptions'

const menus = [
    {
        title:'产品管理',
        icon:'AppstoreOutlined',
        key: '/productManage',
    },
    {
        title: '导航组件',
        icon: 'MenuUnfoldOutlined',
        key: '/navigation',
        subs: [
          {key: '/navigation/dropdown', title: '下拉菜单', icon: ''},
          {key: '/navigation/menu', title: '导航菜单', icon: ''},
          {key: '/navigation/steps', title: '步骤条', icon: ''},
        ]
    }
]

class SiderNav extends React.Component{
    render() {
        return (
            <div style={{height:'100vh',overflowY:'scroll'}}>
                <div style={styles.logo}>
                    <NavigationOption collapsed={this.props.collapsed} menus={menus}/>
                </div>
            </div>
        )
    }
}

const styles = {
    logo: {
        height: '32px',
        background:'rgba(255,255,255, .2)',
        marginTop:'50px'
    }
}
const mapStateToProps = (state)=>{
    return {
        
    }
}
export default connect(mapStateToProps)(SiderNav)