import { createContext, useEffect, useState } from "react";
import data from "../data/data.json";

const CommentContext = createContext();

export const CommentContextProvider = ({ children }) => {
  const [comments, setComments] = useState(data);

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  return (
    <CommentContext.Provider value={{ ...comments }}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContext;
