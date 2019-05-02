import React from 'react';
// import { renderToString } from 'react-dom/server';
import ReactDOMServer from "react-dom/server";
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import { StaticRouter } from 'react-router';

import Router from 'express';

import template from './template.js'; 
import routes from '../src/Routes.jsx';
import ContextWrapper from '../src/ContextWrapper.jsx';
import { hashHistory, HashRouter, Redirect, withRouter, Route, BrowserRouter, history, Switch } from 'react-router-dom';

const renderedPageRouter = new Router();

class test extends React.Component {

  constructor(props) {
      super(props);
      console.log("props的值是：", this.props.staticContext);
      this.state = {
          issues: this.props.staticContext.i.metadata.totalCount,
          //   totalCount: data.metadata.totalCount,
      };
  }

  render() {
      return (
          <div>
              {/* <button>{this.state.issues}</button> */}
              <button>{this.state.issues}</button>
          </div>
      )
  }
}

const test2 = () => <p>Page is test2222222</p>;

renderedPageRouter.get('*', (req, res) => {
  console.log("服务器启用成功");
  console.log(`http://127.0.0.1:3000/api${req.url}`);
  fetch(`http://127.0.0.1:3000/api${req.url}`).then(response => {
    return response.json();
  }).then(result => {
    console.log('从服务器返回的数据：', result);
    const r = {i: result};
    const context = {a:123};
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={r}>
        {/* <routes /> */}
        <Route exact path='/issues' component={test} {...context} />
        <Route exact path='/test2' component={test2} />
      </StaticRouter>
    );
    res.write(`
    <!doctype html>
    <div id="app">${html}</div>
  `);
    res.end();
  })
});

export default renderedPageRouter;
