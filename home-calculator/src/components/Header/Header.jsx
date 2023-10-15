import s from './Header.module.css';
import logo from './../../images/logo.jpg';
import { NavLink } from 'react-router-dom';

let Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header__inner}>
                <img src={logo} alt="logotip" />
                <div className={s.header__text}>
                    <NavLink to="/Home">Главная</NavLink>
                    <NavLink to="/Calculator">Калькулятор</NavLink>
                    <button>Личный кабинет</button>
                </div>
            </div>
        </header>
    )
}

export default Header;