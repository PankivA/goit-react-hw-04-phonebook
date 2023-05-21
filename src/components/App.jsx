import { useState, useEffect } from 'react';
import Form from './Form/Form';
import ContactsList from './Contacts/Contacts';
import Filter from './Filter/Filter';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    const contactsFromLS = localStorage.getItem('myContacts');
    const contactsFromLSParced = JSON.parse(contactsFromLS);
    contactsFromLSParced && setContacts(contactsFromLSParced);
  }, []);

  useEffect(() => {
    contacts.length &&
      localStorage.setItem('myContacts', JSON.stringify(contacts));
  }, [contacts]);


  const addContacts = userData => {
    const isExist = contacts.find(contact => {
      return contact.name === userData.name;
    });

    if (isExist) {
      return alert(`${userData.name} is already in contacts`);
    } else {
      setContacts(prevState => {
        return [...prevState, userData];
      });

      return true;
    }
  };


 
  const changeFilter = (e) => {
    setFilter(e.currentTarget.value)
  }

  const onDeleteContact = contactId => {   
    return setContacts(contacts.filter(({id}) => id !== contactId))
  }

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 25,
          color: '#070303',
        }}
      >
        <h1>Phonebook</h1>
        <Form onSubmit={addContacts} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />

       
        <ContactsList list={
          filter
            ? contacts.filter(({ name }) =>
                name.toLowerCase().includes(filter.toLowerCase())
              )
            : contacts
        }
         onDeleteContact={onDeleteContact} />
        
      </div>
    );
};

export default App;



  
  //   state = {
  //     contacts: [],
  //     filter: '',
  //   };
  
  //   componentDidMount() {
  //     const storageContacts = localStorage.getItem('myContacts');
  // 		if (storageContacts !== null) {
  //       this.setState({
  //         contacts: JSON.parse(storageContacts)
  //       });
  
  // 		}
  // 	}
  
  // 	componentDidUpdate(_, prevState) {
  // 		if (prevState.contacts !== this.state.contacts) {
  //       localStorage.setItem('myContacts', JSON.stringify(this.state.contacts));
  //     } 
  // 	}
  
  //   ifExsistContact = dataName => {
  //     const { contacts } = this.state
  //     return contacts.find(({name}) => name === dataName)
  //   }
  //   addContacts = data => {
  //     this.ifExsistContact(data.name) ? alert(`${data.name} is already in contacts`):
  //     this.setState(({ contacts }) => {
  //       const cont = [...contacts];
  //       cont.push(data);
  //       return {
  //         contacts: cont,
  //       };
  //     });
  //   };
  //   changeFilter = (e) => {
  //     this.setState({filter: e.currentTarget.value})
  //   }
  //   filteredContacts = () => {
  //     const { filter, contacts } = this.state
  //     const normalisedContscts = filter.toLowerCase()
  //     return contacts.filter(({name}) => name.toLowerCase().includes(normalisedContscts))
  //   }
  //   onDeleteContact = (cotactId) => {   
  //     this.setState(({contacts}) => ({
  //       contacts: contacts.filter(({id}) => id !== cotactId)
  //     }))
  //   }
  
  //   render() {
  //     const { filter } = this.state;
  //     const filteredContacts = this.filteredContacts()
  //     return (
  //       <div
  //         style={{
  //           display: 'flex',
  //           flexDirection: 'column',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           fontSize: 25,
  //           color: '#070303',
  //         }}
  //       >
  //         <h1>Phonebook</h1>
  //         <Form onSubmit={this.addContacts} />
  //         <h2>Contacts</h2>
  //         <Filter value={filter} onChange={this.changeFilter} />
  //         <ContactsList list={filteredContacts} onDeleteContact={this.onDeleteContact} />
  //       </div>
  //     );
  //   }
  // }
  
  // export default App;
  
  // App.propTypes = {
  //   state: PropTypes.exact({
  //     contacts: PropTypes.arrayOf(
  //       PropTypes.exact({
  //         id: PropTypes.string.isRequired,
  //         name: PropTypes.string.isRequired,
  //         number: PropTypes.string.isRequired,
  //       })
  //     ),
  //     filter: PropTypes.string,
  //   }),
  // }