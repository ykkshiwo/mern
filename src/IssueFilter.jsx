import React from 'react';
import { Link } from 'react-router-dom';
const qs = require('query-string');

export default class IssueFilter extends React.Component {
    constructor(props) {
        super(props);
        console.log("输出：", props);
        const params = {};
        this.params = qs.parseUrl(props.initFilter).query;
        console.log("输出 params : ", params);
        this.state = {
            status: params.status || '',
            effort_gte: params.effort_gte || '',
            effort_lte: params.effort_lte || '',
            change: false,
        };
        console.log("输出 this.state : ", this.state);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeEffortGte = this.onChangeEffortGte.bind(this);
        this.onChangeEffortLte = this.onChangeEffortLte.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
        this.applyFilter = this.applyFilter.bind(this);
        this.resetFilter = this.resetFilter.bind(this);
    }

    componentWillReceiveProps(newProps) {
        console.log("输出 newProps：", newProps)
        this.setState({
            status: this.params.status || '',
            effort_gte: this.params.effort_gte || '',
            effort_lte: this.params.effort_lte || '',
            changed: false,
        })
    }

    resetFilter() {
        this.setState({
            status: this.params.status || '',
            effort_gte: this.params.effort_gte || '',
            effort_lte: this.params.effort_lte || '',
            changed: false,
        })
    }

    applyFilter() {
        const newFilter = {};
        if (this.state.status) newFilter.status = this.state.status;
        if (this.state.effort_gte) newFilter.effort_gte = this.state.effort_gte;
        if (this.state.effort_lte) newFilter.effort_lte = this.state.effort_lte;
        console.log("提交上去的数据：", newFilter);
        this.props.setFilter(newFilter);
    }

    clearFilter(e) {
        this.props.setFilter({});
    }

    onChangeStatus(e) {
        console.log("选择器在变化：", e);
        this.setState({ status: e.target.value, changed: true });
    }

    onChangeEffortGte(e) {
        const effortString = e.target.value;
        console.log("gte在变化：", effortString);
        if (effortString.match(/^\d*$/)) {
            this.setState({ effort_gte: e.target.value, changed: true });
        }
    }

    onChangeEffortLte(e) {
        const effortString = e.target.value;
        console.log("lte在变化：", effortString);
        if (effortString.match(/^\d*$/)) {
            this.setState({ effort_lte: e.target.value, changed: true });
        }
    }

    render() {
        const Separator = () => <span> | </span>;
        return (
            <div>
                Status:
                <select value={this.state.status} onChange={this.onChangeStatus}>
                    <option value="">(Any)</option>
                    <option value="New">New</option>
                    <option value="Open">Open</option>
                    <option value="Assigned">Assigned</option>
                    <option value="Fixed">Fixed</option>
                    <option value="Verified">Verified</option>
                    <option value="Closed">Closed</option>
                </select>
                &nbsp;Effort between:
                <input size={5} value={this.state.effort_gte} onChange={this.onChangeEffortGte}></input>
                &nbsp;-&nbsp;
                <input size={5} value={this.state.effort_lte} onChange={this.onChangeEffortLte}></input>
                <button onClick={this.applyFilter}>Apply</button>
                <button onClick={this.resetFilter} disabled={!this.state.changed}>Reset</button>
                <button onClick={this.clearFilter}>Clear</button>
            </div>
        )
    }
}