import React, { useState, useEffect } from 'react';
import styles from '../styles/ArticlesList.module.scss'
import { getArticles } from '../api'
import { Link } from '@reach/router'
import Voter from '../components/Voter'
import Loading from '../components/Loading'

const ArticlesList = ({ topic }) => {

    const [articlesList, setArticlesList] = useState([])
    const [loading, setLoading] = useState(true)
    const [sortBy, setSortBy] = useState('created_at')
    const [order, setOrder] = useState('desc')

    useEffect(() => {
        const loadContent = async () => {
            setArticlesList(await getArticles({ topic, limit: 10, sortBy, order }))
            setLoading(false)
        }
        loadContent()
    }, [topic, order, sortBy])


    const handleSortByDate = async () => {
        if (sortBy !== 'created_at') {
            setSortBy('created_at')
            setOrder()
        }
        if (sortBy === 'created_at' && order === 'desc') {
            setOrder('asc')
        } else {
            setOrder('desc')
        }
    }

    const handleSortByVote = async () => {
        if (sortBy !== 'votes') {
            setSortBy('votes')
            setOrder('desc')
        }
        if (sortBy === 'votes' && order === 'desc') {
            setOrder('asc')
        } else {
            setOrder('desc')
        }
    }




    if (loading) return (
        <Loading />
    )

    return (
        <div>
            <div className={styles.topBarContainer}>
                <button className={styles.postBar}><h3 className={styles.postText}>Post a new article</h3></button>
                <div className={styles.sortButtonsContainer}>
                    <button onClick={handleSortByVote}><p>votes</p></button>
                    <button onClick={handleSortByDate}><p>date</p></button>
                </div>
            </div>

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