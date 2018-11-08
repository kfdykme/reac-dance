import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a href="index" className="navbar-brand">舞迹</a>
          <div class="collapse navbar-collapse">
              <ul className="nav nav-tabs">
                <li className="nav-item"><Link className="nav-link active" to="score">评分</Link></li>
                <li className="nav-item"><Link className="nav-link" to="discovery">发现</Link></li>
                <li className="nav-item"><Link className="nav-link" to="message">消息</Link></li>
                <li className="nav-item"><Link className="nav-link" to="mine">我的</Link></li>
              </ul>
          </div>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit">Search</button>
          </form>
            <ul className="nav nav-tabs">
              <li className="nav-item"><Link className="nav-link" to="score">登录</Link></li>
              <li className="nav-item"><Link className="nav-link" to="discovery">注册</Link></li>
            </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;