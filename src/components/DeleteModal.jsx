import CommentContext from "../context/CommentContext";
import { useContext } from "react";

const DeleteModal = () => {
  const { setDeleteComment } = useContext(CommentContext);

  return (
    <>
      <div className="backdrop" onClick={() => setDeleteComment(false)}></div>
      <div className="modal">
        <h1>Delete Comment</h1>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="flex">
          <div
            className="submit button cancel"
            onClick={() => setDeleteComment(false)}
          >
            NO, CANCEL
          </div>
          <div className="submit button delete">YES, DELETE</div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
