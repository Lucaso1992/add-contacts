const createAgenda = () => {
    return(
        fetch('https://playground.4geeks.com/contact/agendas/lucasss', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then(resp => {
            if(resp.status===400){
                
            }
            else if(resp.status!==200){
                
            }
            else return true;
        })
        .catch(error => {
            console.log("Error:" + error)
        })
    )
}

export default createAgenda;