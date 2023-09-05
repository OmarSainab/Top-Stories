import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleArticle } from './api'
import  ArticleDetails  from './ArticleDetails'

const SingleArticle = () => { 

    const [ article, setArticle ] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const { article_id } = useParams();

    useEffect(() =>{
    setIsLoading(true);
    setIsError(false);
    
    getSingleArticle(article_id)
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


       </>
    )
    }
    
    export default SingleArticle;