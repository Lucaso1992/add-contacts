const getContacts = async () => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/lucasss/contacts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (resp.status !== 200) {
            alert("Theres been an error while fetching data");
        }
        return await resp.json();
    } catch (error) {
        console.log("Error:" + error);
    }
}

export default getContacts;