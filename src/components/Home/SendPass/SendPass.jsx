import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { openModal } from '../../../redux/modal/modalSlice'
import css from './SendPass.module.css'


export const SendPass = () => {
    const dispatch = useDispatch()
    return (<div>
      <NavLink onClick={() => dispatch(openModal())} className={css.linkC}>Забыли рапроль?</NavLink>
    </div>
    )
}
