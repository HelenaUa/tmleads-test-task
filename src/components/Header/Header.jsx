import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/images/logo-d.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__container">
        <div><img src={Logo} alt="logo" /></div>

        <nav className={`header__nav ${menuOpen ? "mobile-open" : ""}`}>
            <a className="header__link" href="#">Цифры</a>
            <a className="header__link" href="#deals">Сделки онлайн</a>
            <a className="header__link" href="#about">о компании</a>
            <a className="header__link" href="#">как начать</a>
            <a className="header__link" href="#tariffs">тарифы</a>
            <a className="header__link" href="#">отзывы</a>
            <a className="header__link" href="#question">FAQ</a>
          
              {/* <div className="header__mobile-buttons">
                  <button className="header__btn-login">Вход</button>
                  <button className="header__btn-signup">Регистрация</button>
              </div> */}
        </nav>
          
        <div className="header__btn-wrapper">
            <button className="header__btn-login">вход</button>
            <button className="header__btn-signup">Регистрация</button>
        </div>

      <div
        className={`burger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

        </div>
    </header>
  );
};

export default Header;
