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
      searchResult: null,
      searchKeyword: null,
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
    const { contacts, searchKeyword } = this.state;
    contacts.push(data);
    if (searchKeyword) {
      const searchResult = contacts.filter(
        (contact) =>
          contact.name
            .toLowerCase()
            .includes(searchKeyword.name.toLowerCase()) &&
          contact.phone.includes(searchKeyword.phone)
      );
      return this.setState({
        ...this.state,
        searchResult: searchResult,
        contacts: contacts,
      });
    }

    return this.setState({
      ...this.state,
      contacts,
    });
  };

  handleDeleteClick = (id) => {
    const { contacts, searchKeyword } = this.state;
    const updateDeletedContacts = contacts.filter(
      (contact) => contact.id !== id
    );

    if (searchKeyword) {
      const updatedSearchResult = updateDeletedContacts.filter(
        (contact) =>
          contact.name
            .toLowerCase()
            .includes(searchKeyword.name.toLowerCase()) &&
          contact.phone.includes(searchKeyword.phone)
      );
      return this.setState({
        ...this.state,
        searchResult: updatedSearchResult,
        contacts: updateDeletedContacts,
      });
    }

    return this.setState({
      ...this.state,
      contacts: updateDeletedContacts,
    });
  };

  handleSaveClick = (updatedData) => {
    const { contacts, searchKeyword } = this.state;
    const updatedContacts = contacts.map((contact) => {
      if (contact.id === updatedData.id) {
        return {
          ...contact,
          name: updatedData.name,
          phone: updatedData.phone,
        };
      } else {
        return contact;
      }
    });

    if (searchKeyword) {
      const updatedSearchResult = updatedContacts.filter(
        (contact) =>
          contact.name
            .toLowerCase()
            .includes(searchKeyword.name.toLowerCase()) &&
          contact.phone.includes(searchKeyword.phone)
      );
      return this.setState({
        ...this.state,
        searchResult: updatedSearchResult,
        contacts: updatedContacts,
      });
    }

    return this.setState({
      ...this.state,
      contacts: updatedContacts,
    });
  };

  handleSearchInput = (name, phone) => {
    const { contacts } = this.state;
    const searchResult = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(name.toLowerCase()) &&
        contact.phone.includes(phone)
    );
    return this.setState({
      ...this.state,
      searchResult,
      searchKeyword: {
        name,
        phone,
      },
    });
  };

  render() {
    return (
      <Container>
        <TitleComponent />
        <div style={{ marginTop: "25px" }}></div>
        <AddContainer onAddClick={this.handleAddClick} />
        <div style={{ marginTop: "25px" }}></div>
        <SearchFormComponent onSearchInput={this.handleSearchInput} />
        <div style={{ marginTop: "25px" }}></div>
        <TableContainer
          contacts={this.state.contacts}
          searchResult={this.state.searchResult}
          onDeleteClick={this.handleDeleteClick}
          onSaveClick={this.handleSaveClick}
        />
      </Container>
    );
  }
}
