import React, { Component } from 'react'
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
import { FaPencilAlt } from 'react-icons/fa';
import CancelButtonComponent from './CancelButtonComponent';

export default class AddFormComponent extends Component {
  render() {
    const { toggleAddForm, handleSubmit, handleNameChange, handlePhoneChange, name, phone } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
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
                      onChange={handleNameChange}
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
                      onChange={handlePhoneChange}
                    />
                  </Col>
                  <Button color="success" type="submit" className="text-white">
                    <FaPencilAlt className="mr-2" /> Save
                  </Button>
                  <CancelButtonComponent toggleAddForm ={toggleAddForm} />
                </Row>
              </CardBody>
            </Card>
          </Form>
    )
  }
}
