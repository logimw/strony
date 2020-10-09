import React from "react";
import Title from "../Title";
import styles from "../../css/export.module.css";

const Export = () => {
  return (
    <section className={styles.export}>
      <Title title={null} subtitle="export" type="title" color="white" />
      <article className={styles.exportContainer}>
        <div className={styles.exportInfo}>
          <p>
            Our distribution network extends across European borders, and the
            map of the world continually broadens our horizons. Currently, our
            products are exported to more than <strong>40 COUNTRIES</strong> all
            over the world and we cooperate with <strong>80 CONTRACTORS</strong>{" "}
            on <strong>4 CONTINENTS</strong>.
          </p>
        </div>
        <div className={styles.exportMap}>
          <img
            src={require("../../images/mapa.png")}
            alt="Map of partners countries"
          />
        </div>
      </article>
    </section>
  );
};

export default Export;
