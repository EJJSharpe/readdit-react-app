import React from 'react';
import SingleArticle from '../components/SingleArticle'
import { Router } from '@reach/router'

const Article = ({ user }) => {
    return (
        <Router>
            <SingleArticle path='/:article_id' user={user} />
        </Router>
    );
};

export default Article;