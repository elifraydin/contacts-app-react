import { useEffect, useState } from 'react'

//addContact props olarak aldık
function Form({ addContact, contacts }) {

    //inputlara veri girilmesi

    const [form, setForm] = useState({ fulllname: "", phone_number: "" });


    const onChangeInput = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value });

    };

    //Butona tıklanması//form submit olması

    const onSubmit = (e) => {
        e.preventDefault() //sayfa yenilenmemesi için

        if (form.fulllname === "" || form.phone_number === "") {
            return false;
        }
        //array içine obje yerleştir, eski verileri koru
        addContact([...contacts, form])

    }

    //contacts değişmişse
    useEffect(() => {
        //temizle
        setForm({ fulllname: "", phone_number: "" })
    }, [contacts])



    return (

        <div >
            <form onSubmit={onSubmit} className='flex flex-col justify-between items-center'>

                {/* bu inputlara veri girildiğinde state'imize yazmalıyız */}
                <input
                    name='fulllname'
                    value={form.fulllname}
                    placeholder='Full Name'
                    onChange={onChangeInput} />  {/* onChange event,onChange propları */}

                <input
                    name='phone_number'
                    value={form.phone_number}
                    placeholder='Number'
                    onChange={onChangeInput} />

                <button>Add</button>  {/* bu butona basınca bir event tetiklenmeli */}
            </form>
        </div>
    )
}

export default Form
