import Liste from "./Liste"
import Form from "./Form"
import { useState, useEffect } from "react"

function Contacts() {


    //kayıtlarımı tutacağım dizi
    const [contacts, setContacts] = useState([{ fullname: "Ahmet", phone_number: "123456789" },
    { fullname: "Cem", phone_number: "14124512" },
    { fullname: "Selin", phone_number: "43262346" },
    { fullname: "Onur", phone_number: "2141245" },])

    //console'da kişiler array'imize bakalım
    // useEffect(() => {
    //     console.log(contacts);
    // }, [contacts])


    return (
        <div>
            {/*kayıtları props gönder */}
            <Liste 
            contacts={contacts}
            />


            {/* props gönder */}
            <Form
                addContact={setContacts}
                contacts={contacts}
            />

        </div>
    )
}

export default Contacts
