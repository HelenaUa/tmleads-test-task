import React from "react";
import "./Hero.css"
import HeroImg from "../../assets/images/hero-d.png"

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero__container">
                <div className="hero__wrapper">
                    <h1>
                        МОМЕНТАЛЬНО <br /> КОПИРУЙ СДЕЛКИ <br /> ПРОФИ ТРЕЙДЕРОВ
                    </h1>
                    <p className="hero__text">Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом режиме.</p>
                    <div className="hero__input-wrapper">
                        <input className="hero__input" type="email" id="hero" name="hero" placeholder="Ваш e–mail" />
                        <button className="hero__btn">НАЧАТЬ</button>
                    </div>
                    <span>5 дней бесплатного пользования</span>
                </div>
                <div className="hero__img">
                    <img src={HeroImg} alt="hero" />
                </div>
            </div>
        </section>
  );
};

export default Hero;
