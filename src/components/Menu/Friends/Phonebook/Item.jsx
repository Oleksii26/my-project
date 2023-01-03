import { useDispatch } from 'react-redux'
import { removeContact } from '../../../../redux/contacts/contactsOperations.jsx'

export const Item = ({ id, name, number }) => {
    const dispatch = useDispatch()
    return (
        <li key={id}>{name}: {number} <span onClick={() => dispatch(removeContact( id ))}>&times;</span></li>
    )
}
