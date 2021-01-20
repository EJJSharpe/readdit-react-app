import React, { useState, useEffect } from 'react';
import { getArticles } from '../api'
import { Link } from '@reach/router'
import styles from '../styles/TopVotedList.module.scss'

const TopVotedList = () => {

    const [topVotedList, setTopVotedList] = useState([])

    useEffect(() => {
        const loadContent = async () => {
            setTopVotedList(await getArticles({ sort_by: 'votes', limit: 5 }))
        }
        loadContent()
    }, [])

    return (
        <div className={styles.topVotedList}>

            <div className={styles.cardsContainer}>
                <h2>Top Voted List</h2>
                {topVotedList.map(article => {
                    return (
                        <div key={article.article_id} className={styles.articleCard}>
                            <Link className={styles.link} to={`/article/${article.article_id}`}><h3>{article.title}</h3></Link>
                            <p>{article.votes} <i class='bx bx-like' ></i></p>
                        </div>
                    )
                })
                }

            </div >
        </div>
    );
};

export default TopVotedList;