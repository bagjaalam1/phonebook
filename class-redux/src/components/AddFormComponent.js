import React, { Component } from "react";
import { connect } from "react-redux";
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
import { addContact } from "../redux/store";

class AddFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddFormVisible: false,
      name: "",
      phone: "",
    };
  }

  toggleAddForm = () => {
    this.setState((prevState) => ({
      isAddFormVisible: !prevState.isAddFormVisible,
    }));
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone } = this.state;
    this.props.addContact(name, phone);
    console.log(name, phone);
    // reset form values
    this.setState({ name: "", phone: "" });
  };

  render() {
    const { isAddFormVisible, name, phone } = this.state;

    return (
      <div>
        {!isAddFormVisible ? (
          <Button
            color="primary"
            onClick={this.toggleAddForm}
            style={{ boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
          >
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
                      value={name}
                      onChange={this.handleNameChange}
                    />
                  </Col>
                  <Label for="phone">Phone</Label>
                  <Col>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="phone"
                      type="text"
                      value={phone}
                      onChange={this.handlePhoneChange}
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

const mapDispatchToProps = {
  addContact,
};

export default connect(null, mapDispatchToProps)(AddFormComponent);
