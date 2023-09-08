import { Link } from 'react-router-dom'
const ArticleCard = ({ article }) => {
    
    return (
      <section className="articleCard">
        <h2>{article.title}</h2>
        <h3>Topic: {article.topic}</h3>
        <h4>Author: {article.author}</h4>
        <h4>Created: {article.created_at}</h4>
        <img src={article.article_img_url} alt={article.title} />
        <h4>{article.votes} Votes {article.comment_count} Comments</h4>
        <button>
        <Link to={`/articles/${article.article_id}`}>Click here to read more!</Link>
        </button>
   
      </section>
    );
  };
  
export default ArticleCard;


