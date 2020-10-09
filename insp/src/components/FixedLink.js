import React from 'react';
import { Link } from 'gatsby';
import styles from './fixedlink.module.scss';
import { BsPlus } from "react-icons/bs"

const FixedLink = () => {
    return (
        <Link to="/dodaj-inspiracje" className={styles.fixedLink}>
            <BsPlus />
            Dodaj <br/>inspirację
        </Link>
    );
}

export default FixedLink;
