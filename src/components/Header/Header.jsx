import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/images/logo-d.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div>
        <img src={Logo} alt="logo" />
      </div>

      <nav className="header__nav">
        <a className="header__link" href="#">Цифры</a>
        <a className="header__link" href="#deals">Сделки онлайн</a>
        <a className="header__link" href="#about">о компании</a>
        <a className="header__link" href="#">как начать</a>
        <a className="header__link" href="#tariffs">тарифы</a>
        <a className="header__link" href="#">отзывы</a>
        <a className="header__link" href="#question">FAQ</a>
      </nav>

      <div className="header__btn-wrapper">
        <button className="header__btn-login">вход</button>
        <button className="header__btn-signup">Регистрация</button>
      </div>

      <div
        className={`burger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(true)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          
          <button className="mobile-menu__close" onClick={() => setMenuOpen(false)}>
            ✕
          </button>

          <nav className="mobile-menu__nav">
            <a className="mobile-menu__link" href="#">Цифры</a>
            <a className="mobile-menu__link" href="#deals">Сделки онлайн</a>
            <a className="mobile-menu__link" href="#about">о компании</a>
            <a className="mobile-menu__link" href="#">как начать</a>
            <a className="mobile-menu__link" href="#tariffs">тарифы</a>
            <a className="mobile-menu__link" href="#">отзывы</a>
            <a className="mobile-menu__link" href="#question">FAQ</a>
          </nav>

          <div className="mobile-menu__buttons">
            <button className="header__btn-login-burger">Регистрация</button>
            <button className="header__btn-signup-burger">Войти</button>
          </div>
        </div>
      )}

    </header>
  );
};

export default Header;
