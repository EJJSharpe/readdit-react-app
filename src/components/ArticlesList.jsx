import React, { useState, useEffect } from 'react';
import styles from '../styles/ArticlesList.module.scss'
import { getArticles } from '../api'
import { Link } from '@reach/router'
import spinner from '../images/loadingSpinner.svg'
import Voter from '../components/Voter'

const ArticlesList = () => {

    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadContent = async () => {
            setArticlesList(await getArticles({}))
            setIsLoading(false)
        }
        loadContent()
    }, [])

    if (isLoading) return (
        <div>
            <img src={spinner} alt='loading' />
        </div>
    )

    return (
        <div>
            <div className={styles.cardsContainer}>
                {articlesList.map(article => {

                    const { article_id, author, created_at, title, topic, votes } = article;
                    return (
                        <div key={article_id} className={styles.articleCard}>
                            <p className={styles.headerLine}>Posted by <span>{author}</span> on {new Date(created_at).toDateString()}</p>
                            <Link className={styles.link} to={`/article/${article_id}`}><h3>{title}</h3></Link>
                            <p className={styles.topicTag}>{topic}</p>
                            <Voter votes={votes} article_id={article_id} />
                        </div>
                    )
                })
                }

            </div >

        </div>
    );
};

export default ArticlesList;