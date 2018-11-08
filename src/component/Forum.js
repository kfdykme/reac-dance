import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import ForumSideBar from './ForumSideBar';

class Forum extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-2">
                        <ForumSideBar></ForumSideBar>
                    </div>
                </div>
                <div class="col-sm-7">
                </div>
                <div class="col-sm-3">
                </div>
            </div>
        )
    }
}

export default Forum;