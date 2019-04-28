import { createServer } from "http";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { Route } from 'react-router-dom';
// import App from "./App";
const test = () => <p>Page is test</p>;
const test1 = () => <p>Page is test1</p>;

class test2 extends React.Component {

    constructor(props, context) {
        super(props, context);
        console.log("context的值是：", context.context);
        this.state = {
            issues: context,
            //   totalCount: data.metadata.totalCount,
        };
    }
  
    render() {
        return (
            <div>
                {/* <button>{this.state.issues}</button> */}
                <button>hello</button>
            </div>
        )
    }
  }

createServer((req, res) => {
    const context = {a:123};

    const html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            {/* <button>hello</button> */}
            <Route exact path='/fwq' component={test} />
            <Route exact path='/fwq1' component={test1} />
            <Route exact path='/fwq2' component={test2} />
        </StaticRouter>
    );

    if (context.url) {
        res.writeHead(301, {
            Location: context.url
        });
        res.end();
    } else {
        res.write(`
      <!doctype html>
      <div id="app">${html}</div>
    `);
        res.end();
    }
}).listen(3000);