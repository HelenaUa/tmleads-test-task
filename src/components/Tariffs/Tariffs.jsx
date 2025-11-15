import React from "react";
import "./Tariffs.css"

const Tariffs = () => {
  return (
    <section className="tariffs" id="tariffs">
        <div className="container tariffs__container">
            <h2 className="tariffs__title">тарифы</h2> 
                <div className="tariffs__wrapper-btn">
                    <button className="tariffs__btn">СПОТ</button>фьючерс
                </div>
                <div className="tariffs__box-card">
                    <div className="tariffs__box-standart">
                        <h3 className="tariffs__title-st">STANDART</h3>
                        <ul className="tariffs__ul">
                            <li className="tariffs__li">Ручной трейдинг</li>
                            <li className="tariffs__li">Автоматическое или полуавтоматическое копирование сделок</li>
                            <li className="tariffs__li">Личный кабинет со статистикой</li>
                            <li className="tariffs__li">Среднесрочные сделки с уровнями набора портфеля</li>
                        </ul>
                        <div className="tariffs__wrapper-tariff">
                          <div className="tariffs__price">$234</div>
                          <button className="tariffs__btn-price">12 месяцев</button>
                        </div>
                        <button className="tariffs__main-btn">Попробовать <br/><p className="tariffs__sm">5 дней бесплатно</p></button>
                    </div>

                    <div className="tariffs__box-vip">
                        <h3 className="tariffs__title-st">VIP</h3>
                        <ul className="tariffs__ul tariffs__ul-vip">
                            <li className="tariffs__li">Ручной трейдинг</li>
                            <li className="tariffs__li">Автоматическое или полуавтоматическое копирование сделок</li>
                            <li className="tariffs__li">Личный кабинет со статистикой</li>
                            <li className="tariffs__li">Краткосрочные, среднесрочные и инвест сделки</li>
                            <li className="tariffs__li">Доступ в Vip чат с командой</li>
                            <li className="tariffs__li">Наш авторский курс по трейдингу</li>
                        </ul>
                        <div className="tariffs__wrapper-tariff">
                            <div className="tariffs__price">$234</div>
                            <button className="tariffs__btn-price">12 месяцев</button>
                        </div>
                        <button className="tariffs__main-btn">Попробовать <br/><p className="tariffs__sm">5 дней бесплатно</p></button>
                    </div>
                </div>
            </div>
    </section>
  );
};
export default Tariffs;