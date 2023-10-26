import { useState, useEffect } from "react";
import { getTopics } from "../../utils/api";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getTopics()
      .then((data) => {
        setTopics(data);
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
    
    <div className="topicsNav">
      <Link to="/" className="linkA">ALL ARTICLES </Link>
      {topics.map(({ slug }) => {
        return (
          <div key={slug}> 
            <Link to={`/topics/${slug}`} className="linkT">{slug.toUpperCase()} </Link>
          </div>
        );
      })}
      
    </div>
  );
};

export default Topics;
