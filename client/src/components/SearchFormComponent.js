import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Label,
  Input,
  Row,
  Col,
  Form,
} from "reactstrap";

function SearchFormComponent() {
  return (
    <Card>
      <CardHeader style={{ boxShadow: "0 0 3px rgba(0,0,0,0.2)" }}>
        <h5 className="mb-0">Search Form</h5>
      </CardHeader>
      <CardBody style={{ boxShadow: "0 0 3px rgba(0,0,0,0.2)" }}>
        <Form>
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
            <Label for="phone">
              Phone
            </Label>
            <Col>
              <Input
                id="phone"
                name="phone"
                placeholder="phone"
                type="text"
              />
            </Col>
            <Col></Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
}

export default SearchFormComponent;
