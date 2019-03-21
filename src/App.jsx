import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, HashRouter, Redirect, withRouter, Route, BrowserRouter, history, Switch } from 'react-router-dom';
// import { Router, Route, } from 'react-router';

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
    <BrowserRouter>
        <Route exact path="/" render={() =>
            <Redirect to={'/issues'}></Redirect>}>
        </Route>
        <App>
            <Switch>
                <Route exact path='/issues' component={IssueList} />
                <Route exact path='/issues/:id' component={IssueEdit} />
                <Route component={NoMatch} />
            </Switch>
        </App>
    </BrowserRouter>
)

ReactDOM.render(<RoutedApp />, contentNode);
