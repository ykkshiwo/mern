import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap';

export default class IssueAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log("触发add按钮了");
        e.preventDefault();
        var form = document.forms.issueAdd;
        this.props.createIssue({
            owner: form.owner.value,
            title: form.title.value,
            status: 'New',
            created: new Date(),
        });
        form.owner.value = ""; form.title.value = "";
    }

    render() {
        return (
            <div>
                <Form inline name="issueAdd" onSubmit={this.handleSubmit}>
                    <FormControl type="text" name="owner" placeholder="Owner" />
                    <FormControl type="text" name="title" placeholder="Title" />
                    <Button type='submit'>Add</Button>
                </Form>
            </div>
        )
    }
}