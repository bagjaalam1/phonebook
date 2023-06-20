import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteContact, fetchContacts, updateContact } from "../redux/store";
import { Button, Table } from "reactstrap";
import { FaPencilAlt, FaTrash, FaCheckCircle } from "react-icons/fa";

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      name: "",
      phone: "",
      indexClick: null,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchContacts());
  }

  handleEditClick = (item) => {
    this.setState({
      editing: true,
      name: item.name,
      phone: item.phone,
      indexClick: item.id,
    });
  };

  render() {
    const { editing, name, phone, indexClick } = this.state;
    const { searchResult, contacts, dispatch } = this.props;

    const filteredContacts = searchResult ? searchResult : contacts;

    return (
      <Table striped>
        <thead style={{ boxShadow: "0 0 3px rgba(0,0,0,0.2)" }}>
          <tr>
            <th>#</th>
            <th className="col-sm-4">First Name</th>
            <th className="col-sm-4">Phone</th>
            <th className="col-sm-4">Action</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: "14px" }}>
          {filteredContacts.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>
                {editing && indexClick === item.id ? (
                  <input
                    className="col-sm-12"
                    type="text"
                    value={name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {editing && indexClick === item.id ? (
                  <input
                    className="col-sm-12"
                    type="text"
                    value={phone}
                    onChange={(e) => this.setState({ phone: e.target.value })}
                  />
                ) : (
                  item.phone
                )}
              </td>
              <td>
                {editing && indexClick === item.id ? (
                  <Button
                    size="sm"
                    className="btn btn-success"
                    onClick={() => {
                      this.setState({ editing: false });
                      dispatch(updateContact(item.id, name, phone));
                    }}
                  >
                    <FaCheckCircle /> Save
                  </Button>
                ) : (
                  <>
                    <Button
                      color="success"
                      size="sm"
                      onClick={() => this.handleEditClick(item)}
                    >
                      <FaPencilAlt /> Edit
                    </Button>
                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => dispatch(deleteContact(item.id))}
                    >
                      <FaTrash /> Delete
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.phonebook.contacts,
    searchResult: state.phonebook.searchResult,
  };
};

export default connect(mapStateToProps)(TableComponent);
