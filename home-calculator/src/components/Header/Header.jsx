import s from './Header.module.css';

import logo from './../../images/logo-header.png';

let Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header__inner}>
                <img src={logo} alt="logotip" />
                <div className={s.header__text}>
                    <a href="/Home">Главная</a>
                    <a href="/Calculator">Калькулятор</a>
                    <button>Личный кабинет</button>
                </div>
            </div>
        </header>
    )
}

export default Header;