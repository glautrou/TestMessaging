import React, { Component } from 'react';
import { PageHeader, Table, Button, Modal } from 'react-bootstrap';
import ApplicationEdit from './ApplicationEdit';
import ApplicationListItem from './ApplicationListItem';

const applications = [
  { id: 1, name: 'Application 1', date: '01/01/2017 01:00' },
  { id: 2, name: 'Application 2', date: '01/01/2017 01:00' },
  { id: 3, name: 'Application 3', date: '01/01/2017 01:00' }
];

class ApplicationList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      applications: applications,
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
    var application = {
      id: '',
      name: data.name,
      date: ''
    };
    console.log(application);
    applications.push(application);
    this.setState({ applications: applications });
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
          {
              this.state.applications.map((application, i) => {
                return <ApplicationListItem key={i} id={application.id} name={application.name} date={application.date} />;
              })
            }

            
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