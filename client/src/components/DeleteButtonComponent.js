import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FaTrash } from 'react-icons/fa';

export default class DeleteButtonComponent extends Component {
  handleClick = () => {
    console.log(`Delete item with id ${this.props.itemId}`);
  }

  render() {
    return (
      <Button color="danger" size="sm" onClick={this.handleClick}>
        <FaTrash /> Delete
      </Button>
    )
  }
}
