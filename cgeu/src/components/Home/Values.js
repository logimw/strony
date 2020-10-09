import React from "react";
import styles from "../../css/values.module.css";
import values from "../../constants/values";
// import { graphql } from "gatsby";

const Values = () => {
  return (
    <section className={styles.values}>
      <div className={styles.center}>
        {values.map((item, index) => {
          return (
            <article key={index} className={styles.value}>
              <div>
                <img
                  src={require(`../../images/${item.icon}.png`)}
                  alt={`Icon of Cosmo Group value: ${item.icon}`}
                />
              </div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Values;
