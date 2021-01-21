import React from 'react';
import styles from '../styles/Loading.module.scss'

const Loading = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.loadingText}>Loading...</h2>
        </div>
    );
};

export default Loading;