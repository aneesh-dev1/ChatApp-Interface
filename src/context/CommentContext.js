import { createContext, useEffect, useState } from "react";
import data from "../data/data.json";

const CommentContext = createContext();

export const CommentContextProvider = ({ children }) => {
  const [state, setState] = useState(data);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [commentToDelete, setCommentToDelete] = useState({
    commentId: null,
    replyId: null,
  });

  const [createReply, setCreateReply] = useState(false);

  const { comments, currentUser } = state;

  const addNewComment = (comment) => {
    const newComment = {
      id: comments.at(comments.length - 1).id + 1,
      content: comment,
      // Change time to calculated field
      createdAt: "5 seconds ago",
      replies: [],
      score: 6,
      user: currentUser,
    };
    comments.push(newComment);
    setState((prevState) => ({ ...prevState, comments }));
  };

  const addNewReply = (message, commentId, replyId) => {
    const comment = comments.find((item) => item.id === commentId);
    const replyToUsername = replyId
      ? comment.replies.find((item) => item.id === replyId).user.username
      : comment.user.username;
    const newReply = {
      id: comment.replies.length
        ? comment.replies.at(comment.replies.length - 1).id + 1
        : 1,
      content: message,
      // Change time to calculated field
      createdAt: "5 seconds ago",
      replyingTo: replyToUsername,
      score: 5,
      user: currentUser,
    };
    comment.replies.push(newReply);
    setState((prevState) => ({ ...prevState, comments }));
  };

  const updateComment = (message, commentId, replyId) => {
    const comment = comments.find((item) => item.id === commentId);
    if (replyId) {
      const reply = comment.replies.find((item) => item.id === replyId);
      reply.content = message;
    } else if (!replyId) {
      comment.content = message;
    }
    setState((prevState) => ({ ...prevState, comments }));
  };

  const changeScore = (whereTo, commentId, replyId) => {
    const comment = comments.find((item) => item.id === commentId);
    if (replyId) {
      const reply = comment.replies.find((item) => item.id === replyId);
      whereTo === "INC" ? reply.score++ : reply.score--;
    } else {
      whereTo === "INC" ? comment.score++ : comment.score--;
    }
    setState((prevState) => ({ ...prevState, comments }));
  };

  const deleteComment = (commentId, replyId) => {
    setShowDeleteModal(true);

    setCommentToDelete({ commentId, replyId });
  };

  const confirmDelete = () => {
    if (!commentToDelete.commentId) {
      setShowDeleteModal(false);
      return;
    }
    const comment = comments.find(
      (item) => item.id === commentToDelete.commentId
    );
    let filtered;
    if (commentToDelete.commentId && !commentToDelete.replyId) {
      filtered = comments.filter((item) => item !== comment);
      setState((prevState) => ({ ...prevState, comments: filtered }));
    } else if (commentToDelete.commentId && commentToDelete.replyId) {
      filtered = comment.replies.filter(
        (item) => item.id !== commentToDelete.replyId
      );
      comment.replies = filtered;
      setState((prevState) => ({ ...prevState, comments }));
    }

    cancelDelete();
  };

  const cancelDelete = () => {
    setCommentToDelete({ commentId: null, replyId: null });

    setShowDeleteModal(false);
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <CommentContext.Provider
      value={{
        ...state,
        createReply,
        showDeleteModal,
        deleteComment,
        updateComment,
        confirmDelete,
        cancelDelete,
        setCreateReply,
        addNewComment,
        addNewReply,
        changeScore,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContext;
