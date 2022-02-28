import { useContext } from "react";
import CommentContext from "../context/CommentContext";

const CreateComment = () => {
  const { currentUser } = useContext(CommentContext);
  return (
    <div className="comment createComment">
      <img
        src={require(`../assets${currentUser.image.png.slice(1)}`)}
        alt="User"
        className="avatar comment"
      />
      <form className="commentForm">
        <textarea
          className="inputComment"
          name="comment"
          placeholder="Add a comment..."
          style={{ height: "65px", width: "510px" }}
        />
        <button className="submit" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default CreateComment;
