import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';


const { SubMenu } = Menu;

const iconGroup = {
    AppstoreOutlined:(<AppstoreOutlined/>),
    MenuUnfoldOutlined:(<MenuUnfoldOutlined/>),
    MenuFoldOutlined:(<MenuFoldOutlined/>),
    PieChartOutlined:(<PieChartOutlined/>),
    DesktopOutlined:(<DesktopOutlined/>),
    ContainerOutlined:(<ContainerOutlined/>),
    MailOutlined:(<MailOutlined/>)
}

@withRouter
class NavigationOption extends Component {
    state = {
        openKeys: [],
        selectedKeys: []
    }
    componentDidMount(){
        const pathname = this.props.location.pathname
        const rank = pathname.split('/')
        console.log("pathname",pathname)
        switch (rank.length) {
            case 2 : 
                this.setState({
                    selectedKeys: [pathname]
                })
                break;
            case 5 :
                this.setState({
                  selectedKeys: [pathname],
                  openKeys: [rank.slice(0, 3).join('/'), rank.slice(0, 4).join('/')]
                })
                break;
            default:
                this.setState({
                    selectedKeys:[pathname],
                    openKeys: [pathname.substr(0, pathname.lastIndexOf('/'))]
                })
        }
    }
    renderSubMenu = ({key,icon,title,subs}) => {
        return (
            <Menu.SubMenu key={key} title={
                <span>
                    {icon && iconGroup[icon]}
                    <span>{title}</span>
                </span>
            }>
                {
                    subs && subs.map(item => {
                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    })
                }
            </Menu.SubMenu>
        )
    }
    renderMenuItem = ({key,icon,title}) => {
        return (
            <Menu.Item key={key}>
                <Link to={key}>
                    { icon && iconGroup[icon] }
                    <span>{title}</span>
                </Link>
            </Menu.Item>
        )
    }
    onOpenChange = (openKeys) => {
        console.log("点击导航",openKeys)
        if (openKeys.length === 0 || openKeys.length === 1) {
            this.setState({
              openKeys
            })
            return
        }
        const latestOpenKey = openKeys[openKeys.length - 1]
        if (latestOpenKey.includes(openKeys[0])) {
            this.setState({
              openKeys
            })
          } else {
            this.setState({
              openKeys: [latestOpenKey]
            })
          }
    }
    render() {
        const {openKeys,selectedKeys} = this.state
        return (
            <div>
               <Menu 
               theme="dark" 
               mode="inline" 
               defaultSelectedKeys={['1']}
               onClick={({key}) => this.setState({selectedKeys: [key]})}
               openKeys={openKeys}
               selectedKeys={selectedKeys}
               onOpenChange={this.onOpenChange}
               mode='inline'
               >
                    {
                        this.props.menus && this.props.menus.map(item => {
                            return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                        })
                    }
                </Menu>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(NavigationOption)