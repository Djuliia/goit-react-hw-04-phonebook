import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { GlobalStyle } from 'components/GlobalStyle';

const getSavedContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [];
};

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(getSavedContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`Contact with name "${name}" already exists.`);
      return;
    }
    setContacts(prevStateContacts => [
      ...prevStateContacts,
      { id: nanoid(), name, number },
    ]);
  };
  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleChange = evt => {
    setFilter(evt.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChange} />
      <ContactList contacts={getFilteredContacts()} onDelete={deleteContact} />
      <GlobalStyle />
    </Container>
  );
};

// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Container } from './App.styled';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';
// import { GlobalStyle } from 'components/GlobalStyle';

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts !== null) {
//       this.setState({
//         contacts: JSON.parse(savedContacts),
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//     const existingContact = this.state.contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (existingContact) {
//       alert(`Contact with name "${name}" already exists.`);
//       return;
//     }
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, { id: nanoid(), name, number }],
//     }));
//   };
//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   handleChange = evt => {
//     this.setState({ filter: evt.target.value });
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <ContactForm addContact={this.addContact} />

//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.handleChange} />
//         <ContactList
//           contacts={filteredContacts}
//           onDelete={this.deleteContact}
//         />
//         <GlobalStyle />
//       </Container>
//     );
//   }
// }
