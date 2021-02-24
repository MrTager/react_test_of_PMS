import React, { Component } from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import RouterShield from '../RouterShield'

import HomePage from "../../pages/HomePage";
import ProductManage from "../../pages/ProductManage";

@withRouter
class ContentMain extends Component {
    render() {
        return (
            <div style={{padding:16,position:'relative'}}>
                <Switch>
                    <RouterShield exact path='/homePage' component={HomePage} />
                    <RouterShield exact path='/productManage' component={ProductManage} />
                    <Redirect exact from='/' to='/homePage'/>
                </Switch>
            </div>
        )
    }
}

export default ContentMain