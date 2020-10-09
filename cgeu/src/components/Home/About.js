import React from "react";
import Title from "../Title";
import styles from "../../css/about.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <Title title={null} subtitle="Company" type="title" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutArticle}>
          <p className={styles.aboutText}>
            <strong>Cosmo Group</strong> is one of the leading international
            companies in the beauty industry. We respond to the needs of modern
            women. We inspire and set trends. The company’s portfolio includes
            the brands <strong>NeoNail</strong> and <strong>NEO Make Up</strong>
            . Their products can be bought in more than{" "}
            <strong>2,000 stores worldwide</strong>. Cosmo Group cosmetics are
            distinguished by their high quality, modernity and innovative
            solutions. Development, an
            <strong>
              innovative product range and high quality products
            </strong>{" "}
            are the main pillars of our strategy. We care not only about the
            quality of the products, but we also look for innovative promotion
            solutions.
          </p>
        </article>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutInfo}>
            <h3 className={styles.aboutInfoTitle}>Mission</h3>
            <p>
              We give you the power to express yourself at any moment.
              Incredible, everyday YOU.
            </p>
          </div>
          <div className={styles.aboutInfo}>
            <h3 className={styles.aboutInfoTitle}>Vision</h3>
            <p>
              The fastest developing, globally operated Polish beauty producer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
