import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavItem, Glyphicon, Modal, Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar } from 'react-bootstrap';

class IssueAddNavItem extends React.Component {
    constructor() {
      super();
      this.state = {
        showing: false,
        test: 'are you',
      };
      this.showModals = this.showModals.bind(this);
      this.hideModal = this.hideModal.bind(this);
      this.submit = this.submit.bind(this);
      this.change = this.change.bind(this);
    }
  
    showModals() {
      this.setState({ showing: true });
    }
  
    hideModal() {
        console.log("关掉这个恶心的模态框。");
        this.setState({});
        const that = this;
        setTimeout(function(){
            console.log(that.state);
        }, 5000);
    }

    change(){
        console.log("改变");
        this.setState({test: 'ccc', showing: false})
        const that = this;
        setTimeout(function(){
            console.log(that.state);
        }, 5000);
    }
  
    submit(e) {
      e.preventDefault();
      this.hideModal();
      this.setState({test: 'ccc', showing: false})
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
        <Button onClick={this.showModals}>Create Issue
          <Modal keyboard show={this.state.showing} onHide={this.change}>
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
                  <FormControl name="owner" onChange={this.change}/>
                </FormGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button type="button" bsStyle="primary" onClick={this.submit}>Submit</Button>
                <Button bsStyle="link" onClick={this.change}>Cancel</Button> */}
                <Button variant="secondary" onClick={this.submit}>Close</Button>
                <Button variant="primary" onClick={this.change}>Save Changes</Button>
            </Modal.Footer>
          </Modal>
        </Button>
      );
    }
  }
  
//   IssueAddNavItem.propTypes = {
//     router: React.PropTypes.object,
//     showError: React.PropTypes.func.isRequired,
//   };
  
export default withRouter(IssueAddNavItem);
  