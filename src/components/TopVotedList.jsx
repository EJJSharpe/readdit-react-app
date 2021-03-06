import React, { useState, useEffect } from 'react';
import { getArticles } from '../api'
import { Link } from '@reach/router'
import styles from '../styles/TopVotedList.module.scss'
import Loading from './Loading'

const TopVotedList = () => {

    const [topVotedList, setTopVotedList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadContent = async () => {
            setTopVotedList(await getArticles({ sortBy: 'votes', limit: 5 }))
            setLoading(false)
        }
        loadContent()
    }, [])

    if (loading) return <Loading />
    else return (
        <div className={styles.topVotedList}>

            <div className={styles.cardsContainer}>
                <h2>Top Voted</h2>
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