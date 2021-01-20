import React from 'react';
import { Link } from '@reach/router';
import styles from '../styles/Navbar.module.scss'


const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link to='/' className={styles.readditLink}>Readdit</Link>
            <p>Welcome <span>tickle122</span></p>
        </div>
    );
};

export default Navbar;