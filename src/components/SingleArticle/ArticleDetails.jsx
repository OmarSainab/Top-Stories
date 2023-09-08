import { Link } from 'react-router-dom'

const ArticleDetails = ({ article }) => {
  const event = new Date(article.created_at);
  const time = event.toUTCString();
  
    return (
      <section className="articleDetails">
        <h2>{article.title}</h2>
        <img src={article.article_img_url} alt={article.title} />
        <p><b>Author:</b> {article.author}, <b>Created:</b> {time}</p>
        <p  className="articleBody">{article.body}</p>
      </section>
    );
  };
  
export default ArticleDetails;



