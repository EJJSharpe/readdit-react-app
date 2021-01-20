import React, { useEffect, useState } from 'react';
import { editArticleVotes, editCommentVotes } from '../api'

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
        <div>
            <p>votes: {votes + voteChange}</p>
            <button disabled={upVote} onClick={() => handleVote(1)}>👍</button>
            <button disabled={downVote} onClick={() => handleVote(-1)}>👎</button>
        </div>
    );
};

export default Voter;