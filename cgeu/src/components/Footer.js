import React from "react";
import { Link } from "gatsby";
import links from "../constants/links";
import styles from "../css/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          );
        })}
      </div>
      <div className={styles.copyright}>COSMO GROUP</div>
    </footer>
  );
};

export default Footer;
