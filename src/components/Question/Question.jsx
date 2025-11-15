import React from "react";
import "./Question.css";
import { useState } from 'react';

const data = [
  {
    q: "Что такое TradeBlade",
    a: `Мы опытная команда, для которой трейдинг – профессия. TradeBlade является 
       авторизованным официальным брокером биржи Binance.`,

    c: `Он представляет пользователям множество преимуществ, таких как более высокая 
       скорость синхронизации API и возможность создать учетную запись Binance через 
       платформу TradeBlade всего в 1 клик.`
  },
  {
    q: "Что TradeBlade предлагает инвесторам",
    a: `Мы опытная команда, для которой трейдинг – профессия...`
  },
  {
    q: "Должен ли я перевести свои средства на TradeBlade",
    a: `Мы опытная команда, для которой трейдинг – профессия...`
  }
];

const Question = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
    };
    
  return (
    <section className="question" id="question">
        <div className="container question__container">
            <h2 className="question__title">часто задаваемые вопросы</h2>

                {data.map((item, i) => (
                    <div key={i} className="question__item">
                        <button className={`question__header ${openIndex === i ? "active" : ""}`}
                            onClick={() => toggle(i)}>
                            <span className="question__span">{item.q}</span>
                            <span className={`arrow ${openIndex === i ? "open" : ""}`}>⌃</span>
                        </button>

                        {openIndex === i && (
                        <div className="question__content">
                            {item.a}<br/><br/>{item.c}
                        </div>
                        )}
                    </div>
                ))}
        </div>
    </section>
  );
};
export default Question;