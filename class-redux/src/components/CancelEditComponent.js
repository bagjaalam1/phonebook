import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FaBan } from 'react-icons/fa';

class CancelEditComponent extends Component {
  render() {
    const { handleCancelEdit } = this.props;

    return (
      <Button color="warning" onClick={handleCancelEdit}>
        <FaBan /> Cancel
      </Button>
    );
  }
}

export default CancelEditComponent;
