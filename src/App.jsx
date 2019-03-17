import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, HashRouter, Redirect } from 'react-router-dom';
import { Router, Route } from 'react-router';

import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';

const contentNode = document.getElementById("contents");
const NoMatch = () => <p>Pagee Not Found</p>;
const RoutedApp = () => (
    <HashRouter history={hashHistory}>
        <Route exact path="/" render={() =>
            <Redirect to={'/issues'}></Redirect>}>
        </Route>
        <Route exact path='/issues' component={IssueList} />
        <Route exact path='/issues/:id' component={IssueEdit} />
        {/* <Route exact path='*' component={NoMatch} /> */}
    </HashRouter>
)
ReactDOM.render(<RoutedApp />, contentNode);
