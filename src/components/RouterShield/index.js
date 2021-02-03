import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import { Jurisdiction } from '../../utils/Jurisdiction'

const RouterShield = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props)=>(
        !!Jurisdiction()
        ?<Component {...props} />
        :<Redirect to={{
            pathname: '/login',
            state:{from:props.location}
        }}/>
    )}/>
)

export default RouterShield