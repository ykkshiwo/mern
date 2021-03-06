import React from 'react';
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from 'react-router';
import Router from 'express';
import { Route, Switch } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import IssueList from '../src/IssueList.jsx';
import template from './template.js';
import HelloWorld from '../src/HelloWorld.jsx';

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
const NoMatch = () => <p>Pagee Not Found</p>;
const Client = () => {
  <p>test client</p>
}


renderedPageRouter.get('*', (req, res) => {
  // console.log("服务器启用成功");
  // console.log(`http://127.0.0.1:3000/api${req.url}`);
  // fetch(`http://127.0.0.1:3000/api${req.url}`).then(response => {
  //   return response.json();
  // }).then(result => {
  //   console.log('从服务器返回的数据：', result);
  //   const r = { i: result };
  //   const context = { a: 123 };
  //   const html = ReactDOMServer.renderToString(
  //     // <StaticRouter location={req.url} context={r}>
  //     //   <Switch>
  //     //     <Route exact path='/issues' component={IssueList} {...context} />
  //     //     <Route component={NoMatch} />
  //     //   </Switch>
  //     // </StaticRouter>
  //     <Client />
  //   );
  //   res.write(`
  //   <html>
  //   <head></head>
  //   <body>
  //   <div id="app">${html}</div>
  //   <script src="/vendor.js"></script>
  //   <script src="/app.js"></script>
  //   </body>
  //   </html>
  // `);
  //   res.end();
  // }).catch(err => {
  //   console.log(err);
  // })
  const html = renderToString(<HelloWorld />);
  res.send(template(html));
});

export default renderedPageRouter;
