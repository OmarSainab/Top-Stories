import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../../utils/api";
import ArticleCard from "./ArticleCard";
import Topics from "./Topics";

const ArticlesList = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { topic } = useParams();
//pass in topic so it can be used as a :topic endpoint
  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getArticles({topic: topic})
    //getArticles by params of topic
      .then((data) => {
        setAllArticles(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [topic]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div>
      <Topics
      allArticles={allArticles}/>
      <section className="articleList">
        {allArticles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </section>
    </div>
  );
};

export default ArticlesList;
