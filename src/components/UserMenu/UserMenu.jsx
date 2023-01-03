import { useDispatch, useSelector } from "react-redux/es/exports"
import { logOut } from "../../redux/auth/authOperation"
import css from './UserMenu.module.css'

export const UserMenu = () => {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()


  return (
    <span className={css.user} onClick={() => dispatch(logOut())}>Выход</span>
  )
}
