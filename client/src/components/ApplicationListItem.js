import React, { Component } from 'react';

class ApplicationListItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.date}</td>
            </tr>
        );
    }
}

export default ApplicationListItem;