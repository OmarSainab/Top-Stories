import { useContext, useState } from "react";
import { postCommentById } from "../../utils/api";
import { UserContext } from "../../contexts/Users";

const PostComment = ({ article_id, setAllComments }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const commentToAdd = {
      author: user,
      body: newComment,
      votes: 0,
      comment_id: "comment_id",
      created_at:  Date.now()
    };
    setAllComments((currComments) => [commentToAdd, ...currComments]);

    const commentObj = { username: user, body: newComment };

    postCommentById(article_id, commentObj)
      .then(() => {
        setNewComment("");
        setIsLoading(false);
      })
      .catch(() => {
        alert(
          "Your comment could not be posted at this time please try again later"
        );
      });
  };
  return (
    <form className="commentForm" onSubmit={handleSubmit}>
      <label htmlFor="newComment"><b>Comment as @{user}: </b></label>
      <input
        id="newComment"
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
        type="text"
      ></input>
      <button type="submit"> Comment</button>
    </form>
  );
};

export default PostComment;
