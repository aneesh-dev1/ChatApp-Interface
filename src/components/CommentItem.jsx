import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import replyIcon from "../assets/images/icon-reply.svg";
import deleteIcon from "../assets/images/icon-delete.svg";
import editIcon from "../assets/images/icon-edit.svg";
import avatarIcon from "../assets/images/avatars/image-amyrobson.png";
import CommentReply from "./CommentReply";
import { useState } from "react";

const CommentItem = () => {
  const [isCurrentUser, setIsCurrentUser] = useState(false);
  return (
    <>
      <div className="comment">
        <div className="vote">
          <img src={plusIcon} alt="+" />
          <p>12</p>
          <img src={minusIcon} alt="-" />
        </div>
        <div className="commentContent">
          <div className="title">
            <img src={avatarIcon} alt="User" className="avatar" />
            <p className="username">amyrobson</p>
            {isCurrentUser && <p className="currentUser">you</p>}
            <p className="time">1 month ago</p>
          </div>
          <p className="commentText">
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You've nailed the design and the
            responsiveness at various breakpoints works really well.
          </p>
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
          <div className="reply">
            <img src={replyIcon} alt="reply" />
            <p>&nbsp; Reply</p>
          </div>
        )}
      </div>
      <CommentReply />
    </>
  );
};

export default CommentItem;
