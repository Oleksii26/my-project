import { useState } from "react"
import { useDispatch } from "react-redux"
import { addContacts } from "../../../redux/contacts/contactsOperations.jsx"
import css from "./Contacts.module.css"
import { Phonebook } from "./Phonebook/Phonebook.jsx"

export const Contacts = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const dispatch = useDispatch()


    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addContacts({ name, number }))
        setName('')
        setNumber('')
    }
    const handleInput = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value)
            case 'number':
                return setNumber(value)
            default:
                return

        }
    }

    return (<>
        <form className={css.form} action="" onSubmit={handleSubmit}>
            <label htmlFor="">
                Name
                <input type="text" name="name"
                    onChange={handleInput}
                    value={name} />
            </label>
            <label htmlFor="">
                Number
                <input type="text" name="number"
                    onChange={handleInput}
                    value={number} />
            </label>
            <button>Add Contacts</button>
        </form>
        <Phonebook />
    </>
    )
}
