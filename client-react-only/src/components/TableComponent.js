import React, { Component } from "react";
import { Button, Table } from "reactstrap";
import { FaPencilAlt, FaTrash, FaCheckCircle } from "react-icons/fa";

class TableComponent extends Component {
  render() {
    const {
      editing,
      name,
      phone,
      indexClick,
      contacts,
      handleEditClick,
      handleSaveClick,
      handleDeleteClick,
      handleNameChange,
      handlePhoneChange,
    } = this.props;

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
          {contacts.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>
                {editing && indexClick === item.id ? (
                  <input
                    className="col-sm-12"
                    type="text"
                    value={name}
                    onChange={(e) => handleNameChange(e)}
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
                    onChange={(e) => handlePhoneChange(e)}
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
                    onClick={() => handleSaveClick(item.id)}
                  >
                    <FaCheckCircle /> Save
                  </Button>
                ) : (
                  <>
                    <Button
                      color="success"
                      size="sm"
                      onClick={() => handleEditClick(item)}
                    >
                      <FaPencilAlt /> Edit
                    </Button>
                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => handleDeleteClick(item.id)}
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

export default TableComponent;
