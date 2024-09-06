const updateContact = (data, id) => {
    return(
        fetch(`https://playground.4geeks.com/contact/agendas/lucasss/contacts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(   
            data
            ) 
        })
        .then(resp => {
            if(resp.status===400){
                alert("Theres been an error in the user data");
            }
            else if(resp.status!==201){
                alert("There has been an error while creating user");
            }
            else return true;
        })
        .catch(error => {
            console.log("Error:" + error)
        })
    )
}

export default updateContact;