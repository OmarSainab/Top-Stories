import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../../utils/api";
import ArticleCard from "./ArticleCard";
import Topics from "./Topics";
import SortCard from "./SortCard";

const ArticlesList = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [sort, setSort] = useState('')
  const [order, setOrder] = useState('')

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getArticles({topic: topic, sort_by: sort, order: order})
      .then((data) => {
        setAllArticles(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [topic, sort, order]);


  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>An error has occured. Please refresh the page and try again.</p>;

  return (
    <div> 
  
      <Topics/>
      <SortCard sort={sort} setSort={setSort} order={order} setOrder={setOrder} getArticles={getArticles} />
      <section className="articleList">
        {allArticles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </section>
    </div>
  );
};

export default ArticlesList;
