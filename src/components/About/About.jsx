import React from "react";

const About = () => {
  return (
    <section className="about">
        <div>
            <h2>О компании</h2> 
            <p>Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance. 

Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.</p>
          </div>
          <div>
              <p>Попробуйте сейчас и получите
                  5 дней бесплатного пользования</p>
              <input type="email" placeholder="Ваш e–mail"/>
              <button>попробовать</button>
          </div> 
    </section>
  );
};
export default About;