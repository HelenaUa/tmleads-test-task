import React from "react";

const Tariffs = () => {
  return (
    <section className="tariffs">
        
          <h2>тарифы</h2> 
          <div>
              <button>СПОТ</button>
              <button>фьючерс</button>
          </div>
          <div>
              <h3>STANDART</h3>
              <ul>
                  <li>Ручной трейдинг</li>
                  <li>Автоматическое или полуавтоматическое копирование сделок</li>
                  <li>Личный кабинет со статистикой</li>
                  <li>Среднесрочные сделки с уровнями набора портфеля</li>
              </ul>
              <div></div>
              <button>Попробовать 5 дней бесплатно</button>
          </div>

          <div>
              <h3>VIP</h3>
              <ul>
                  <li>Ручной трейдинг</li>
                  <li>Автоматическое или полуавтоматическое копирование сделок</li>
                  <li>Личный кабинет со статистикой</li>
                  <li>Краткосрочные, среднесрочные и инвест сделки</li>
                  <li>Доступ в Vip чат с командой</li>
                  <li>Наш авторский курс по трейдингу</li>
              </ul>
              <div></div>
              <button>Попробовать 5 дней бесплатно</button>
          </div>
            
    </section>
  );
};
export default Tariffs;