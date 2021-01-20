import axios from 'axios'

export const getArticles = async ({ topic, sort_by, order, limit }) => {
    const { data } = await axios.get("https://readdit-api.herokuapp.com/api/articles", {
        params: { topic, sort_by, order, limit }
    })
    return data.articles;
};

export const getTopics = async () => {
    const { data } = await axios.get('https://readdit-api.herokuapp.com/api/topics');
    return data.topics;
}

export const getSingleArticle = async (article_id) => {
    const { data } = await axios.get(`https://readdit-api.herokuapp.com/api/articles/${article_id}`);
    console.log(article_id)
    return data.article;
}

export const getComments = async (article_id) => {
    const { data } = await axios.get(`https://readdit-api.herokuapp.com/api/articles/${article_id}/comments`);
    return data.comments;
}

export const postComment = async (article_id, { user, commentBody }) => {
    const response = await axios.post(`https://readdit-api.herokuapp.com/api/articles/${article_id}/comments`, { username: user, body: commentBody })
    return response;
}

export const deleteComment = async (comment_id) => {
    const response = await axios.delete(`https://readdit-api.herokuapp.com/api/comments/${comment_id}`)
    return response;
}

export const editCommentVotes = async (comment_id, content) => {
    const response = await axios
        .patch(`https://readdit-api.herokuapp.com/api/comments/${comment_id}`, content)
    return response;
}

export const editArticleVotes = async (article_id, content) => {
    const response = await axios
        .patch(`https://readdit-api.herokuapp.com/api/articles/${article_id}`, content)
    return response;
}

