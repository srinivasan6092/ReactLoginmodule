import React from 'react';
import { Panel, Form, FormGroup, Button, ControlLabel, FormControl } from 'react-bootstrap';

const loginbtcolor = {
  backgroundColor: '#f44336',
  color: 'black',
  textShadow: 'none',
  backgroundImage: 'none',
};

class Loginform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handelOnLogin = this.handelOnLogin.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handelOnLogin(event) {
    alert(`Login =${this.state.userName}`);
    event.preventDefaullt();
  }
  render() {
    return (
      <Panel >
        <Panel.Body>
          <Form >
            <FormGroup controlId="userName" >
              <ControlLabel>User Name</ControlLabel>
              <FormControl type="text" value={this.state.userName} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup controlId="password" >
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" value={this.state.password} onChange={this.handleChange} />
            </FormGroup>
            <Button type="button" style={loginbtcolor} bsSize="large" block onClick={this.handelOnLogin}>Log in</Button>
          </Form>
        </Panel.Body>
      </Panel>
    );
  }
}


export default Loginform;
