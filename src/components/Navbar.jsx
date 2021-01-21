import React from 'react';
import { Link } from '@reach/router';
import styles from '../styles/Navbar.module.scss'


const Navbar = ({ user }) => {
    return (
        <div className={styles.navbar}>
            <Link to='/' className={styles.readditLink}>Readdit</Link>
            <p>Welcome <span>{user}</span></p>
        </div>
    );
};

export default Navbar;