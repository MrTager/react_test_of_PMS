import React from 'react'
import {Layout} from 'antd'

class Index extends React.Component {
    state = {
        collapsed:false //伸缩
    }
    toggle = () => {
        this.setState({
            collapsed:!this.state.collapsed
        })
    }
    render(){
        return (
            <div id="page">
                这是主页
            </div>
        )
    }
}

export default Index