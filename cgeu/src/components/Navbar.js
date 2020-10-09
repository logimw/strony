import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "gatsby";
import links from "../constants/links";
import logo from "../images/logo.png";

import styles from "../css/navbar.module.css";

const Navbar = () => {
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav(isOpen => !isOpen);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.navHeader}>
          <Link to={"/"}>
            <img src={logo} alt="Cosmo Group logo" />
          </Link>
        </div>
        <button type="button" className={styles.logoBtn} onClick={toggleNav}>
          <FaAlignRight className={styles.logoIcon} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
