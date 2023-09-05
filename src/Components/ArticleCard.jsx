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
        <Link to={`/articles/${article.article_id}`}>Click here to read more!</Link>
      </section>
    );
  };
  
export default ArticleCard;


