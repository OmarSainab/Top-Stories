import { useContext, useState } from "react";
import { UserContext } from "../../contexts/Users";
import { deleteCommentById } from "../../utils/api";

const CommentCard = ({ comment }) => {
  const event = new Date(comment.created_at);
  const time = event.toUTCString();
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
      <section>
        <b>@{comment.author}: </b>
        <p>Created at: {time}</p>
        <p>{comment.body}</p>
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
