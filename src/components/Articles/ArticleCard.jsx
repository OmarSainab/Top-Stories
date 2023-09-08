import { Link } from 'react-router-dom'
const ArticleCard = ({ article }) => {
  const event = new Date(article.created_at);
  const time = event.toUTCString();
  
    return (
      <section className="articleCard">
        <h3>{article.title}</h3>
        <img src={article.article_img_url} alt={article.title} />
        <p><b>Topic:</b> {article.topic}</p>
        <p><b>Author:</b> {article.author}</p>
        <p><b>Created:</b> {time}</p>
        <p>{article.votes} Votes {article.comment_count} Comments</p>
        <button className='readMore'>
        <Link to={`/articles/${article.article_id}`}>Read more</Link>
        </button>
   
      </section>
    );
  };
  
export default ArticleCard;


