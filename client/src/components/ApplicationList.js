import React, { Component } from 'react';
import { PageHeader, Table } from 'react-bootstrap';

class ApplicationList extends Component {
  render() {
    return (
      <div>
        <PageHeader>Applications</PageHeader>

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
      </div>
    );
  }
}

export default ApplicationList;