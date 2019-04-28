import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import Router from 'express';

import template from './template.js';
import routes from '../src/Routes.jsx';
import ContextWrapper from '../src/ContextWrapper.jsx';
import { hashHistory, HashRouter, Redirect, withRouter, Route, BrowserRouter, history, Switch } from 'react-router-dom';

const renderedPageRouter = new Router();
const test2 = () => <p>Page is test2222222</p>;

renderedPageRouter.get('*', (req, res) => {
  console.log("服务器启用成功");
  console.log(req.url);
  // console.log(routes);
  console.log(routes.props.children.props.children);
  // res.send("test now...");
  const context = {a:123};
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      {/* <routes /> */}
      <Route exact path='/fwq' component={test} />
      <Route exact path='/fwq2' component={test2} />
    </StaticRouter>
  );
  // res.status(200).send(template(html));
  // res.send("test now...");
  // matchPath({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
  //   if (error) {
  //     res.status(500).send(error.message);
  //   } else if (redirectLocation) {
  //     res.redirect(302, redirectLocation.pathname + redirectLocation.search);
  //   } else if (renderProps) {
  //     const componentsWithData = renderProps.components.filter(c => c.dataFetcher);
  //     const dataFetchers = componentsWithData.map(c => c.dataFetcher({
  //       params: renderProps.params, location: renderProps.location,
  //       urlBase: 'http://localhost:3000', cookie: req.headers.cookie,
  //     }));
  //     Promise.all(dataFetchers).then((dataList) => {
  //       let initialState = {};
  //       dataList.forEach((namedData) => {
  //         initialState = Object.assign(initialState, namedData);
  //       });
  //       const html = renderToString(
  //         <ContextWrapper initialState={initialState} >
  //           <RouterContext {...renderProps} />
  //         </ContextWrapper>
  //       );
  //       res.status(200).send(template(html, initialState));
  //     })
  //     .catch(err => {
  //       console.log(`Error rendering to string: ${err}`);
  //     });
  //   } else {
  //     res.status(404).send('Not found');
  //   }
  // });
});

export default renderedPageRouter;
