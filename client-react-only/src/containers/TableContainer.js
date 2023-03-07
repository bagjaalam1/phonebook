import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { deleteContacts, updateContact } from "../api/api";

export default class TableContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      name: "",
      phone: "",
      indexClick: null,
    };
  }

  handleEditClick = (item) => {
    this.setState({
      editing: true,
      name: item.name,
      phone: item.phone,
      indexClick: item.id,
    });
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
    console.log(e.target.value);
  };

  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });
    console.log(e.target.value);
  };

  handleSaveClick = async (id) => {
    try {
      this.setState({ editing: false });
      const data = await updateContact(id, this.state.name, this.state.phone);
      console.log(id, this.state.name, this.state.phone);
      console.log(data)
      const response = await this.props.onSaveClick(data)
      console.log(response)
    } catch (e) {
      console.log(e);
    }
  };

  handleDeleteClick = async (id) => {
    try {
      console.log("id: " + id);
      const data = await deleteContacts(id);
      console.log(data);
      const response = await this.props.onDeleteClick(id);
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { editing, name, phone, indexClick } = this.state;
    const { contacts, searchResult } = this.props;
    const tableList = searchResult ? searchResult : contacts
    return (
      <TableComponent
        editing={editing}
        name={name}
        phone={phone}
        indexClick={indexClick}
        contacts={tableList}
        handleEditClick={this.handleEditClick}
        handleSaveClick={this.handleSaveClick}
        handleDeleteClick={this.handleDeleteClick}
        handleNameChange={this.handleNameChange}
        handlePhoneChange={this.handlePhoneChange}
      />
    );
  }
}
