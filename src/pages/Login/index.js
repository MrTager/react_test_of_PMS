import React from 'react'
import './style.css'
import { Form, Input, Button, Checkbox,Popconfirm,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import propTypes from 'prop-types';
import { saveUserDate } from "@/store/Login/action";
import { setCookies } from "../../utils/Cookie";
import { login,getUserInfo } from '../../api/user';
import { connect } from 'react-redux';

const loginKey = 'updatable';

class Login extends React.Component {
    static propTypes  = {
        userInfo: propTypes.object.isRequired,
        saveUserDate : propTypes.func.isRequired,
    }
    state = {
        showBox:'login',
        url:'',
        loading:false,
        text:{
            forgetPwd:'请联系管理员！',
            register:'请联系管理员开通！'
        }
    }
    login = (values) => {
        console.log('Received values of form: ', values);
        message.loading({ content: '正在登录...', loginKey });
        login(values.username,values.password)
        .then((res)=>{
            getUserInfo(values.username,values.password)
            .then((res)=>{
                if(values.remember){
                    //保存到cookie
                    setCookies(process.env.REACT_APP_TOKEN_NAME,res.item,7)
                    this.props.saveUserDate(res.item,"userInfo")
                    message.success({ content: '登录成功!', loginKey, duration: 2 });
                    this.props.history.push('/')
                }else{
                    this.props.saveUserDate(res.item,"userInfo")
                }
            })
            .catch((err)=>{

            })
           
        })
        .catch((err)=>{
           
        })
    };
    forgetPwsConfirm = () => {
    }
    registerConfirm = () => {
    }
    //study life cycle
    componentWillMount() {
    }
    render() {
        return (
            <div id='login-page' style={styles.page}>
                <div>{JSON.stringify(this.props.userInfo)}</div>
                <div className={'formContainer'}>
                    <div className={"inputBox"}>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={this.login}
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
                                <Popconfirm
                                    placement="right"
                                    title={this.state.text.forgetPwd}
                                    onConfirm={this.forgetPwsConfirm}
                                    okText="确定"
                                    cancelText="取消"
                                >
                                <a className="login-form-forgot" href="#">
                                    忘记密码
                                </a>
                                </Popconfirm>
                                
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                                </Button>
                                或者 
                                <Popconfirm
                                    placement="right"
                                    title={this.state.text.register}
                                    onConfirm={this.registerConfirm}
                                    okText="确定"
                                    cancelText="取消"
                                >
                                <a href="#">
                                注册
                                </a>
                                </Popconfirm>
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
const mapStateToProps = (state)=>{
    return {
        userInfo:state.Login.userInfo
    }
}
export default connect(mapStateToProps,{
    saveUserDate
})(Login)