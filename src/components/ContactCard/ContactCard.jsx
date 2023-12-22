import { useNavigate } from 'react-router';
import useAppContext from '../../context/AppContext';

import deleteContact from '../../services/deleteContact.js';

import { MdDelete } from 'react-icons/md';
import { GrEdit } from 'react-icons/gr';
import styles from './ContactCard.module.css';

const ContactCard = ({ name, email, address, phone, id }) => {
    const { actions, store } = useAppContext();
    const { setContactElimination, setUserInput, setSelectedContact } = actions;
    const { contactList, userInput, selectedContact } = store;

    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await deleteContact(id);
        } catch (error) {
            console.error("Error al eliminar el contacto:", error);
        }
        setContactElimination(prev => !prev);
    };

    const handleEdit = (id) => {
        setSelectedContact(id);
        const chosenOne = contactList.find(contact => contact.id === id);
        setUserInput(chosenOne);
        navigate('/edit')
    }
    return (
        <div className={`${styles.contact_cards} card mb-3`}>
                <div className={`${styles.img_container}`}>
                    <img src="https://i.ibb.co/txSLyvk/person-1.png" className={`${styles.img}  img-fluid `} alt="..." />
                </div>
                <div className={`${styles.info_container} col-8 col-md-8`}>
                    <div className="card-body">
                        <h5 className="card-title"><strong>{name}</strong></h5>
                        <p className="card-text">{email}</p>
                        <p className="card-text">{address}</p>
                        <p className="card-text">{phone}</p>
                    </div>
                    <div className={styles.icons_div}>
                        <GrEdit className={styles.button_edit} onClick={() => handleEdit(id)}></GrEdit>
                        <MdDelete onClick={() => handleDelete()} className={styles.button_delete}></MdDelete>
                    </div>
                </div>
        </div>
    )
}

export default ContactCard;  