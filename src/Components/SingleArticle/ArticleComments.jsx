import {useState, useEffect} from 'react'

import { getCommentsById } from '../utils/api'

import  CommentCard  from './CommentCard'

const ArticleComments = ({article, article_id}) => {

    const [ allComments, setAllComments ] = useState([])

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);



    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        getCommentsById(article_id)
        .then((data)=>{
          setAllComments(data);
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
              <h2>Comments: {article.comment_count}</h2>
              {allComments.map((comment) => (
                <CommentCard key={comment.comment_id} comment={comment} />
                
              )
              
              )
              }
           
            </section>
          );
        }
    
    export default ArticleComments;

