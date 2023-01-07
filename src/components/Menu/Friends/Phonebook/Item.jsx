import { useDispatch } from 'react-redux'
import { removeContact } from '../../../../redux/contacts/contactsOperations.jsx'
import css from './List.module.css'

export const Item = ({ id, name, number }) => {
    const dispatch = useDispatch()
    return (
        <li key={id}><div className={css.card}>{name}: {number} <span onClick={() => dispatch(removeContact( id ))}>&times;</span></div> </li>
    )
}
