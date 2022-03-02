import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import replyIcon from "../assets/images/icon-reply.svg";
import deleteIcon from "../assets/images/icon-delete.svg";
import editIcon from "../assets/images/icon-edit.svg";
import CommentContext from "../context/CommentContext";
import CreateComment from "./CreateComment";
import { useContext, useEffect, useState } from "react";

const CommentReply = ({ reply, commentId }) => {
  const { currentUser, changeScore, deleteComment } =
    useContext(CommentContext);

  const { id, replyingTo, score, createdAt, user, content } = reply;

  const [isCurrentUser, setIsCurrentUser] = useState(false);

  const [createReply, setCreateReply] = useState(false);

  useEffect(() => {
    currentUser.username === user.username && setIsCurrentUser(true);
    console.log(isCurrentUser);
  }, [currentUser.username, isCurrentUser, user.username]);
  return (
    <>
      <div className="comment replyComment">
        <div className="vote">
          <img
            src={plusIcon}
            className="clickable"
            alt="+"
            onClick={() => changeScore("INC", commentId, id)}
          />
          <p>{score}</p>
          <img
            src={minusIcon}
            className="clickable"
            alt="-"
            onClick={() => changeScore("DEC", commentId, id)}
          />
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
          <p className="commentText">
            <span className="username">@{replyingTo}</span> {content}
          </p>
        </div>
        {isCurrentUser ? (
          <>
            <div className="reply">
              <div
                className="button delete"
                onClick={() => deleteComment(commentId, id)}
              >
                <img src={deleteIcon} alt="delete" />
                <p>&nbsp; Delete</p>
              </div>
              <p>&nbsp; &nbsp; &nbsp;</p>
              <div className="button edit">
                <img src={editIcon} alt="edit" />
                <p>&nbsp; Edit</p>
              </div>
            </div>
          </>
        ) : (
          <div
            className="reply button edit"
            onClick={() => setCreateReply(!createReply)}
          >
            <img src={replyIcon} alt="reply" />
            <p>&nbsp; Reply</p>
          </div>
        )}
      </div>
      {createReply && (
        <div className="replyComment">
          <CreateComment
            key={id}
            buttonText={"REPLY"}
            replyId={id}
            commentId={commentId}
          />
        </div>
      )}
    </>
  );
};

export default CommentReply;
