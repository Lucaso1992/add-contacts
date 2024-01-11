import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import useAppContext from '../context/AppContext';
import updateContact from '../services/updateContact';

import styles from './EditView.module.css';

const EditView = () => {

  const { actions, store } = useAppContext();
  const { setUserInput } = actions;
  const { contactList, userInput, selectedContact } = store;
  const navigate = useNavigate();

  const handleInput = (e) => {
  const value = e.target.value;
  const name = e.target.name;
    setUserInput(prev => {
    const newState = {...prev};
    newState[name] = value;
    return newState;
  })}

  const handleOnEditSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await updateContact(userInput, selectedContact);
      setUserInput({});
      navigate('/');
    } catch (error) {
      console.log("Error:", error);
      alert("There has been an error while updating the user.");
    }
  };

  return (
    <div className={`${styles.form_edit_container} App mx-auto`}>
        <h1 className='text-center'><strong> Edit Contact</strong></h1>
        <form className={styles.form_edition} onSubmit={handleOnEditSubmit}>
        <label htmlFor="full_name">Full Name</label>
        <input id={`full_name_`} value={store.userInput.full_name} onChange={handleInput} name='full_name' type="text" placeholder= 'Full Name'/>

        <label htmlFor="email"> Email</label>
        <input id="email" value={store.userInput.email} onChange={handleInput} name='email' type="text" placeholder='Email'/>

        <label htmlFor="agenda_slug">User Name</label>
        <input id="agenda_slug" type="text" value={store.userInput.agenda_slug} onChange={handleInput} name='User Name' placeholder= ''/>

        <label htmlFor="address">Address</label>
        <input id="address" type="text" value={store.userInput.address} onChange={handleInput} name='Address' placeholder=''/>

        <label htmlFor="phone">Phone</label>
        <input id="phone" type="number" value={store.userInput.phone} onChange={handleInput} name='Phone' placeholder=''/>

        <input className="mt-4" type="submit" value={"Send"}/>
        </form>

        <Link to={'/'} className={`${styles.edit_back_button} btn mt-4`}>Go back to Contacts!</Link>
    </div>
  );
}

export default EditView;