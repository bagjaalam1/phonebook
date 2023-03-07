import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

class SearchFormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInputName: '',
      searchInputPhone: ''
    };
  }

  handleSearchInputName = (event) => {
    const {searchInputPhone} = this.state
    const keyword = event.target.value;
    this.setState({ searchInputName: keyword });
    this.props.onSearchInput(keyword, searchInputPhone)
    console.log(keyword, searchInputPhone)
  };

  handleSearchInputPhone = (event) => {
    const {searchInputName} = this.state
    const keyword = event.target.value;
    this.setState({ searchInputPhone: keyword });
    this.props.onSearchInput(searchInputName, keyword)
    console.log(searchInputName, keyword)
  };

  render() {
    const { searchInputName, searchInputPhone } = this.state;

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
                  onChange={this.handleSearchInputName}
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
                  value={searchInputPhone}
                  onChange={this.handleSearchInputPhone}
                />
              </Col>
              <Col></Col>
            </Row>
        </CardBody>
      </Card>
    );
  }
}

export default SearchFormComponent;