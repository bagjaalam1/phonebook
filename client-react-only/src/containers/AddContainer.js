import React, { Component } from "react";
import { addContact } from "../api/api";
import AddButtonComponent from "../components/AddButtonComponent";
import AddFormComponent from "../components/AddFormComponent";

export default class AddContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddFormVisible: false,
      name: "",
      phone: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this)
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

  async handleSubmit(e) {
    e.preventDefault();
    const data = await addContact(this.state.name, this.state.phone);
    console.log('Balikan Data addContact')
    console.log(data)
    console.log(this.state.name, this.state.phone);
    const response = await this.props.onAddClick(data);
    console.log('Balikan data response: ')
    console.log(response)
    this.setState({ name: "", phone: "" });
  }

  render() {
    const { name, phone, isAddFormVisible } = this.state;
    return (
      <div>
        {!isAddFormVisible ? (
          <AddButtonComponent toggleAddForm={this.toggleAddForm} />
        ) : (
          <AddFormComponent
            toggleAddForm={this.toggleAddForm}
            handleNameChange={this.handleNameChange}
            handlePhoneChange={this.handlePhoneChange}
            handleSubmit={this.handleSubmit}
            name={name}
            phone={phone}
          />
        )}
      </div>
    );
  }
}
