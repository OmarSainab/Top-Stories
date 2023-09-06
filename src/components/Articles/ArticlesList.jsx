import { useState, useEffect } from "react";
import { getArticles } from "../../utils/api";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getArticles()
      .then((data) => {
        setAllArticles(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div>
      <Topics
      setAllArticles={setAllArticles}/>
      <section className="articleList">
        {allArticles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </section>
    </div>
  );
};

export default ArticlesList;
