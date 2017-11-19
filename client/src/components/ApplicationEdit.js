import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class ApplicationEdit extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>New application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            <hr />
            <h4>Note</h4>
            <p>After saving your application will be able to use specified Messsaging features.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ApplicationEdit;