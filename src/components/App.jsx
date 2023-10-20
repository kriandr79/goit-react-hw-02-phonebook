import { nanoid } from 'nanoid';
import { Component } from 'react';
import Form from './Form/Form';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {

    if (this.state.contacts.find(contact => contact.name === data.name)) {
      alert('Alert');
      return; 
    }
   
    const newContact = { name: data.name, number: data.number, id: nanoid() };
     
    this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
   
  };

  handleFilter = e => {
     this.setState({
       filter: e.currentTarget.value,
     });
  }

  render() {
    const { contacts, filter } = this.state;

    const normalazedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazedFilter)
    );

    return (
      <div>
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler}></Form>

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilter} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}
