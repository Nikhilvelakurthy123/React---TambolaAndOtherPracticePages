import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="/" className="navbar-brand">React Practise</a>
                        </div>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            <li><a className="nav-link" href="/">Home</a></li>
                            <li ><Link className="nav-link" to="/HackerRank1">HackerRank1</Link></li>
                            <li ><Link className="nav-link" to="/TimmerComponent">TimmerComponent</Link></li>
                            {/* <li><Link className="nav-link" to="/SpeedTestComponent">SpeedTestComponent</Link></li> */}
                            <li><Link className="nav-link" to="/TambolaComponent">TambolaComponent</Link></li>
                        </ul>
                    </nav>
                    {/* <nav>
                        <div class="col-md-2 fixed pl-0 py-2 bg-light left">
                            <ul class="nav flex-md-column flex-nowrap justify-content-center">
                                <li class="nav-item">
                                    <a class="nav-link text-truncate" href="#">Top on mobile</a>
                                </li>
                            </ul></div>
                    </nav> */}
                </header>
            </div>
        )
    }
}

export default withRouter(HeaderComponent);