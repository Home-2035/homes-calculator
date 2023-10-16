import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from './../../images/logo-header.png';
import s from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const isCalculatorPage = location.pathname === '/Calculator';

  return (
    <header className={`${s.header} ${isCalculatorPage && s.headerCalculator}`}>
      <div className={s.header__inner}>
        <img src={logo} alt="logotip" />
        <div className={s.header__text}>
          <NavLink to="/Home" activeClassName={s.activeLink}>Главная</NavLink>
          <NavLink to="/Calculator" activeClassName={s.activeLink}>Калькулятор</NavLink>
          <button>Личный кабинет</button>
        </div>
      </div>
    </header>
  );
}

export default Header;