import React from 'react';
import { Link } from 'react-router-dom';
import { Server } from 'https';
import { FormGroup, FormControl, ControlLabel, ButtonToolbar, Button, Panel, Form, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import NumInput from './NumInput.jsx';
import DateInput from './DateInput.jsx';

export default class IssueEdit extends React.Component {
    constructor() {
        super();
        this.state = {
            issue: {
                _id: '', title: '', status: '', owner: '', effort: '',
                completionDate: '', created: null,
            },
            invalidFields: {},
        };
        this.onChange = this.onChange.bind(this);
        this.onValidityChange = this.onValidityChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        if (Object.keys(this.state.invalidFields).length !== 0) {
            return;
        }
        fetch(`/api/issues/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.issue),
        }).then(response => {
            if (response.ok) {
                response.json().then(updatedIssue => {
                    updatedIssue.created = new Date(updatedIssue.created);
                    if (updatedIssue.completionDate) {
                        updatedIssue.completionDate = new Date(updatedIssue.completionDate);
                    }
                    this.setState({ issue: updatedIssue });
                    this.props.showSuccess('Updated issue successfully.');
                });
            } else {
                response.json().then(error => {
                    this.props.showError(`Failed to update issue: ${error.message}`);
                });
            }
        }).catch(err => {
            this.props.showError(`Error in sending data to server: ${err.message}`);
        });
    }

    onValidityChange(event, valid) {
        const invalidFields = Object.assign({}, this.state.invalidFields);
        if (!valid) {
            invalidFields[event.target.name] = true;
        } else {
            delete invalidFields[event.target.name];
        }
        this.setState({ invalidFields });
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadData();
        }
    }

    onChange(event, convertedValue) {
        console.log("change is now from ....");
        const issue = Object.assign({}, this.state.issue);  //这里是什么意思？
        const value = (convertedValue !== undefined) ? convertedValue : event.target.value;
        console.log("the value time is: ", value);
        issue[event.target.name] = value;
        console.log("the father issueEdit issue is: ", issue);
        this.setState({ issue });
    }

    loadData() {
        fetch(`/api/issues/${this.props.match.params.id}`).then(response => {
            if (response.ok) {
                response.json().then(issue => {
                    issue.created = new Date(issue.created);
                    issue.completionDate = issue.completionDate != null ? new Date(issue.completionDate) : null;
                    // issue.effort = issue.effort != null ? issue.effort.toString() : '';
                    this.setState({ issue });
                })
            } else {
                response.json().then(error => {
                    alert(`Failed to fetch issue; ${error.message}`);
                });
            }
        }).catch(err => {
            alert(`Error in fetch data from Server: ${error.message}`);
        });
    }

    render() {
        // const issue = this.state.issue;
        // const validationMessage = Object.keys(this.state.invalidFields).length === 0 ? null : (<div className="error">Please correct invalid fields before submitting</div>)
        // return (
        //     <div>
        //         <form onSubmit={this.onSubmit}>
        //             ID: {issue._id}
        //             <br />
        //             Created: {issue.created ? issue.created.toDateString() : ''}
        //             <br />
        //             Status: <select name="status" value={issue.status} onChange={this.onChange}>
        //                 <option value="">(Any)</option>
        //                 <option value="New">New</option>
        //                 <option value="Open">Open</option>
        //                 <option value="Assigned">Assigned</option>
        //                 <option value="Fixed">Fixed</option>
        //                 <option value="Verified">Verified</option>
        //                 <option value="Closed">Closed</option>
        //             </select>
        //             <br />
        //             Owner: <input name='owner' value={issue.owner} onChange={this.onChange} />
        //             <br />
        //             Effort: <NumInput size={5} name='effort' value={issue.effort} onChange={this.onChange} />
        //             <br />
        //             Completion Date: <DateInput name='completionDate' value={issue.completionDate} onChange={this.onChange} onValidityChange={this.onValidityChange} />
        //             <br />
        //             Title: <input size={50} name='title' value={issue.title} onChange={this.onChange} />
        //             <br />
        //             {validationMessage}
        //             <button type="submit">Submit</button>
        //             <Link to="/issues">Back</Link>
        //         </form>
        //     </div>
        // )
        const issue = this.state.issue;
        let validationMessage = null;
        if (Object.keys(this.state.invalidFields).length !== 0 && this.state.showingValidation) {
            validationMessage = (
                <Alert bsStyle="danger" onDismiss={this.dismissValidation}>
                    Please correct invalid fields before submitting.
        </Alert>
            );
        }
        return (
            <Panel header="Edit Issue">
                <Form horizontal onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={3}>ID</Col>
                        <Col sm={9}>
                            <FormControl.Static>{issue._id}</FormControl.Static>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={3}>Created</Col>
                        <Col sm={9}>
                            <FormControl.Static>
                                {issue.created ? issue.created.toDateString() : ''}
                            </FormControl.Static>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={3}>Status</Col>
                        <Col sm={9}>
                            <FormControl
                                componentClass="select" name="status" value={issue.status}
                                onChange={this.onChange}
                            >
                                <option value="New">New</option>
                                <option value="Open">Open</option>
                                <option value="Assigned">Assigned</option>
                                <option value="Fixed">Fixed</option>
                                <option value="Verified">Verified</option>
                                <option value="Closed">Closed</option>
                            </FormControl>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={3}>Owner</Col>
                        <Col sm={9}>
                            <FormControl name="owner" value={issue.owner} onChange={this.onChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={3}>Effort</Col>
                        <Col sm={9}>
                            <FormControl
                                componentClass={NumInput} name="effort"
                                value={issue.effort} onChange={this.onChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup validationState={this.state.invalidFields.completionDate ? 'error' : null}>
                        <Col componentClass={ControlLabel} sm={3}>Completion Date</Col>
                        <Col sm={9}>
                            <FormControl
                                componentClass={DateInput} name="completionDate"
                                value={issue.completionDate} onChange={this.onChange}
                                onValidityChange={this.onValidityChange}
                            />
                            <FormControl.Feedback />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={3}>Title</Col>
                        <Col sm={9}>
                            <FormControl name="title" value={issue.title} onChange={this.onChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={3} sm={6}>
                            <ButtonToolbar>
                                <Button bsStyle="primary" type="submit" >
                                    Submit
                </Button>
                                <LinkContainer to="/issues">
                                    <Button bsStyle="link">Back</Button>
                                </LinkContainer>
                            </ButtonToolbar>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={3} sm={9}>{validationMessage}</Col>
                    </FormGroup>
                </Form>
            </Panel>
        );
    }
}

// IssueEdit.PropTypes = {
//     params: React.PropTypes.object.isRequired,
// }