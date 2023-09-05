const ArticleDetails = ({ article }) => {
    
    return (
      <section className="articleDetails">
        <h2>{article.title}</h2>
        <h3>Topic: {article.topic}</h3>
        <p>Author: {article.author}</p>
        <p>Created: {article.created_at}</p>
        <img src={article.article_img_url} alt={article.title} />
      </section>
    );
  };
  
export default ArticleDetails;



