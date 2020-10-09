import React from "react";
import Title from "../Title";
import styles from "../../css/certificates.module.css";

const Certifcates = () => {
  return (
    <section className={styles.certificates}>
      <Title subtitle="certificates and awards" type="title" />
      <article className={styles.certificatesContainer}>
        <div className={styles.certificatesInfo}>
          <p>
            The company has received the{" "}
            <strong>Business Gazelles award</strong> and the distinction from{" "}
            <strong>Forbes Diamonds 2018</strong>. <br /> The Cosmo Group was
            awarded a certificate confirming that the harmonised norm, ISO
            22716, is followed by the company:{" "}
            <strong>Cosmetics – Good Manufacturing Practices</strong>
            (GMP).
          </p>
        </div>
        <div className={styles.certificatesRow}>
          <div>
            <img src={require("../../images/certyfikat_1.png")} alt="" />
          </div>
          <div>
            <img src={require("../../images/certyfikat_2.png")} alt="" />
          </div>
          <div>
            <img src={require("../../images/certyfikat_3.png")} alt="" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Certifcates;
