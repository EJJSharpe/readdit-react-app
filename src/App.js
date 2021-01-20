import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ArticlesList from './components/ArticlesList'
import './styles/index.scss'
import TopVotedList from './components/TopVotedList'
import TopicButtons from './components/TopicButtons'
import SingleArticle from './components/SingleArticle'
import { Router } from '@reach/router'

function App() {
  const [user, setUser] = useState('tickle122')

  return (
    <div className="App">
      <Navbar />
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
      <Router>
        <SingleArticle path='/article/:article_id' user={user} />
      </Router>

    </div>
  );
}

export default App;
