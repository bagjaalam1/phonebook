import React, { Component } from "react";
import { Container } from "reactstrap";
import AddFormComponent from "./components/AddFormComponent";
import SearchFormComponent from "./components/SearchFormComponent";
import TableComponent from "./components/TableComponent";
import TitleComponent from "./components/TitleComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  setContacts = (contacts) => {
    this.setState({ contacts });
  };

  render() {
    const { contacts } = this.state;

    return (
      <Container>
        <div>
          <TitleComponent />
          <div style={{ marginTop: "25px" }}></div>
          <AddFormComponent setContacts={this.setContacts} />
          <div style={{ marginTop: "20px" }}></div>
          <SearchFormComponent setContacts={this.setContacts} />
          <div style={{ marginTop: "20px" }}></div>
          <TableComponent
            contacts={contacts}
            setContacts={this.setContacts}
          />
        </div>
      </Container>
    );
  }
}

export default App;
