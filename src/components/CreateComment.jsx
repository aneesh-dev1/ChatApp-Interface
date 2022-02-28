import { useContext, useState } from "react";
import CommentContext from "../context/CommentContext";

const CreateComment = () => {
  const { currentUser, addNewComment } = useContext(CommentContext);
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewComment(text);
    setText("");
  };
  return (
    <div className="comment createComment">
      <img
        src={require(`../assets${currentUser.image.png.slice(1)}`)}
        alt="User"
        className="avatar comment"
      />
      <form className="commentForm" onSubmit={handleSubmit}>
        <textarea
          className="inputComment"
          name="comment"
          placeholder="Add a comment..."
          style={{ height: "4rem", width: "80%" }}
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <button className="submit" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default CreateComment;
