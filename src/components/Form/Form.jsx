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
    if (!userInput.email || !userInput.name || !userInput.address || !userInput.phone) {
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
        <input id='name' value={store.userInput.full_name} onChange={handleInput} name='name' type="text" placeholder='full name' />

        <label htmlFor="phone">Phone</label>
        <input id="phone" type="number" value={store.userInput.phone} onChange={handleInput} name='phone' placeholder='phone' />

        <label htmlFor="email"> Email</label>
        <input id="email" value={store.userInput.email} onChange={handleInput} name='email' type="text" placeholder='email' />

        <label htmlFor="address">Address</label>
        <input id="address" type="text" value={store.userInput.address} onChange={handleInput} name='address' placeholder='address' />


        <input className="mt-4" type="submit" value={"Send"} />
      </form>

      <Link to={'/'} className={`${styles.back_contacts} btn  mt-4`}>Go back to Contacts!</Link>
    </div>
  );
}

export default Form;
