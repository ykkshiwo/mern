import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavItem, Glyphicon, Modal, Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, Textarea } from 'react-bootstrap';

class IssueAddNavItem extends React.Component {

  constructor() {
    super();
    this.state = {
      showing: false,
      test: 'are you',
    };
    this.need_close = false;
    this.showModals = this.showModals.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.submit = this.submit.bind(this);
  }

  showModals() {
    console.log("点击显示");
    console.log(this.need_close);
    if (this.need_close) {
      this.need_close = false;
      return;
    } else {
      this.setState({ showing: true });
    }
  }

  hideModal() {
    console.log("关掉这个恶心的模态框。");
    this.setState({ showing: false });
    this.need_close = true;
  }

  submit(e) {
    e.preventDefault();
    this.hideModal();
    this.setState({ test: 'ccc', showing: false })
    console.log(this.state);
    const form = document.forms.issueAdd;
    const newIssue = {
      owner: form.owner.value, title: form.title.value,
      status: 'New', created: new Date(),
    };
    fetch('/api/issues', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newIssue),
    }).then(response => {
      if (response.ok) {
        response.json().then(updatedIssue => {
          // this.props.router.push(`/issues/${updatedIssue._id}`);
          this.props.history.replace('/issues/' + updatedIssue._id);
        });
      } else {
        response.json().then(error => {
          this.props.showError(`Failed to add issue: ${error.message}`);
        });
      }
    }).catch(err => {
      this.props.showError(`Error in sending data to server: ${err.message}`);
    });
  }

  render() {
    return (
      <NavItem onClick={this.showModals}><Glyphicon glyph="plus" />Create Issue
          <Modal show={this.state.showing} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create Issue</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form name="issueAdd">
              <FormGroup>
                <ControlLabel>Title</ControlLabel>
                <FormControl name="title" autoFocus />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Owner</ControlLabel>
                <FormControl name="owner" />
              </FormGroup>
            </Form>
            {/* <input onClick={this.change}></input> */}
            {/* <button onClick={this.change}>Close</button> */}
            {/* <Button variant="secondary" onClick={() => { console.log("我要直接实现"); this.setState({ showing: false }) }}>关闭</Button> */}
          </Modal.Body>
          <Modal.Footer>
            {/* <Button type="button" bsStyle="primary" onClick={this.submit}>Submit</Button>
                <Button bsStyle="link" onClick={this.change}>Cancel</Button> */}
            <Button variant="secondary" onClick={this.hideModal}>Close</Button>
            <Button variant="primary" onClick={this.submit}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </NavItem>
    );
  }
}

//   IssueAddNavItem.propTypes = {
//     router: React.PropTypes.object,
//     showError: React.PropTypes.func.isRequired,
//   };

export default withRouter(IssueAddNavItem);
