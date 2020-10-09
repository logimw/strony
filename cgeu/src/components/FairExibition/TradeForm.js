import React, { useState } from "react";
import Title from "../Title";
import styles from "../../css/trades.module.css";
import tradeInfo from "../../constants/tradeInfo";
import TradesForm from "../TradesForm";
import CarouselProvider from "../FairExibition/TradeSlider";

const TradeForm = () => {
  const [SignInForm, setSignInForm] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    trades: "",
    message: "",
  });

  function handleChange({ target }) {
    const updatedForm = { ...SignInForm, [target.name]: target.value };
    setSignInForm(updatedForm);
  }

  return (
    <section className={styles.trades}>
      <div className={styles.tradesCenter}>
        <div className={styles.tradesContainer}>
          <div className={styles.tradesElement}>
            <Title title="Trade fair plan 2020" inForm={true} />
            <ul>
              {tradeInfo.map((item, index) => {
                return (
                  <li key={index}>
                    <span className={styles.date}>{item.date}</span>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.webpage}>
                      <a
                        className={styles.link}
                        href={`https://${item.webpage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.webpage}
                      </a>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.tradesElement}>
            <Title title="Contact us" inForm={true} />
            <div className={styles.tradesText}>
              <TradesForm SignInForm={SignInForm} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className={styles.tradesContainerVertical}>
          <div className={styles.tradesContainerText}>
            <p className={styles.text}>
              <span className={styles.boldedText}>We take part</span> in the
              most important trade fairs in the industry.
              <span className={styles.boldedText}>
                The fairs we visited in 2019 include
              </span>
              : Cosmoprof Bologna, Intercharm Moscow, Beauty Eurasia Istanbul,
              Beauty Düsseldorf, Beautyworld Middle East, and Salon Look Madrid.
            </p>
          </div>
          <CarouselProvider
            className="slider_container"
            btnL="back"
            btnR="next"
            title="Cosmogroup at trade fairs"
          />
        </div>
      </div>
    </section>
  );
};

export default TradeForm;
