const express = require("express");
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(express.static('../statics'));
app.use(bodyParser.json());

app.get('/api/issues', (req, res) => {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    console.log(filter);
    dbo.collection('issues').find(filter).toArray().then(issues => {
        const metadata = { total_count: issues.length };
        res.json({ _metadata: metadata, records: issues });
    }).catch(error => {
        console.log(error);
        res.status(500).json({ message: `internal server error: ${error}` });
    })
});

app.post('/api/issues', (req, res) => {
    const newIssue = req.body;
    // newIssue.id = issues.length + 1;
    newIssue.created = new Date();
    if (!newIssue.status) {
        newIssue.status = 'New';
    }
    dbo.collection('issues').insertOne(newIssue).then(result =>
        dbo.collection('issues').find({ _id: result.insertedId }).limit(1).next()
    ).then(newIssue => {
        res.json(newIssue);
    }).catch(err => {
        console.log(err);
    });
})

let dbc, dbo;
MongoClient.connect('mongodb://127.0.0.1:27017/').then(db => {
    dbc = db;
    dbo = db.db('issuetracker');
    app.listen(3000, () => {
        console.log('App started on port 3000');
    });
}).catch(error => {
    console.log('ERROR:', error);
});