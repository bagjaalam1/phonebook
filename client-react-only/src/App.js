import React, { Component } from "react";
import { Container } from "reactstrap";
import SearchFormComponent from "./components/searchFormComponent";
import TitleComponent from "./components/TitleComponent";
import AddContainer from "./containers/AddContainer";
import TableContainer from "./containers/TableContainer";
import { fetchContacts } from "./api/api";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  async componentDidMount() {
    try {
      const data = await fetchContacts();
      console.log(data);
      this.setState({ contacts: data });
    } catch (error) {
      console.error(error);
    }
  }

  handleAddClick = (data) => {
    this.setState({ contacts: data });
  };

  handleDeleteClick = (data) => {
    this.setState({ contacts: data });
  };

  handleSaveClick = (updatedData) => {
    this.setState({ contacts: updatedData });
  };

  render() {
    return (
      <Container>
        <TitleComponent />
        <div style={{ marginTop: "25px" }}></div>
        <AddContainer onAddClick={this.handleAddClick} />
        <div style={{ marginTop: "25px" }}></div>
        <SearchFormComponent />
        <div style={{ marginTop: "25px" }}></div>
        <TableContainer
          contacts={this.state.contacts}
          onDeleteClick={this.handleDeleteClick}
          onSaveClick={this.handleSaveClick}
        />
      </Container>
    );
  }
}
