import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, CardBody, CardText, Card } from 'mdbreact'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="card-size container">
              <Card className='z-depth-1'>
                  <CardBody>
                      <Button color="primary">
                          Login
                      </Button>
                      <CardText>
                          Create Account
                      </CardText>
                  </CardBody>
              </Card>
          </div>
      </div>
    );
  }
}

export default App;
