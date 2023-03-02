import React, { useState } from "react";
import { Container } from "reactstrap";
import AddFormComponent from "./components/AddFormComponent";
import SearchFormComponent from "./components/SearchFormComponent";
import TableComponent from "./components/TableComponent";
import TitleComponent from "./components/TitleComponent";

const App = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <Container>
      <div>
        <TitleComponent />
        <div style={{ marginTop: "25px" }}></div>
        <AddFormComponent setContacts={setContacts} />
        <div style={{ marginTop: "20px" }}></div>
        <SearchFormComponent setContacts={setContacts} />
        <div style={{ marginTop: "20px" }}></div>
        <TableComponent contacts={contacts} setContacts={setContacts} />
      </div>
    </Container>
  );
};

export default App;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "./redux/store";

// function App() {
//   const dispatch = useDispatch();
//   const contacts = useSelector((state) => state.contacts);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ul>
//         {contacts.map((contact) => (
//           <li key={contact.id}>
//             {contact.name} ({contact.phone})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
