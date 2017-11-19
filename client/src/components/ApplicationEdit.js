import React, { Component } from 'react';
import { Button, Modal, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

class ApplicationEdit extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: '',
      isSubmiting: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  getValidationState() {
    //Validate name
    const length = this.state.name.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  };

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  };

  handleSubmit(e) {
    this.setState({ isSubmiting: true });
    var application = {
      name: this.state.name
    };
    setTimeout(() => {
      // Completed of async action, set loading state back

      this.setState({ isSubmiting: false });
      this.props.onAdd(application);
      this.props.close();
    }, 2000);
  };

  render() {
    return (
      <div>

        <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>New application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <ControlLabel>Name</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.name}
                  placeholder="Enter text"
                  onChange={this.handleNameChange}
                />
                <FormControl.Feedback />
                <HelpBlock>Meaningful applicayion name. Minimum 5 characters.</HelpBlock>
              </FormGroup>
              <hr />
              <h4>Note</h4>
              <p>After saving your application will be able to use specified Messsaging features.</p>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.close}>Close</Button>
            <Button type='submit' bsStyle='primary'
              onClick={this.handleSubmit}
              disabled={this.state.isSubmiting}>
              {!this.state.isSubmiting ? 'Create' : 'Creating...'}
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

export default ApplicationEdit;