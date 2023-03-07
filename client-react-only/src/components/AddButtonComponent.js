import React, { Component } from "react";
import { Button } from "reactstrap";
import { FaPlus } from "react-icons/fa";

class AddButtonComponent extends Component {
  render() {
    const { toggleAddForm } = this.props;
    return (
      <Button
        color="primary" 
        onClick={toggleAddForm}
        style={{ boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
      >
        <FaPlus /> Add
      </Button>
    );
  }
}

export default AddButtonComponent;