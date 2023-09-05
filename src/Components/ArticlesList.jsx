import {useState, useEffect} from 'react'

import { getArticles } from './api'

import  ArticleCard  from './ArticleCard'

const ArticlesList = () => {

    const [ allArticles, setallArticles ] = useState([])

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        getArticles()
        .then((data)=>{
            setallArticles(data);
            setIsLoading(false);
        })
        .catch(() => {
            setIsLoading(false);
            setIsError(true);
          })
        }, []);

        if (isLoading) return <p>Loading...</p>;
        if (isError) return <p>Error</p>;

        

        return (
        
            <section className="articleList">
              {allArticles.map((article) => (
                <ArticleCard key={article.article_id} article={article} />
               
              )
              
              )
              }
           
            </section>
          );
        }
    
    export default ArticlesList;