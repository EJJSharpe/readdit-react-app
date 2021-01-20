import React, { useEffect, useState } from 'react';
import styles from '../styles/CommentsSection.module.scss'
import Voter from './Voter'
import AddComment from './AddComment'
import { getComments, deleteComment } from '../api'

const CommentsSection = ({ article_id, user }) => {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadContent = async () => {
            setComments(await getComments(article_id))
            setLoading(false)
        }

        loadContent()
    }, [])

    const handleDeleteComment = async (id) => {
        const commentsCopy = [...comments]
        const newComments = commentsCopy.filter(comment => {
            return comment.comment_id !== id
        })

        deleteComment(id)
        setComments(newComments)
    }

    return (
        <div className={styles.commentsSection}>
            <AddComment user={user} article_id={article_id} comments={comments} setComments={setComments} />
            {comments.map(comment => {
                const { comment_id, author, body, created_at, votes } = comment;
                return (
                    <div key={comment_id} className={styles.singleComment}>
                        <p>{body}</p>
                        <p>{author}</p>
                        <Voter votes={votes} comment_id={comment_id} />
                        <p>{new Date(created_at).toDateString()}</p>
                        {author === user ? <button onClick={() => { handleDeleteComment(comment_id) }}>Delete</button> : null}
                    </div>

                )
            })}
        </div>
    );
};

export default CommentsSection;