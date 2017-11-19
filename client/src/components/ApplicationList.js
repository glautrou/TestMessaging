import React, { Component } from 'react';
import { PageHeader, Table, Button, Modal } from 'react-bootstrap';
import ApplicationEdit from './ApplicationEdit';

class ApplicationList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showAddModal: false
    };

    this.openAddModal = this.openAddModal.bind(this);
    this.closeAddModal = this.closeAddModal.bind(this);
    this.handleApplicationAdded = this.handleApplicationAdded.bind(this);
  };

  openAddModal() {
    this.setState({ showAddModal: true });
  };

  closeAddModal() {
    this.setState({ showAddModal: false });
  };

  handleApplicationAdded(data) {
    alert('New application: ' + data.name);
  };

  render() {
    return (
      <div>
        <PageHeader>Applications</PageHeader>
        <p>
          <Button bsStyle="primary" bsSize="large" onClick={this.openAddModal}>Add application</Button>
        </p>

        <Table responsive striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Creation date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Application 1</td>
              <td>18/11/2017</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Application 2</td>
              <td>19/11/2017</td>
            </tr>
          </tbody>
        </Table>

        <ApplicationEdit
          show={this.state.showAddModal}
          close={this.closeAddModal}
          onAdd={this.handleApplicationAdded} />

      </div>
    );
  }
}

export default ApplicationList;