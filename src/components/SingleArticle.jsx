import React, { useEffect, useState } from 'react';
import styles from '../styles/SingleArticle.module.scss'
import { getSingleArticle, getComments, postComment, deleteComment } from '../api'
import CommentsSection from './CommentsSection'

const SingleArticle = ({ article_id, user }) => {
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)


    const { title, body, topic, author, created_at } = article;

    useEffect(() => {
        const loadContent = async () => {
            const article = await getSingleArticle(article_id);
            const comments = await getComments(article_id);
            setArticle(article)
            setLoading(false)
        }

        loadContent()
    }, [article_id])

    if (loading) return (
        <div><p>Loading...</p></div>
    )
    else return (
        <div className={styles.container}>
            <div className={styles.article}>
                <h3>{title}</h3>
                <p>{body}</p>
                <p>{topic}</p>
                <p>{author}</p>
                <p>{new Date(created_at).toDateString()}</p>
                <CommentsSection article_id={article_id} user={user} />
            </div>
        </div>
    );
};

export default SingleArticle;