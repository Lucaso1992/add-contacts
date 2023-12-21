import { useContext, createContext, useState, useEffect } from "react"

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [userInput, setUserInput] = useState({});
    const [contactList, setContactList] = useState([]);
    const [contactElimination, setContactElimination] = useState(true);
    const [selectedContact, setSelectedContact] = useState({});

    console.log(userInput)

    const store = {
        userInput,
        contactList,
        contactElimination,
        selectedContact
    }

    const actions = {
        setUserInput,
        setContactList,
        setContactElimination,
        setSelectedContact
    }

    return (
        <AppContext.Provider value={{ store, actions }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;