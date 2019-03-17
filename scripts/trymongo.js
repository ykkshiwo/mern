'use strict'
const MongoClient = require('mongodb').MongoClient;

function usage() {
    console.log('Usage:');
    console.log('node', __filename, '<option>');
    console.log('Where option is one of: ');
    console.log(' callbacks Use the callbacks paradigm');
    console.log(' callbacks Use the callbacks paradigm');
    console.log(' callbacks Use the callbacks paradigm');
    console.log(' callbacks Use the callbacks paradigm');
}

if (process.argv.length < 3) {
    console.log("Incorrect number of arguments");
    usage();
} else {
    if (process.argv[2] == 'callbacks') {
        testWithCallbacks();
    } else if (process.argv[2] === 'promises') {
        testWithPromises();
    } else if (process.argv[2] === 'generator') {
        testWithGenerator();
    } else if (process.argv[2] === 'async') {
        testWithAsync();
    } else {
        console.log("Invalid option:", process.argv[2]);
        usage();
    }
}

function testWithCallbacks() {
    MongoClient.connect('mongodb://127.0.0.1:27017/', function (err, db) {
        console.log('已经连接，创建');
        var dbo = db.db("playground");
        dbo.collection('employees').insertOne({ id: 1, name: 'A. Callback' },
            function (err, result) {
                console.log("Result of insert:", result.insertedId);
                dbo.collection('employees').find({ id: 1 }).toArray(function (err, docs) {
                    console.log('Result of find:', docs);
                    db.close();
                });
            });
    });
}

function testWithPromises() {
    let dbo, dbc;
    MongoClient.connect('mongodb://127.0.0.1:27017').then(db => {
        dbc = db;
        dbo = db.db('playground');
        return dbo.collection('employees').insertOne({ id: 1, name: 'B Promises' });
    }).then(result => {
        console.log('Rsesult of insert:', result.insertedId);
        return dbo.collection('employees').find({ id: 1 }).toArray();
    }).then(docs => {
        console.log('Result of find:', docs);
        dbc.close();
    }).catch(err => {
        console.log('ERROR', err);
    });
}

function testWithGenerator() {
    const co = require('co');
    co(function* () {
        const db = yield MongoClient.connect('mongodb://127.0.0.1:27017/');

        const result = yield db.db("playground").collection('employees').insertOne({ id: 1, name: 'C. Generator' });
        console.log('Result of insert:', result.insertedId);

        const docs = yield db.db("playground").collection('employees').find({ id: 1 }).toArray();
        console.log('Result of find:', docs);

        db.close()
    }).catch(err => {
        console.log('ERROR', err);
    })
}