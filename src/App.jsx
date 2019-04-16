import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, HashRouter, Redirect, withRouter, Route, BrowserRouter, history, Switch } from 'react-router-dom';
import { Button, ButtonToolbar, Nav, Navbar, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import { Router, Route, } from 'react-router';

import IssueEdit from './IssueEdit.jsx';
import IssueList from './IssueList.jsx';
import IssueAddNavItem from './IssueAddNavItem.jsx';
import IssueReport from './IssueReport.jsx';

const contentNode = document.getElementById("contents");
const NoMatch = () => <p>Pagee Not Found</p>;

const Header = () => (
    <Navbar fluid>
        <Navbar.Header>
            <Navbar.Brand>Issue Tracker</Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <LinkContainer to="/issues">
                <NavItem>Issues</NavItem>
            </LinkContainer>
            <LinkContainer to="/reports">
                <NavItem>Reports</NavItem>
            </LinkContainer>
        </Nav>
        <Nav pullRight>
            {/* <NavItem><Glyphicon glyph="plus"> Create Issue </Glyphicon></NavItem> */}
            <IssueAddNavItem />
            <NavDropdown id='user-dropdown' title={<Glyphicon glyph='option-horizontal' />} noCaret>
                <MenuItem>Logout1</MenuItem>
                <MenuItem>Logout2</MenuItem>
            </NavDropdown>
        </Nav>
    </Navbar>
)

const App = (props) => (
    <div>
        <Header />
        {/* <Button>dsadafs</Button> */}
        {/* <IssueAddNavItem /> */}
        <div className="header">
            <h1>Issue Tracker</h1>
        </div>

        <div className="container-fluid">
            {props.children}
            <hr />
            <h5>
                <small>
                    please visit this <a href="https://www.baidu.com"> here </a>
                </small>
            </h5>
        </div>
    </div>
)

class Testt extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <h1>hello world</h1>
        );
    }
}

const RoutedApp = () => (
    <BrowserRouter>
        <Route exact path="/" render={() =>
            <Redirect to={'/issues'}></Redirect>}>
        </Route>
        <App>
            <Switch>
                <Route exact path='/issues' component={IssueList} />
                <Route exact path='/reports' component={IssueReport} />
                <Route exact path='/issues/:id' component={IssueEdit} />
                <Route component={NoMatch} />
            </Switch>
        </App>
    </BrowserRouter>
)

ReactDOM.render(<RoutedApp />, contentNode);
