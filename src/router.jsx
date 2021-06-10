import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ErrorComponent from './ErrorComponent'

import App from './App'
import HackerRank1 from './HackerRank1.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import TimmerComponent from './TimmerComponent.jsx'
import SpeedTestComponent from './SpeedTestComponent.jsx'

export class RouterJS extends Component {
    render() {
        return (
            <div className="router">
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={App} />
                        <Route path="/HackerRank1" component={HackerRank1} />
                        <Route path="/TimmerComponent" component={TimmerComponent} />
                        <Route path="/SpeedTestComponent" component={SpeedTestComponent}/>
                        {/* <AuthenticiatedRoute path="/welcome/:name" component={WelcomePageComponent} />
                        <AuthenticiatedRoute path="/todos" component={TodosComponent} /> */}
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}