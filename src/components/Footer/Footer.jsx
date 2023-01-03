import css from './Footer.module.css'

const footer = ['о сайте', 'правила', 'реклама', 'люди', 'сообщества', 'разрабам', 'вк', 2015, 'енглишь', 'русский', 'все языки']

export const Footer = () => {
    return (
        <ul className={css.list}>
            {footer.map(e => <li className={css.item} key={e}>{e}</li>)}
        </ul>
    )
}
