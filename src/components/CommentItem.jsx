import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import replyIcon from "../assets/images/icon-reply.svg";
import deleteIcon from "../assets/images/icon-delete.svg";
import editIcon from "../assets/images/icon-edit.svg";
import CommentReply from "./CommentReply";
import { useState, useContext, useEffect } from "react";
import CommentContext from "../context/CommentContext";
import CreateComment from "./CreateComment";
import DeleteModal from "./DeleteModal";

const CommentItem = ({ comment }) => {
  const { currentUser, changeScore, deleteComment, showDeleteModal } =
    useContext(CommentContext);

  const { id, score, createdAt, user, content, replies } = comment;

  const [isCurrentUser, setIsCurrentUser] = useState(false);

  const [createReply, setCreateReply] = useState(false);

  useEffect(() => {
    currentUser.username === user.username && setIsCurrentUser(true);
  }, [currentUser.username, isCurrentUser, user.username]);

  return (
    <>
      {showDeleteModal && <DeleteModal />}
      <div className="comment">
        <div className="vote">
          <img
            src={plusIcon}
            alt="+"
            className="clickable"
            onClick={() => changeScore("INC", id)}
          />
          <p>{score}</p>
          <img
            src={minusIcon}
            alt="-"
            className="clickable"
            onClick={() => changeScore("DEC", id)}
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
          <p className="commentText">{content}</p>
        </div>
        {isCurrentUser ? (
          <>
            <div className="reply">
              <div className="button delete" onClick={() => deleteComment(id)}>
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
        <CreateComment key={id} buttonText={"REPLY"} commentId={id} />
      )}
      <div className="container">
        {replies && (
          <div className="line">
            {replies.map((reply, id) => (
              <CommentReply key={id} reply={reply} commentId={comment.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CommentItem;
