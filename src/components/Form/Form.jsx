import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";

import useAppContext from '../../context/AppContext';
import createContact from '../../services/createContact';

import styles from './Form.module.css';

const Form = () => {
  const { actions, store } = useAppContext();
  const { setUserInput, handleSubmit, setContactElimination } = actions;
  const { userInput } = store;
  const navigate = useNavigate();

  useEffect(() => {
    setUserInput({});
  }, [])

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserInput(prev => {
      const newState = { ...prev };
      newState[name] = value;
      return newState;
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!userInput.email || !userInput.full_name || !userInput.agenda_slug || !userInput.address || !userInput.phone) {
      return alert('Fill in the gaps correctly please!');
    }
    createContact(userInput);
    navigate('/');
    setContactElimination(prev => !prev);
    setUserInput({});
  }

  return (
    <div className={`${styles.form_container} App mx-auto`}>
      <h1 className='text-center'><strong>Add New Contact</strong></h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="full_name">Full Name</label>
        <input id='full_name' value={store.userInput.full_name} onChange={handleInput} name='full_name' type="text" placeholder='full name' />

        <label htmlFor="email"> Email</label>
        <input id="email" value={store.userInput.email} onChange={handleInput} name='email' type="text" placeholder='email' />

        <label htmlFor="agenda_slug">User Name</label>
        <input id="agenda_slug" type="text" value={store.userInput.agenda_slug} onChange={handleInput} name='agenda_slug' placeholder='user name' />

        <label htmlFor="address">Address</label>
        <input id="address" type="text" value={store.userInput.address} onChange={handleInput} name='address' placeholder='address' />

        <label htmlFor="phone">Phone</label>
        <input id="phone" type="number" value={store.userInput.phone} onChange={handleInput} name='phone' placeholder='phone' />

        <input className="mt-4" type="submit" value={"Enviar"} />
      </form>

      <Link to={'/'} className='btn btn-primary mt-4'>Go back to Contacts!</Link>
    </div>
  );
}

export default Form;
