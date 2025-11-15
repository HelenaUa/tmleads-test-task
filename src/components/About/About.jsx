import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="stats__trapezoid"></div>
        <section className="about" id="about">
            <div className="container about__container">
                <div>
                    <h2 className="about__title">О компании</h2> 
                    <p className="about__text">
                    Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.<br/><br/>
                    Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.
                    </p>
                </div>
                <div className="about__box">
                    <p className="about__white-text">
                    Попробуйте сейчас и получите<br/>
                    5 дней бесплатного пользования
                    </p>
                    <div className="about__wrapper-input">
                        <input className="about__input" type="email" placeholder="Ваш e–mail"/>
                        <button className="about__btn">попробовать</button>
                    </div>
                </div> 
            </div>
      </section>
    </>
  );
};
export default About;