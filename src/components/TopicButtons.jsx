import React, { useState, useEffect } from 'react';
import styles from '../styles/TopicButtons.module.scss'
import { getTopics } from '../api'
import { Link } from '@reach/router'

const TopicButtons = () => {
    const [topicsList, setTopicsList] = useState([])

    useEffect(() => {
        const loadContent = async () => {
            setTopicsList(await getTopics())
        }
        loadContent()
    }, [])

    return (
        <div className={styles.container}>
            <h2>Topics</h2>
            <div className={styles.topicsContainer}>

                <ul className={styles.topicsList}>
                    {topicsList.map(topic => {
                        return (
                            <Link
                                className={styles.topicLink}
                                key={topic.slug}
                                to={`/${topic.slug}`}>
                                <li className={styles.topicListItem}>
                                    {topic.slug}
                                </li>
                            </Link>)
                    })}
                </ul>
            </div>
        </div>
    );
};

export default TopicButtons;