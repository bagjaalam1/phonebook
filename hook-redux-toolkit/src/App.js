import React from 'react';
import TitleComponent from './components/TitleComponent';
import { Container } from 'reactstrap';
import './App.css';
import Add from './features/add/Add';
import Search from './features/search/Search';
import ContactList from './features/contactList/ContactList';

function App() {
  return (
    <Container>
      <div>
        <TitleComponent />
        <div style={{ marginTop: "25px" }}></div>
        <Add />
        <div style={{ marginTop: "25px" }}></div>
        <Search />
        <div style={{ marginTop: "25px" }}></div>
        <ContactList />
      </div>
    </Container>
  );
}

export default App;
