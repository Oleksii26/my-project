import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchContacts } from "../../../../redux/contacts/contactsOperations.jsx"
import { Item } from "./Item.jsx"
import css from './List.module.css'

export const Phonebook = () => {
    const contacts = useSelector(state => state.contacts.contacts)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <ul className={css.list}>
            {contacts.map(e => <Item key={e.id} {...e} />)}
        </ul>
    )
}
