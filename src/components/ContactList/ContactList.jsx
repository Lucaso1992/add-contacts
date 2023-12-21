import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import getContacts from '../../services/getContacts';
import useAppContext from "../../context/AppContext";
import ContactCard from '../ContactCard/ContactCard.jsx';

import styles from './ContactList.module.css';

let userName = prompt("Whats your User Name?");

const ContactList = () => {
    const { store, actions } = useAppContext();
    const { setContactList, setUserInput } = actions;
    const { contactList, contactElimination } = store;

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const contacts = await getContacts(userName);
                setContactList(contacts);
            } catch (error) {
                console.error("Error:" + error);
            }
        };
        fetchContacts();
        setUserInput({});
    }, [contactElimination]);

    return (
        <div className='d-flex flex-column justify-content-center container'>
            <Link className={`${styles.add_button} btn btn-primary ms-auto mt-3`} to={'/form'}>Add Contact</Link>
            {contactList.length >= 1 ?
                contactList.map((e, index) => <ContactCard key={index} name={e.full_name}
                    email={e.email} address={e.address} phone={e.phone} id={e.id} />) : <h1 className='text-center mt-4'><strong> Add your contacts!</strong></h1>}


        </div>
    )
}

export default ContactList;