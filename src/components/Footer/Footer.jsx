import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo-d.png";

const Footer = () => {

  return (
      <footer className="footer">
      
          <div className="footer__left">
              <div><p className="footer__text">Быстрая навигация</p></div>
              <div><nav className="header__nav footer__nav">
                  <a className="header__link" href="#stats">Цифры</a>
                  <a className="header__link" href="#deals">Сделки онлайн</a>
                  <a className="header__link" href="#about">о компании</a>
                  <a className="header__link" href="#">как начать</a>
                  <a className="header__link" href="#tariffs">тарифы</a>
                  <a className="header__link" href="#">отзывы</a>
                  <a className="header__link" href="#question">FAQ</a>
              </nav></div>
          </div>

          <div className="footer__right">
              <img className="footer__logo" src={Logo} alt="logo" />
              <p className="footer__p">© 2022 TradeBlade. All rights reserved</p>
          </div>
      
      </footer>
  );
};

export default Footer;
