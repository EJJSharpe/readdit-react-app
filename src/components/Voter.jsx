import React, { useEffect, useState } from 'react';
import { editArticleVotes, editCommentVotes } from '../api'
import styles from '../styles/Voter.module.scss'

const Voter = ({ votes, comment_id, article_id }) => {
    const [voteChange, setVoteChange] = useState(0)
    const [upVote, setUpVote] = useState(false)
    const [downVote, setDownVote] = useState(false)

    const handleVote = (inc_votes) => {
        if (comment_id) {
            editCommentVotes(comment_id, { inc_votes })
        } else {
            editArticleVotes(article_id, { inc_votes })
        }
        setVoteChange(voteChange + inc_votes)
    }

    useEffect(() => {
        if (voteChange > 0) {
            setDownVote(false)
            setUpVote(true)
        } else if (voteChange < 0) {
            setDownVote(true)
            setUpVote(false)
        } else {
            setDownVote(false)
            setUpVote(false)
        }

    }, [voteChange])

    return (
        <div className={styles.container}>
            <button className={styles.upVote} disabled={upVote} onClick={() => handleVote(1)}><i class='bx bx-like' ></i></button>
            <p>{votes + voteChange}</p>
            <button className={styles.downVote} disabled={downVote} onClick={() => handleVote(-1)}><i class='bx bx-dislike'></i></button>
        </div >
    );
};

export default Voter;