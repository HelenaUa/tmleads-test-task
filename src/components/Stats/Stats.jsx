import React from "react";
import "./Stats.css"

const Stats = () => {
  return (
    <>
    <div className="stats__trapezoid"></div>
      <section className="stats">
          <div className="container stats__container">
              <div className="">
                  <h2 className="stats__title">Цифры</h2> 
                  <p className="stats__text">Cентябрь 2022</p>
              </div>
              <div>
                  <p className="stats__text stats__name">Торговой прибыли</p> 
                  <p className="stats__figure">2756%</p>
              </div>
              <div>
                  <p className="stats__text stats__name">фьючерсных и спотовых сделок</p> 
                  <p className="stats__figure">67</p>
              </div>
              <div>
                  <p className="stats__text stats__name">прибыль подписчиков</p> 
                  <p className="stats__figure">375000</p>
              </div>
          </div>
      </section>
      </>
  );
};
export default Stats;