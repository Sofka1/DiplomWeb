import React, { useState, useEffect  } from 'react';
import style from './Header.module.css'; // Импортируем CSS-модули
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <img className={style.logoImage} src={require('./image/logo.png')} alt="logo" />
        </div>
        <nav className={`${style.nav} ${isOpen ? style.open : ''}`}>
          <ul>
            <li><Link to="/main">Главная</Link></li>
            <li><Link to="/services">Услуги</Link></li>
            <li><Link to="/feedback">Отзывы</Link></li>
            <li><Link to="/frequentQuestions">Частые вопросы</Link></li>
            <li><Link to="/selfDevelopment">Саморазвитие</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
            <li><Link className={style.callButton} to="/makeCall">Заказать звонок</Link></li>
            <li><Link to="/user"><img className={style.userImage} src={require('./image/user.png')} alt="user" /></Link></li>
          </ul>
        </nav>
        <div
          className={`${style.burger} ${isOpen ? style.open : ''}`}
          onClick={toggleMenu}
        >
          <div className={style.line1}></div>
          <div className={style.line2}></div>
          <div className={style.line3}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
