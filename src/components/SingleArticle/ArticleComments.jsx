import { useState, useEffect } from "react";

import { getCommentsById } from "../../utils/api";

import CommentCard from "./CommentCard";

import PostComment from "./PostComment";

const ArticleComments = ({ article, article_id }) => {
  const [allComments, setAllComments] = useState([]);


  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getCommentsById(article_id)
      .then((data) => {
        setAllComments(data);
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
        <PostComment 
        article_id={article_id}
        setAllComments={setAllComments}

        />
  <section className="articleList">
       <h2>Comments</h2>
      {allComments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment}  />
      ))} 
    </section>
    </div>
  
  );
};

export default ArticleComments;
