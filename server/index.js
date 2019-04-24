import SourceMapSupport from 'source-map-support';
SourceMapSupport.install();
// import 'babel-polyfill';
import http from 'http';

import { MongoClient } from 'mongodb';

let appModule = require('./server.js');
let dbo;
let server;

MongoClient.connect('mongodb://127.0.0.1:27017/').then(connection => {
    // db = connection;
    dbo = connection.db('issuetracker');
    server = http.createServer();
    appModule.setDb(dbo);
    server.on('request', appModule.app);
    server.listen(3000, () => {
        console.log('App started on port 3000 哦');
    });
}).catch(error => {
    console.log('ERROR:', error);
});

if (module.hot) {
    module.hot.accept('./server.js', () => {
        server.removeListener('request', appModule.app);
        appModule = require('./server.js');     // eslint-disable-line
        appModule.setDb(db);
        server.on('request', appModule.app);
    });
}