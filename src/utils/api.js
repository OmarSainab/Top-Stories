import axios from 'axios';

const newsApi = axios.create({
        baseURL:'https://topstories.onrender.com/api/'
    }) 

    export const getArticles = (paramValue) => {
        return newsApi.get("/articles", {params: paramValue}).then((response) => {
          return response.data.articles;
        });
      };



export const getArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
    .then((response) => {
        return response.data.article;
    })
}


export const getCommentsById = (article_id) => {
return newsApi.get(`articles/${article_id}/comments`)
.then((response) => {
    return response.data.comments;
})
}

export const patchArticleVotes = (article_id, request) => {
    return newsApi.patch(`articles/${article_id}`, request).then((response) => {
      return response;
    });
  };

  export const postCommentById = (article_id, request) =>{
    return newsApi.post(`articles/${article_id}/comments`, request).then((response) => {
        return response
  })
  }

  export const getTopics = () => {
    return newsApi.get('/topics')
    .then((response) => {
        return response.data.topics;
    })
}