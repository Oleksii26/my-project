import { useState } from "react"
import { NavLink } from "react-router-dom"
import css from './Register.module.css'
import { useDispatch } from "react-redux/es/exports"
import { register } from "../../redux/auth/authOperation"

export const Register = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register({ name, email, password }))
        setEmail('')
        setName('')
        setPassword('')
    }

    const handleInput = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value)
            case 'email':
                return setEmail(value)
            case 'password':
                return setPassword(value)
            default:
                return
        }
    }


    return (
        <form className={css.form} action="" onSubmit={handleSubmit}>
            <label htmlFor="">

                <input type="text" placeholder="Name" name="name" onChange={handleInput}
                    value={name}
                    id="" />
            </label>
            <label htmlFor="">

                <input type="email" placeholder="Email" name="email" onChange={handleInput}
                    value={email}
                    id="" />
            </label>
            <label htmlFor="">

                <input type="password" placeholder="Password" name="password" onChange={handleInput}
                    value={password}
                    id="" />
            </label>
            <button className={css.button}>Registration</button>
            <NavLink>В чем Вам поможет Вконтакте?</NavLink>
        </form>
    )
}
