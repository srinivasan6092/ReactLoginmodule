import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Loginform from './Loginform';

const styleleftdiv = {
  backgroundColor: '#002984',
  height: '100%',
};

const stylerightdiv = {
  paddingTop: '15%',
};

const maindiv = {
  marginLeft: 0,
  marginRight: 0,
};
const Login = () => (
  <Grid style={maindiv}>
    <Row className="show-grid">
      <Col xsHidden md={6} smHidden style={styleleftdiv} />
      <Col xsHidden md={1} smHidden style={stylerightdiv} />
      <Col xs={12} md={5} sm={12} style={stylerightdiv}>
        <Loginform />
      </Col>
    </Row>
  </Grid>

);

export default Login;
