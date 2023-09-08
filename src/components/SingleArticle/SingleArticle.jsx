import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleById } from '../../utils/api'
import  ArticleDetails  from './ArticleDetails'
import ArticleComments from './ArticleComments'
import ArticleVotes from './ArticleVotes'


const SingleArticle = () => { 

    const [ article, setArticle ] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const { article_id } = useParams();

    useEffect(() =>{
    setIsLoading(true);
    setIsError(false);
    
    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

    return(
       <>
       
       <ArticleDetails article={article}/>
       <ArticleVotes article_id={article_id} votes={article.votes} />
       <ArticleComments article_id={article_id} article={article} />
    
       


       </>
    )
    }
    
    export default SingleArticle;


