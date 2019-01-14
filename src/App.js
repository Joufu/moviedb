import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './App.css';
import AddRemove from "./Add.js"
import Show from "./Show";
import Search from "./Search";
import {connect} from "react-redux";


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="form-wrapper">
                        <nav>
                            <Link className="tab" to="/">Add Movie</Link>
                            <Link className="tab" to="/show/">Show Movies</Link>
                            <Link className="tab" to="/search/">Search</Link>
                        </nav>
                        <Route path="/" exact component={AddRemove}/>
                        <Route path="/show/" exact component={Show}/>
                        <Route path="/search/" exact component={Search}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default connect()(App);
