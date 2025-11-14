import React from "react";
import "./Card.css";
import ForCard from "../../assets/images/for-card.png"

const Card = ({ pair, time, profit, target, date }) => {
    return (
        <div className="card">
            <div className="card__logo"><img src={ForCard} alt="logo"/></div> 
          
            <div className="card__header">
                <p className="card__pair">{pair}</p>
                <p className="card__time">{time}</p>
            </div>

            <div className="card__profit-block">
                <p className="card__profit-title">ПРИБЫЛЬ</p>
                <p className="card__profit">{profit} ↑</p>
            </div>

            <div className="card__footer">
                <span className="card__target">Цель {target}</span>
                <span className="card__date">{date}</span>
            </div>
        </div>
  );
};

export default Card;
