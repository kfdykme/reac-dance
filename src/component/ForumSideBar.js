import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

class ForumSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Router>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link active" to="#">Active</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Link</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Link</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled" to="#">Disabled</Link>
                </li>
            </ul>
            </Router>
        )
    }
}

export default ForumSideBar;