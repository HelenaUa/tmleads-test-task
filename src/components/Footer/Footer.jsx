import React from "react";
// import "./Header.css";
import Logo from "../../assets/images/logo-d.png";

const Footer = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

  return (
      <footer className="footer">
          <p>Быстрая навигация</p>
        <div><img src={Logo} alt="logo" /></div>

        <nav className="header__nav">
            <a className="header__link" href="#">Цифры</a>
            <a className="header__link" href="#">Сделки онлайн</a>
            <a className="header__link" href="#">о компании</a>
            <a className="header__link" href="#">как начать</a>
            <a className="header__link" href="#">тарифы</a>
            <a className="header__link" href="#">отзывы</a>
            <a className="header__link" href="#">FAQ</a>
        </nav>
          
        <p>© 2022 TradeBlade. All rights reserved</p>

      
    </footer>
  );
};

export default Footer;
