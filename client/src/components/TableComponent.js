import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts, updateContact } from "../redux/store";
import { Button, Table } from "reactstrap";
import DeleteButtonComponent from "./DeleteButtonComponent";
import { FaPencilAlt, FaTrash, FaCheckCircle } from "react-icons/fa";

const TableComponent = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.phonebook.contacts);

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [indexClick, setIndexClick] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleEditClick = (item) => {
    setEditing(true);
    setName(item.name);
    setPhone(item.phone);
    setIndexClick(item.id);
  };

  return (
    <Table striped>
      <thead style={{ boxShadow: "0 0 3px rgba(0,0,0,0.2)" }}>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((item, index) => (
          <tr key={item.id}>
            <th scope="row">{index + 1}</th>
            <td>
              {editing && indexClick === item.id ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                item.name
              )}
            </td>
            <td>
              {editing && indexClick === item.id ? (
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                    setEditing(false);
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
                    onClick={() => handleEditClick(item)}
                  >
                    <FaPencilAlt /> Edit
                  </Button>
                  <DeleteButtonComponent color="danger" size="sm">
                    <FaTrash /> Delete
                  </DeleteButtonComponent>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
