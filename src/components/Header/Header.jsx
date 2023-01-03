import { UserMenu } from "../UserMenu/UserMenu"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux/es/exports"
import css from './Header.module.css'

export const Header = () => {
    const isLoggedin = useSelector(state => state.auth.isLoggedin)
    return (
        <header className={css.header}>
                <NavLink  className='container' to='/'><img height='50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_IxOUvofQdQMWd6Clw2KSgpHs9ZoKHv_H2g&usqp=CAU" alt="vk" /><span className={css.span}>КОНТАКТЕ</span> </NavLink>
            {isLoggedin ?  <UserMenu /> : 'Switch to english' }
        </header>
    )
}
