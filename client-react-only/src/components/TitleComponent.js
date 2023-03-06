import React, { Component } from 'react';
import { Container } from 'reactstrap';

class TitleComponent extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#F5F5F5', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
        <Container className="text-center py-4">
          <h1>Phone Book Apps</h1>
        </Container>
      </div>
    );
  }
}

export default TitleComponent;
