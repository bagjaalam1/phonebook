import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, CardHeader, CardBody, Label, Input, Row, Col } from "reactstrap";
import { searchAction } from "../contactList/ContactListSlice";

function Search() {
  const [searchInputName, setSearchInputName] = useState("");
  const [searchInputPhone, setSearchInputPhone] = useState("");

  const dispatch = useDispatch();

  const handleSearchInputName = (event) => {
    const keyword = event.target.value;
    setSearchInputName(keyword);
    dispatch(searchAction({ name: keyword, phone: searchInputPhone }));
  };

  const handleSearchInputPhone = (event) => {
    const keyword = event.target.value;
    setSearchInputPhone(keyword);
    dispatch(searchAction({ name: searchInputName, phone: keyword }));
  };

  return (
    <Card>
      <CardHeader style={{ boxShadow: "0 0 3px rgba(0,0,0,0.2)" }}>
        <h5 className="mb-0">Search Form</h5>
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
              value={searchInputName}
              onChange={handleSearchInputName}
            />
          </Col>
          <Label for="phone">Phone</Label>
          <Col>
            <Input
              id="phone"
              name="phone"
              placeholder="phone"
              type="text"
              value={searchInputPhone}
              onChange={handleSearchInputPhone}
            />
          </Col>
          <Col></Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default Search;
