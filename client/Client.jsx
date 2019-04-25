import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, browserHistory } from 'react-router';
import { hashHistory, HashRouter, Redirect, withRouter, Route, BrowserRouter, history, Switch } from 'react-router-dom';

import routes from '../src/Routes.jsx';
import ContextWrapper from '../src/ContextWrapper.jsx';

const WrappedApp = (props) => (
    <ContextWrapper {...props}>
        < BrowserRouter >
            {routes}
        </BrowserRouter>
    </ContextWrapper>
);


const contentNode = document.getElementById('contents');
ReactDOM.render(<WrappedApp initialState={window.__INITIAL_STATE__} />, contentNode);

if (module.hot) {
    module.hot.accept();
}
