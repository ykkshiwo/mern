const express = require("express");
const bodyParser = require('body-parser');
const os = require("os");
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const mn = require('mongodb');
const Issue = require('./issue.js');

const app = express();
app.use(express.static('statics'));  //使用钩子函数后根目录是d://mern
app.use(express.static('../node_modules/bootstrap/dist/css/'));
app.use(bodyParser.json());

import renderedPageRouter from './renderedPageRouter.jsx';

// app.get('/api/issues', (req, res) => {
//     console.log("服务器收到请求。")
//     const filter = {};
//     if (req.query.status) filter.status = req.query.status;
//     if (req.query.effort_lte || req.query.effort_gte) filter.effort = {};
//     if (req.query.effort_lte) filter.effort.$lte = parseInt(req.query.effort_lte, 10);
//     if (req.query.effort_gte) filter.effort.$gte = parseInt(req.query.effort_gte, 10);
//     console.log(filter);
//     dbo.collection('issues').find(filter).toArray().then(issues => {
//         const metadata = { total_count: issues.length };
//         res.json({ _metadata: metadata, records: issues });
//     }).catch(error => {
//         console.log(error);
//         res.status(500).json({ message: `internal server error: ${error}` });
//     })
// });

app.get('/app.js',(req, res) => {
    console.log(path.resolve('static'));
    // res.sendFile(path.resolve('../mern/statics/app.js'));
})

app.get('/api/issues', (req, res) => {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    if (req.query.effort_lte || req.query.effort_gte) filter.effort = {};
    if (req.query.effort_lte) filter.effort.$lte = parseInt(req.query.effort_lte, 10);
    if (req.query.effort_gte) filter.effort.$gte = parseInt(req.query.effort_gte, 10);
    if (req.query.search) filter.$text = { $search: req.query.search };

    if (req.query._summary === undefined) {
        const offset = req.query._offset ? parseInt(req.query._offset, 10) : 0;
        let limit = req.query._limit ? parseInt(req.query._limit, 10) : 20;
        if (limit > 50) limit = 50;

        const cursor = dbo.collection('issues').find(filter).sort({ _id: 1 })
            .skip(offset)
            .limit(limit);

        let totalCount;
        cursor.count(false).then(result => {
            totalCount = result;
            return cursor.toArray();
        })
            .then(issues => {
                console.log("查询出的数据： ", issues);
                res.json({ metadata: { totalCount }, records: issues });
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ message: `Internal Server Error: ${error}` });
            });
    } else {
        dbo.collection('issues').aggregate([
            { $match: filter },
            { $group: { _id: { owner: '$owner', status: '$status' }, count: { $sum: 1 } } },
        ]).toArray()
            .then(results => {
                const stats = {};
                results.forEach(result => {
                    if (!stats[result._id.owner]) stats[result._id.owner] = {};
                    stats[result._id.owner][result._id.status] = result.count;
                });
                res.json(stats);
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ message: `Internal Server Error: ${error}` });
            });
    }
});

app.get('/api/issues/:id', (req, res) => {
    let issueId;
    try {
        issueId = mn.ObjectId(req.params.id);
    } catch (error) {
        res.status(422).json({ message: `Invalid issue ID : ${error}` });
    }

    dbo.collection('issues').find({ _id: issueId }).limit(1).next()
        .then(issue => {
            if (!issue) res.status(404).json({ message: `No such issue: ${issueId}` });
            else res.json(issue);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: `Invalid server: ${error}` })
        })
})

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
        console.log("添加的数据是： ", newIssue);
        res.json(newIssue);
    }).catch(err => {
        console.log(err);
    });
})

app.put('/api/issues/:id', (req, res) => {
    let issueId;
    try {
        issueId = mn.ObjectId(req.params.id);
    } catch (error) {
        res.status(422).json({ message: `Invalid issue ID format: ${error}` });
        return;
    }

    const issue = req.body;
    delete issue._id;

    const err = Issue.validateIssue(issue);
    if (err) {
        res.status(422).json({ message: `Invalid request: ${err}` });
        return;
    } 
    console.log("Update immed...");
    console.log(Issue.convertIssue(issue));
    dbo.collection('issues').update({ _id: issueId }, Issue.convertIssue(issue)).then(result =>
        // console.log("Update success...");
        // console.log(result);
        dbo.collection('issues').find({ _id: issueId }).limit(1).next()
    ).then(savedIssue => {
        console.log("保存的东西： ", savedIssue);
        res.json(savedIssue);
    }).catch(error => {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});

app.delete('/api/issues/:id', (req, res) => {
    console.log("server will delete...");
    console.log("delete id is: ", req.params.id);
    let issueId;
    try {
        issueId = mn.ObjectId(req.params.id);
        console.log("now delete data...", issueId);
    } catch (error) {
        res.status(422).json({ message: `Invalid issue ID format: ${error}` });
        return;
    }

    dbo.collection('issues').deleteOne({ _id: issueId }).then((deleteResult) => {
        if (deleteResult.result.n === 1) res.json({ status: 'OK' });
        else res.json({ status: 'Warning: object not found' });
    })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: `Internal Server Error: ${error}` });
        });
});

// app.get('*', (req, res) => {
//     res.send('success');
//     res.sendFile(path.resolve('../statics/index.html'));
// })

app.get('/fwq', renderedPageRouter);
// app.get('/test', (req, res)=>{
//     res.send('express启动完成');
// })

let dbo;
// MongoClient.connect('mongodb://127.0.0.1:27017/').then(db => {
//     dbo = db.db('issuetracker');
//     app.listen(3000, () => {
//         console.log('App started on port 3000');
//     });
// }).catch(error => {
//     console.log('ERROR:', error);
// });

function setDb(newDb) {
    dbo = newDb;
  }
  
  export { app, setDb };