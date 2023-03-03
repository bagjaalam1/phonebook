import React, { useState } from "react";
import { useDispatch } from "react-redux";
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

const AddFormComponent = () => {
  const dispatch = useDispatch();
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const toggleAddForm = () => {
    setIsAddFormVisible(!isAddFormVisible);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(name, phone));
    console.log(name, phone);
    // reset form values
    setName("");
    setPhone("");
  };

  return (
    <div>
      {!isAddFormVisible ? (
        <Button
          color="primary"
          onClick={toggleAddForm}
          style={{ boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
        >
          <FaPlus /> Add
        </Button>
      ) : (
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
                <Button
                  color="warning"
                  onClick={toggleAddForm}
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
};

export default AddFormComponent;

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
