import IssueAdd from './IssueAdd.jsx'
import IssueFilter from './IssueFilter.jsx'
import React from 'react'
import 'whatwg-fetch'
import { Link, Button, Glyphicon } from 'react-router-dom';
const qs = require('query-string');

const IssueRow = (props) => {
    function onDeleteClick() {
        props.deleteIssue(props.issue._id);
    }

    return (
        <tr>
            <td><Link to={`/issues/${props.issue._id}`}>{props.issue._id.substr(-4)}</Link></td>
            <td>{props.issue.status}</td>
            <td>{props.issue.owner}</td>
            <td>{props.issue.created.toDateString()}</td>
            <td>{props.issue.effort}</td>
            <td>{props.issue.completionDate ? props.issue.completionDate.toDateString() : ''}</td>
            <td>{props.issue.title}</td>
            {/* {props.deleteIssue ? (
                <td>
                    <Button bsSize="xsmall" onClick={onDeleteClick}><Glyphicon glyph="trash" /></Button>
                </td>
            ) : null} */}
            <td>
                <input onChange={onDeleteClick}></input>
            </td>
        </tr>
    );
};


function IssueTable(props) {
    const IssueRows = props.issues.map(issue => <IssueRow key={issue._id} issue={issue} deleteIssue={props.deleteIssue} />);
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Status</th>
                    <th>Owner</th>
                    <th>Created</th>
                    <th>Effort</th>
                    <th>Completion Date</th>
                    <th>Title</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {IssueRows}
            </tbody>
        </table>
    )
}

export default class IssueList extends React.Component {

    constructor() {
        super();
        this.state = { issues: [] };
        this.choosePars = "ykk";
        this.setFilter = this.setFilter.bind(this);
        this.createIssue = this.createIssue.bind(this);
        this.deleteIssue = this.deleteIssue.bind(this);
    }

    deleteIssue(id) {
        console.log("user want to delelte me```");
        fetch(`/api/issues/${id}`, { method: 'DELETE' }).then(response => {
            console.log("the response data is: ", response.json());
            // if (!response.ok) this.props.showError('Failed to delete issue');
            // else this.loadData();
            this.loadData();
        });
    }

    componentDidMount() {
        console.log("开始执行请求函数");
        this.loadData(this.props.location.search);
    }

    componentDidUpdate(prevProps, prevState) {
        const oldQuery = prevProps.location.search;
        const newQuery = this.props.location.search;
        console.log("以前的数据是: ", oldQuery);
        console.log("现在的数据是: ", newQuery);
        if (oldQuery === newQuery) {
            return;
        }
        this.loadData(this.props.location.search);
    }

    setFilter(query) {
        console.log("this.props.history is 1: ", this.props.history);
        this.props.history.replace('/issues?' + qs.stringify(query));
        console.log("this.props.history is 2: ", this.props.history);
        console.log("query是： ", query);
    };

    loadData(q) {
        console.log("开始请求原始数据");
        console.log(this.props.location);
        console.log("qqqqqq: ", q);
        fetch(`/api/issues${q}`).then(response => {
            console.log("原始数据请求成功");
            if (response.ok) {
                response.json().then(data => {
                    console.log(data._metadata.total_count);
                    data.records.forEach(issue => {
                        issue.created = new Date(issue.created);
                        if (issue.completionDate) {
                            issue.completionDate = new Date(issue.completionDate);
                        }
                    });
                    console.log("最后现实的数据数据:", data.records);
                    this.setState({ issues: data.records });
                });
            } else {
                response.json().then(error => {
                    alert("Failed");
                })
            }
        }).catch(err => {
            alert("Error")
        });
    }

    createIssue(newIssue) {
        console.log("触发post请求");
        fetch('/api/issues', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newIssue),
        }).then(response => { return response.json() }).then(
            updatedIssue => {
                console.log("here 1: " + updatedIssue)
                updatedIssue.created = new Date(updatedIssue.created);
                console.log(updatedIssue.created);
                if (updatedIssue.completionDate) {
                    updatedIssue.completionDate = new Date(updatedIssue.completionDate);
                }
                const newIssues = this.state.issues.concat(updatedIssue);
                console.log(newIssues);
                this.setState({ issues: newIssues });
            }
        ).catch(err => {
            alert(err.message);
        })
    }

    render() {
        return (
            <div>
                <h1>This is ykk's place.</h1>
                <IssueFilter setFilter={this.setFilter} choosePars={this.choosePars} initFilter={this.props.location.search} />
                <hr />
                <IssueTable issues={this.state.issues} deleteIssue={this.deleteIssue} />
                <hr />
                <IssueAdd createIssue={this.createIssue} />
            </div>
        )
    }
}