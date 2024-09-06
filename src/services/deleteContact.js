const deleteContact = async (id) => {
    try {
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/lucasss/contacts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (resp.status !== 200) {
        }
        return await resp.json();
    } catch (error) {
        console.log("Error:" + error);
    }
}

export default deleteContact;