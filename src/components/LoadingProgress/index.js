import React, { Component } from 'react'
import { Skeleton } from 'antd';

export default class index extends Component {
    componentWillMount(){
        NProgress.start()
    }
    componentWillUnmount(){
        NProgress.done()
    }
    render() {
        return (
            <div>
                <Skeleton active />
            </div>
        )
    }
}
