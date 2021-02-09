import React from 'react'
import {Layout} from 'antd'
import  HeaderBar from "../../components/HeaderBar";
import { removeCookies } from "../../utils/Cookie";
const { Sider,Header,Content,Footer } = Layout;

class Index extends React.Component {
    state = {
        collapsed:false //伸缩
    }
    toggle = () => {
        this.setState({
            collapsed:!this.state.collapsed
        })
    }
    logout = () => {
        removeCookies(process.env.REACT_APP_TOKEN_NAME)
        this.props.history.push('/login')
    }
    render(){
        return (
            <div id="page">
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible
                        trigger={null}
                        collapsed={this.state.collapsed}
                    >
                        导航栏
                    </Sider>
                    <Layout>
                        <Header style={{background: '#fff', padding: '0 16px'}}>
                            <HeaderBar/>
                        </Header>
                        <Content>Content</Content>
                        <Footer style={{textAlign: 'center'}}>PRODUCT MANAGE SYSTEM @CREATE BY MRTAGER</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default Index