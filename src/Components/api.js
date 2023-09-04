import axios from 'axios';

export const getArticles = () => {
    return axios 
    .get('https://topstories.onrender.com/api/articles')
    .then((response) => {
        return response.data.articles;
    })
}

export const getSingleArticle = (article_id) => {
    return axios 
    .get(`https://topstories.onrender.com/api/articles/${article_id}`)
    .then((response) => {
        return response.data.article;
    })
}