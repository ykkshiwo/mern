import React from 'react';
import { Link } from 'react-router-dom';

export default class IssueEdit extends React.Component {
    render() {
        return (
            <div>
                <p>this is a placehold ykk ok 5556 {this.props.match.params.id}</p>
                <Link to="/issues">Back</Link>
            </div>
        )
    }
}

// IssueEdit.PropTypes = {
//     params: React.PropTypes.object.isRequired,
// }