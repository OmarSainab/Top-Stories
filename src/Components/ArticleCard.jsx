import { Link } from 'react-router-dom'
const ArticleCard = ({ article }) => {
    
    return (
      <section className="articleCard">
        <h2>{article.title}</h2>
        <h3>Topic: {article.topic}</h3>
        <p>Author: {article.author}</p>
        <p>Created: {article.created_at}</p>
        <img src={article.article_img_url} alt={article.title} />
        <p>Comments: {article.comment_count}</p>
        <p>Votes: {article.votes}</p>
        <Link to={`${article.article_id}`}>Click here to read more!</Link>
      </section>
    );
  };
  
export default ArticleCard;



//<Link to={`${article.article_id}`}>Click here to read more!</Link> - this links to the SingleArticle component which has a path specified in App.jsx of /articles/:article_id
//article.article_id will give you just the article id remember article is the object and article_id is the key 
//so when you're on the ArticlesList page which has a route of /articles and from there when you click Link to it takes you to /articleid e.g. id id is 34 it links to /34 