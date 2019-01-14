import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './App.css';
import AddRemove from "./Add.js"
import Show from "./Show";
import Search from "./Search";
import Form from "./Form";

class pageRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="form-wrapper">
                        <nav>
                            {/*<ul>*/}
                            {/*<li>*/}
                            {/*<Link to="/">Add Movie</Link>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*<Link to="/show/">Show Movies</Link>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*<Link to="/search/">Search</Link>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*<Link to="/form/">Form</Link>*/}
                            {/*</li>*/}
                            {/*</ul>*/}
                            <Link className="tab" to="/">Add Movie</Link>
                            <Link to="/show/">Show Movies</Link>
                            <Link to="/search/">Search</Link>
                        </nav>
                        <Route path="/" exact component={AddRemove}/>
                        <Route path="/show/" exact component={Show}/>
                        <Route path="/search/" exact component={Search}/>
                        <Route path="/form/" exact component={Form.form}/>
                    </div>
                </Router>
            </div>
        );
    }
}


export default pageRouter;
