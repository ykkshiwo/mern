// import IssueAdd from './IssueAdd.jsx'
import IssueFilter from './IssueFilter.jsx';
import React from 'react';
import 'isomorphic-fetch';
import { Link, } from 'react-router-dom';
import { Button, Glyphicon, Table, Panel, Pagination } from 'react-bootstrap';
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
            <td>
                <span onClick={onDeleteClick} className="glyphicon glyphicon-trash"></span>
            </td>
        </tr>
    );
};

function IssueTable(props) {
    console.log("问题渲染的数据： ", this.props.issues);
    const IssueRows = props.issues.map(issue => <IssueRow key={issue._id} issue={issue} deleteIssue={props.deleteIssue} />);
    return (
        <Table condensed hover responsive bordered>
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
        </Table>
    )
}

const PAGE_SIZE = 10;

export default class IssueList extends React.Component {

    // static dataFetcher({ urlBase, location }) {
    //     const query = Object.assign({}, location.query);
    //     const pageStr = query._page;
    //     if (pageStr) {
    //         delete query._page;
    //         query._offset = (parseInt(pageStr, 10) - 1) * PAGE_SIZE;
    //     }
    //     query._limit = PAGE_SIZE;
    //     const search = Object.keys(query).map(k => `${k}=${query[k]}`).join('&');
    //     return fetch(`${urlBase || ''}/api/issues?${search}`).then(response => {
    //         if (!response.ok) return response.json().then(error => Promise.reject(error));
    //         return response.json().then(data => ({ IssueList: data }));
    //     });
    // }

    // constructor() {
    //     super();
    //     this.state = { issues: [] };
    //     this.choosePars = "ykk";
    //     this.setFilter = this.setFilter.bind(this);
    //     this.createIssue = this.createIssue.bind(this);
    //     this.deleteIssue = this.deleteIssue.bind(this);
    // }

    constructor(props, context) {
        super(props, context);
        console.log("context的值是：", this.props.staticContext);
        console.log("渲染的数据的值是：", this.props.staticContext.i.records);
        // const data = context.initialState.IssueList ? context.initialState.IssueList
        //   : { metadata: { totalCount: 0 }, records: [] };
        // const issues = data.records;
        // issues.forEach(issue => {
        //   issue.created = new Date(issue.created);
        //   if (issue.completionDate) {
        //     issue.completionDate = new Date(issue.completionDate);
        //   }
        // });
        this.state = {
            // issues: 'ykujh',
            issues: this.props.staticContext.i.records,
        };

        // this.setFilter = this.setFilter.bind(this);
        // this.selectPage = this.selectPage.bind(this);
        // this.deleteIssue = this.deleteIssue.bind(this);
    }

    // selectPage(eventKey) {
    //     const query = Object.assign(this.props.location.query, { _page: eventKey });
    //     this.props.router.push({ pathname: this.props.location.pathname, query });
    // }

    // deleteIssue(id) {
    //     console.log("user want to delelte me```");
    //     fetch(`/api/issues/${id}`, { method: 'DELETE' }).then(response => {
    //         console.log("the response data is: ", response);
    //         if (!response.ok) this.props.showError('Failed to delete issue');
    //         else {
    //             console.log("start loaddata```")
    //             this.loadData(this.props.location.search);
    //         }
    //     });
    // }

    // componentDidMount() {
    //     console.log("开始执行请求函数");
    //     console.log(this.state.issues);
    //     this.loadData(this.props.location.search);
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     const oldQuery = prevProps.location.search;
    //     const newQuery = this.props.location.search;
    //     console.log("以前的数据是: ", oldQuery);
    //     console.log("现在的数据是: ", newQuery);
    //     if (oldQuery === newQuery) {
    //         return;
    //     }
    //     console.log("the search is: ", this.props.location.search);
    //     this.loadData(this.props.location.search);   //页面渲染完成以后调用
    // }

    // setFilter(query) {
    //     console.log("this.props.history is 1: ", this.props.history);
    //     this.props.history.replace('/issues?' + qs.stringify(query));
    //     console.log("url即将替换为：", '/issues?' + qs.stringify(query));
    //     console.log("this.props.history is 2: ", this.props.history);
    // };

    // loadData(q) {
    //     console.log("开始请求原始数据");
    //     console.log(this.props.location);
    //     console.log("qqqqqq: ", q);
    //     fetch(`/api/issues${q}`).then(response => {
    //         console.log("原始数据请求成功: ", response);
    //         if (response.ok) {
    //             console.log("返回的response数据是： ", response);
    //             response.json().then(data => {
    //                 console.log("请求的数据调回: ", data);
    //                 // console.log(data._metadata.total_count);
    //                 data.records.forEach(issue => {
    //                     issue.created = new Date(issue.created);
    //                     if (issue.completionDate) {
    //                         issue.completionDate = new Date(issue.completionDate);
    //                     }
    //                 });
    //                 console.log("最后需要渲染的数据数据:", data.records);
    //                 this.setState({ issues: data.records });
    //             });
    //         } else {
    //             response.json().then(error => {
    //                 alert("Failed");
    //             })
    //         }
    //     }).catch(err => {
    //         alert("Error")
    //     });
    // }

    // createIssue(newIssue) {
    //     console.log("触发post请求");
    //     fetch('/api/issues', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(newIssue),
    //     }).then(response => { return response.json() }).then(
    //         updatedIssue => {
    //             console.log("here 1: " + updatedIssue)
    //             updatedIssue.created = new Date(updatedIssue.created);
    //             console.log(updatedIssue.created);
    //             if (updatedIssue.completionDate) {
    //                 updatedIssue.completionDate = new Date(updatedIssue.completionDate);
    //             }
    //             const newIssues = this.state.issues.concat(updatedIssue);
    //             console.log(newIssues);
    //             this.setState({ issues: newIssues });
    //         }
    //     ).catch(err => {
    //         alert(err.message);
    //     })
    // }

    render() {
        return (
            <div>
                <h1>This is ykk's place.</h1>
                {/* <Panel header='Filter'>
                    <IssueFilter setFilter={this.setFilter} choosePars={this.choosePars} initFilter={this.props.location.search} />
                </Panel>
                <IssueTable issues={this.state.issues} deleteIssue={this.deleteIssue} />
                <hr /> */}
                {/* <IssueAdd createIssue={this.createIssue} /> */}
                {JSON.stringify(this.state.issues)}
            </div>
        )
    }
}