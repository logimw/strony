import React from "react";
import Title from "../Title";
import styles from "../../css/trades.module.css";
import tradeInfo from "../../constants/tradeInfo";
import ContactForm from "../ContactForm";

const ContactTest = () => {
  return (
    <section className={styles.trades}>
      <div className={styles.tradesCenter}>
        <div className={styles.tradesContainer}>
          <div className={styles.tradesElement}>
            <Title title="Trades fair plan 2020" />
            <ul>
              {tradeInfo.map((item, index) => {
                return (
                  <li key={index}>
                    <span className={styles.date}>{item.date}</span>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.webpage}>{item.webpage}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.tradesElement}>
            <Title title="Contact us" />
            <div className={styles.tradesText}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTest;
