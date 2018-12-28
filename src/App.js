import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './App.css';
import Add from "./Add.js"
import Show from "./Show";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Add Movie</Link>
                                </li>
                                <li>
                                    <Link to="/show/">Show Random Movie</Link>
                                </li>
                                <li>
                                    <Link to="/search/">Search</Link>
                                </li>
                            </ul>
                        </nav>
                        <Route path="/" exact component={Add}/>
                        <Route path="/show/" exact component={Show}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
