import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, HashRouter, Redirect, withRouter } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router';

import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';

const contentNode = document.getElementById("contents");
const NoMatch = () => <p>Pagee Not Found</p>;

const App = (props) => (
    <div>
        <div className="header">
            <h1>Issue Tracker</h1>
        </div>

        <div className="contents">
            {props.children}
        </div>

        <div className="footer">
            Full source code available at this <a href="http://www.baidu.com">nimei</a>
        </div>
    </div>
)

const RoutedApp = () => (
    <HashRouter history={hashHistory}>
        <Route exact path="/" render={() =>
            <Redirect to={'/issues'}></Redirect>}>
        </Route>
        <App path="/">
            <Route exact path='/issues' component={withRouter(IssueList)} />
            <Route exact path='/issues/:id' component={IssueEdit} />
            {/* <Route exact path='*' component={NoMatch} /> */}
        </App>
    </HashRouter>
)

ReactDOM.render(<RoutedApp />, contentNode);
