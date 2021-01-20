import React, { useState } from 'react';
import styles from '../styles/AddComment.module.scss'
import { postComment } from '../api'

const AddComment = ({ article_id, user, comments, setComments }) => {
    const [commentBody, setCommentBody] = useState('')

    const handleCommentPost = (event) => {
        event.preventDefault()
        setComments([{
            author: user,
            body: commentBody,
            created_at: new Date(),
            votes: 0
        },
        ...comments]
        )
        postComment(article_id, { commentBody, user })
    }


    return (
        <div className={styles.addComment}>
            <form className={styles.formContainer} onSubmit={handleCommentPost}>
                <input className={styles.formTextInput} id='body' type='text' value={commentBody} onChange={(e) => { setCommentBody(e.target.value) }} placeholder='type your comment here'></input>
                <button className={styles.submitButton} type='submit'>Post</button>
            </form>
        </div>
    );
};

export default AddComment;