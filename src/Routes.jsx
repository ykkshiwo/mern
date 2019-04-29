import React from 'react';
// import { Route, IndexRedirect, withRouter } from 'react-router';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { hashHistory, HashRouter, Redirect, withRouter, Route, BrowserRouter, history, Switch } from 'react-router-dom';

import App from './App.jsx';
import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';
import IssueReport from './IssueReport.jsx';

const NoMatch = () => <p>Page Not Found</p>;
// const test = () => <p>Page is test</p>;

export default (
    // <BrowserRouter>
    //     <Route exact path="/" render={() =>
    //         <Redirect to={'/issues'}></Redirect>}>
    //     </Route>
    //     <App>
    //         <Switch>
    //             <Route exact path='/issues' component={IssueList} />
    //             <Route exact path='/reports' component={IssueReport} />
    //             <Route exact path='/issues/:id' component={IssueEdit} />
    //             <Route component={NoMatch} />
    //         </Switch>
    //     </App>
    // </BrowserRouter>
    <App>
        <Switch>
            <Route exact path='/issues' component={IssueList} />
            <Route exact path='/reports' component={IssueReport} />
            <Route exact path='/issues/:id' component={IssueEdit} />
            <Route component={NoMatch} />
        </Switch>
    </App>
);