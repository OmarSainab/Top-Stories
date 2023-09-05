import { Link } from 'react-router-dom'
const CommentCard = ({ comment }) =>
{
    
    return (
      <section className="commentCard">
        <h2>By: {comment.author}, </h2>
        <p>Created at: {comment.created_at}</p>
        <h2>{comment.body}</h2>
        <p>Votes: {comment.votes}</p>
      </section>
    );
   };
  
export default CommentCard;


