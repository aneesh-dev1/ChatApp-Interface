import { createContext, useEffect, useState } from "react";
import data from "../data/data.json";

const CommentContext = createContext();

export const CommentContextProvider = ({ children }) => {
  const [state, setState] = useState(data);

  const { comments, currentUser } = state;

  const addNewComment = (comment) => {
    console.log(comments.at(comments.length - 1).id);
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
    console.log(state);
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <CommentContext.Provider value={{ ...state, addNewComment }}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContext;
