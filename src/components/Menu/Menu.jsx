import css from './Menu.module.css'
import { Link, Route, Routes } from 'react-router-dom'
import { News } from '../News/News'
import { Games } from './Games/Games'
import { Photo } from './Photo/Photo'
import { Contacts } from './Friends/Contacts'

export const Menu = () => {
    return (<div className={css.container}>
        <ul className={css.list}>
            <li className={css.item}><Link className={css.link} to='/mypage'>Моля страница</Link></li>
            <li className={css.item}><Link className={css.link} to='/news'>Новости</Link></li>
            <li className={css.item}><Link className={css.link} to='/manager'>Менеджер</Link></li>
            <li className={css.item}><Link className={css.link} to='/contacts'>Друзья</Link></li>
            <li className={css.item}><Link className={css.link} to='/games'>Сообщества</Link></li>
            <li className={css.item}><Link className={css.link} to='/games'>Фотографии</Link></li>
            <li className={css.item}><Link className={css.link} to='/games'>Музыка</Link></li>
            <li className={css.item}><Link className={css.link} to='/games'>Видео</Link></li>
            <li className={css.item}><Link className={css.link} to='/games'>Клипы</Link></li>
            <li className={css.item}><Link className={css.link} to='/games'>Игры</Link></li>
            <li className={css.item}><Link className={css.link} to='/games'>Приложения</Link></li>
            <li className={css.item}><Link className={css.link} to='/games'>Мини-Приложения</Link></li>
            <li className={css.item}><Link className={css.link} to='/games'>ВК Плей</Link></li>
            <li className={css.item}><Link className={css.link} to='/games'>Экспресс</Link></li>
            <li className={css.item}><Link className={css.link} to='/games'>Маркет</Link></li>
            <li className={css.item}><Link className={css.link} to='/games'>Закладки</Link></li>
            <li className={css.item}><Link className={css.link} to='/games'>Файлы</Link></li>
        </ul>
        <div>
            <Routes>
                <Route path='/mypage' element={<Photo />} />
                <Route path='/news' element={<News />} />
                <Route path='/manager' element={<Games />} />
                <Route path='/contacts' element={<Contacts />} />
            </Routes>
        </div>
    </div>
    )
}
