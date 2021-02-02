import React from 'react';
import ArticlesList from '../components/ArticlesList'
import '../styles/index.scss'
import TopVotedList from '../components/TopVotedList'
import TopicButtons from '../components/TopicButtons'
import { Router } from '@reach/router'
import Loading from '../components/Loading'

const Home = () => {
    return (
        <div className='innerGrid'>
            <div className='leftGrid'>
                <Router>
                    <ArticlesList path='/' />
                    <ArticlesList path='/:topic' />
                </Router>
            </div>
            <div className='rightGrid'>
                <Router>
                    <TopicButtons path='/' />
                    <TopicButtons path='/:topic' />
                </Router>
                <Router>
                    <TopVotedList path='/' />
                    <TopVotedList path='/:topic' />
                </Router>
            </div>
        </div>
    );
};

export default Home;