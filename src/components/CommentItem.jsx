import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import replyIcon from "../assets/images/icon-reply.svg";
import deleteIcon from "../assets/images/icon-delete.svg";
import editIcon from "../assets/images/icon-edit.svg";
import CommentReply from "./CommentReply";
import { useState, useContext, useEffect } from "react";
import CommentContext from "../context/CommentContext";
import CreateComment from "./CreateComment";

const CommentItem = ({ comment }) => {
  const { currentUser, createReply, setCreateReply } =
    useContext(CommentContext);

  let { id, score, createdAt, user, content, replies } = comment;

  const [isCurrentUser, setIsCurrentUser] = useState(false);

  const [num, setNum] = useState(score);

  useEffect(() => {
    currentUser.username === user.username && setIsCurrentUser(true);
    console.log(isCurrentUser);
  }, [currentUser.username, isCurrentUser, user.username]);

  return (
    <>
      <div className="comment">
        <div className="vote">
          <img src={plusIcon} alt="+" onClick={() => setNum(num + 1)} />
          <p>{num}</p>
          <img src={minusIcon} alt="-" onClick={() => setNum(num - 1)} />
        </div>
        <div className="commentContent">
          <div className="title">
            <img
              src={require(`../assets${user.image.png.slice(1)}`)}
              alt="User"
              className="avatar"
            />
            <p className="username">{user.username}</p>
            {isCurrentUser && <p className="currentUser">you</p>}
            <p className="time">{createdAt}</p>
          </div>
          <p className="commentText">{content}</p>
        </div>
        {isCurrentUser ? (
          <>
            <div className="reply">
              <img src={deleteIcon} alt="delete" />
              <p id="delete">&nbsp; Delete</p>
              <p>&nbsp; &nbsp; &nbsp;</p>
              <img src={editIcon} alt="edit" />
              <p>&nbsp; Edit</p>
            </div>
          </>
        ) : (
          <div className="reply" onClick={() => setCreateReply(!createReply)}>
            <img src={replyIcon} alt="reply" />
            <p>&nbsp; Reply</p>
          </div>
        )}
      </div>
      {createReply && (
        <CreateComment key={id} buttonText={"REPLY"} commentId={id} />
      )}
      <div className="container">
        {replies && (
          <div className="line">
            {replies.map((reply, id) => (
              <CommentReply key={id} reply={reply} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CommentItem;
