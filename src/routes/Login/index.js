import React from 'react'

class Login extends React.Component {
    state = {
        showBox:'login',
        url:'',
        loading:false
    }
    //study life cycle
    render() {
        return (
            <div id='login-page'>
                {"我是登录界面"}
            </div>
        )
    }

}

export default Login