import React, { Component } from "react";
import { FaPlus, FaPencilAlt, FaBan } from "react-icons/fa";
import {
  Button,
  Form,
  Label,
  Input,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";

export default class AddFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddFormVisible: false,
      name: "",
      phone: "",
    };
  }

  toggleAddForm = () => {
    this.setState({ isAddFormVisible: !this.state.isAddFormVisible });
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name, this.state.phone);
    // reset form values
    this.setState({ name: "", phone: "" });
  };

  render() {
    return (
      <div>
        {!this.state.isAddFormVisible ? (
          <Button color="primary" onClick={this.toggleAddForm} style={{ boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}>
            <FaPlus /> Add
          </Button>
        ) : (
          <Form onSubmit={this.handleSubmit}>
            <Card>
              <CardHeader style={{ boxShadow: "0 0 3px rgba(0,0,0,0.2)" }}>
                <h5 className="mb-0">Adding Form</h5>
              </CardHeader>
              <CardBody style={{ boxShadow: "0 0 3px rgba(0,0,0,0.2)" }}>
                <Row className="row-cols-lg-auto g-3 align-items-center">
                  <Label for="name">name</Label>
                  <Col>
                    <Input
                      id="name"
                      name="name"
                      placeholder="name"
                      type="text"
                    />
                  </Col>
                  <Label for="phone">Phone</Label>
                  <Col>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="phone"
                      type="text"
                    />
                  </Col>
                  <Button color="success" type="submit" className="text-white">
                    <FaPencilAlt className="mr-2" /> Save
                  </Button>
                  <Button
                    color="warning"
                    onClick={this.toggleAddForm}
                    className="text-white"
                  >
                    <FaBan className="mr-2" /> Cancel
                  </Button>
                </Row>
              </CardBody>
            </Card>
          </Form>
        )}
      </div>
    );
  }
}

// import React from 'react';
// import { Button } from 'reactstrap';
// import { FaPlus } from 'react-icons/fa';

// function AddButtonComponent() {
//   return (
//     <Button color="primary">
//       <FaPlus /> Add
//     </Button>
//   );
// }

// export default AddButtonComponent;
