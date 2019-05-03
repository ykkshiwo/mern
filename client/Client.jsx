import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, browserHistory } from 'react-router';
import { hashHistory, HashRouter, Redirect, withRouter, Route, BrowserRouter, history, Switch } from 'react-router-dom';

// import routes from '../src/Routes.jsx';
// import ContextWrapper from '../src/ContextWrapper.jsx';
import IssueList from '../src/IssueList.jsx';

const contentNode = document.getElementById('contents');
ReactDOM.render(<HelloWorld />, contentNode);
// ReactDOM.render(<WrappedApp initialState={window.__INITIAL_STATE__} />, contentNode);

if (module.hot) {
    module.hot.accept();
}
