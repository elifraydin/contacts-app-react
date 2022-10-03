import Liste from "./Liste"
import Form from "./Form"
import { useState, useEffect } from "react"

function Contacts() {


    //kayıtlarımı tutacağım dizi
    const [contacts, setContacts] = useState([])

    //console'da kişiler array'imize bakalım
    useEffect(() => {
        console.log(contacts);
    }, [contacts])


    return (
        <div>
            Contacts
            <Liste />


            {/* props gönder */}
            <Form
                addContact={setContacts}
                contacts={contacts}
            />

        </div>
    )
}

export default Contacts
