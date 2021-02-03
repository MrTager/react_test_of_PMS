import React from 'react'
import './style.css'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


export default class Login extends React.Component {
    state = {
        showBox:'login',
        url:'',
        loading:false
    }
    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    //study life cycle
    componentDidMount(){
        
    }

    render() {
        return (
            <div id='login-page' style={styles.page}>
                <div className={'formContainer'}>
                    <div className={"inputBox"}>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                                ]}
                            >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                                ]}
                            >
                                <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                                />
                            </Form.Item>
                            
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>
                            <Form.Item>
                                <a className="login-form-forgot" href="">
                                忘记密码
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                                </Button>
                                或者 <a href="">注册</a>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }


}

const styles = {
    page:{
        width:'100vw',
        height:'100vh',
        backgroundColor:"#f5f5f6",
        border:'1px solid rgba(0,0,0,0)'
    }
}
