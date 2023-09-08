
import { useContext, useState } from "react";
import { UserContext } from '../../contexts/Users';
import { deleteCommentById } from "../../utils/api";



const CommentCard = ({ comment }) =>
{

  const [isDeleted, setisDeleted] = useState(false);
  
  const { user } = useContext(UserContext);

  const handleClick = () => {
    deleteCommentById(comment.comment_id).then(() => {
      setisDeleted(true);
    });

    return;
  };

 
    return (
      <div hidden={isDeleted} className="commentCard">
      <section >
        <h2>By: {comment.author}, </h2>
        <p>Created at: {comment.created_at}</p>
        <h2>{comment.body}</h2>
        <p>Votes: {comment.votes}</p>
        <form>
        <button
          onClick={handleClick}
          hidden={user !== comment.author}
          className="delete-card"
        >
          Delete Comment
        </button>
      </form>
      </section>
      
      </div>

    );
   };
  
export default CommentCard;

