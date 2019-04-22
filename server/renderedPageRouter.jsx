import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import Router from 'express';

import template from './template.js';
import HelloWorld from '../src/HelloWorld.jsx';

const renderedPageRouter = new Router();

renderedPageRouter.get('*', (req, res) => {
    const initialState = { addressee: 'Uni' };
    const html = renderToString(<HelloWorld {...initialState} />);
    res.send(template(html));
});

export default renderedPageRouter;