import React from 'react';
import { Router } from '@reach/router';
import NewArticleForm from '../components/NewArticleForm'

const PostArticle = ({ user }) => {
    return (
        <NewArticleForm user={user} />
    )
};

export default PostArticle;