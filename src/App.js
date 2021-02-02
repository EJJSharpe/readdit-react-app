import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './styles/index.scss'
import Home from './pages/Home'
import Article from './pages/Article'
import PostArticle from './pages/PostArticle'
import { Router } from '@reach/router'

function App() {
  const [user, setUser] = useState('tickle122')

  return (

    <div className="App">
      <Navbar user={user} />

      <Router>
        <Home path='/*' />
        <Article user={user} path='/article/*' />
        <PostArticle user={user} path='/postArticle' />
      </Router>
    </div>

  );
}

export default App;
