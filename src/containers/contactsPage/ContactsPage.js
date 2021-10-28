import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
 const [name, setName] = useState("");
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState("");
 const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicate){
      props.addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  useEffect(() =>{
    const foundDuplicate = () => {
      const result = props.contacts.find((contact) => contact.name === name);
      if (result !== undefined) {
        return true;
      }
      return false;
    };

    if (foundDuplicate()) {
      setDuplicate(true);
    }else {
      setDuplicate(false);
    }
  }, [name, props.contacts, duplicate]);

  return (
    <div>
      <section>
        <h2>
          Add Contact</h2>
        <ContactForm 
          name={name}
          setName={setName} 
          phone={phone}
          setPhone={setPhone} 
          email={email} 
          setEmail={setEmail} 
          onSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={props.contacts}/>
      </section>
    </div>
  );
};