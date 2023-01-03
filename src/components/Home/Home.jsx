import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { HomeReister } from '../HomeRegister/HomeReister'
import css from './Home.module.css'
import { logIn } from '../../redux/auth/authOperation'


export const Home = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(logIn({ email, password }))
    setEmail('')
    setPassword('')
  }

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value)
      case 'password':
        return setPassword(value)
      default:
        return
    }
  }

  return (
    <div className={css.home}>
      <aside className={css.container}>

        <form className={css.form} onSubmit={handleSubmit} action="">
          <label htmlFor="">
            Email
            <input type="email" name="email" value={email}
              onChange={handleInput} />
          </label>
          <label htmlFor="">
            Password
            <input type="password" name="password" value={password}
              onChange={handleInput} />
          </label>
          <button>LogIn</button>
          <NavLink className={css.link}>Забыли пароль?</NavLink>
        </form>

      </aside>
      <div >
      <HomeReister />
      </div>
    </div>
  

  )
}
