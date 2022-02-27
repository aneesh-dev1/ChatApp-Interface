import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import replyIcon from "../assets/images/icon-reply.svg";
import deleteIcon from "../assets/images/icon-delete.svg";
import editIcon from "../assets/images/icon-edit.svg";
import avatarIcon from "../assets/images/avatars/image-amyrobson.png";
import CommentReply from "./CommentReply";
import { useState, useContext } from "react";
import CommentContext from "../context/CommentContext";

const CommentItem = ({ comment }) => {
  const { currentUser } = useContext(CommentContext);

  let { score, createdAt, user, content, replies } = comment;

  const [isCurrentUser, setIsCurrentUser] = useState(false);
  return (
    <>
      <div className="comment">
        <div className="vote">
          <img src={plusIcon} alt="+" />
          <p>{score}</p>
          <img src={minusIcon} alt="-" />
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
        {/* TODO: Check if user = currentuser */}
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
          <div className="reply">
            <img src={replyIcon} alt="reply" />
            <p>&nbsp; Reply</p>
          </div>
        )}
      </div>
      {/* TODO: Map through replies array and display replies */}
      {replies && <CommentReply />}
    </>
  );
};

export default CommentItem;
