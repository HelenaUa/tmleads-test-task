import React from "react";
import "./Deals.css";
import Card from "../Card/Card"

const dealsData = [
  {
    pair: "NEAR/USDT",
    time: "SPOT – 1 мин. назад",
    profit: "58.6206%",
    target: 4,
    date: "Дата входа 06.10.2022",
  },
  {
    pair: "BTC/USDT",
    time: "SPOT – 1 мин. назад",
    profit: "6.02%",
    target: 3,
    date: "Дата входа 06.10.2022",
  },
  {
    pair: "ETH/USDT",
    time: "SPOT – 1 мин. назад",
    profit: "16.3%",
    target: 4,
    date: "Дата входа 06.10.2022",
  },
  {
    pair: "ETH/USDT",
    time: "SPOT – 1 мин. назад",
    profit: "0.963%",
    target: 4,
    date: "Дата входа 06.10.2022",
  }
];

const Deals = () => {
    return (
        <section className="deals">
            <div className="container deals__container"> 
                <div>
                    <h2 className="deals__title">Прошедшие сделки</h2> 
                    <p className="deals__state">Онлайн</p>
                </div>
                <div className="deals__list">
                    {dealsData.map((item, index) => (
                    <Card
                        key={index}
                        pair={item.pair}
                        time={item.time}
                        profit={item.profit}
                        target={item.target}
                        date={item.date}
                    />
                    ))}
                </div>
            </div>
        </section>
  );
};
export default Deals;