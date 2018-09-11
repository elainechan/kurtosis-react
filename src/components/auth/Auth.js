import React from 'react';
import Register from '../register/Register';
import Login from '../login/Login';
import { Button, Modal, Tabs, Tab, TabContainer, TabContent, TabPane } from 'react-bootstrap';

export default class Auth extends React.Component {
	constructor(props, context) {
    super(props, context);
		this.handleHide = this.handleHide.bind(this);
		this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1
    };
	}
	// Modal
	handleHide() {
		this.setState({
			show: false
		});
  }
	// Tabs
  handleSelect(key) {
    console.log(`selected ${key}`);
    this.setState({ key });
  }

  render() {
    return (
			<div className="modal-container" style={{ height: 200 }}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true })}
        >
          Register / Log In
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

 						<Tabs
							activeKey={this.state.key}
							onSelect={this.handleSelect}
							id="controlled-tab-example"
						>
							<Tab eventKey={1} title="Register">
								<Register />
							</Tab>
							<Tab eventKey={2} title="Log In">
								<Login />
							</Tab>
						</Tabs>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
     
    );
  }
}