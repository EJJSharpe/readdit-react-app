import React, { useState, useEffect } from 'react';
import { postArticle } from '../api'
import { navigate } from '@reach/router';
import styles from '../styles/NewArticleForm.module.scss'

const NewArticleForm = ({ user }) => {
    const [articleTitle, setArticleTitle] = useState('')
    const [articleBody, setArticleBody] = useState('')
    const [articleTopic, setArticleTopic] = useState('cats')
    const [isError, setIsError] = useState(false)



    const handleSubmit = async (e) => {
        e.preventDefault()

        const article = {
            title: articleTitle,
            body: articleBody,
            topic: articleTopic,
            author: user,
            created_at: Date.now()
        }


        try {
            const { article_id } = await postArticle(article)
            navigate(`/article/${article_id}`)

        } catch {
            setIsError(true)
        }
    }


    if (isError) return <div><p>Whoops! Something went wrong</p></div>

    else return (
        <div className={styles.container}>
            <h1>Post a new article</h1>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <label htmlFor='title'>Title</label>
                <input className={styles.titleInput} id='title' type='text' value={articleTitle} onChange={(e) => { setArticleTitle(e.target.value) }} placeholder='enter an title for your article'></input>
                <label htmlFor='topicdropdown'>Topic</label>
                <select id='topicdropdown' className={styles.dropdown} onChange={(e) => { setArticleTopic(e.target.value) }}>
                    <option defaultValue value={articleTopic}>cats</option>
                    <option value={"coding"}>coding</option>
                    <option value={"cooking"}>cooking</option>
                </select>
                <label htmlFor='body'>Body</label>
                <textarea id='body' className={styles.bodyInput} type='text' value={articleBody} onChange={(e) => { setArticleBody(e.target.value) }} placeholder='enter your article body'></textarea>
                <button type='submit'>Submit</button>
            </form>

        </div>
    );
};

export default NewArticleForm;