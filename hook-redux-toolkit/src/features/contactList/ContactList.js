import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteContact,
  fetchContacts,
  selectContacts,
  updateContact,
} from "./ContactListSlice";
import { Button, Table } from "reactstrap";
import { FaPencilAlt, FaTrash, FaCheckCircle } from "react-icons/fa";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

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
                  onChange={(e) => setName(e.target.value)}
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
                    dispatch(updateContact({ id: item.id, name, phone }));
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
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => dispatch(deleteContact({id: item.id}))}
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
};

export default ContactList;
