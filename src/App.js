import CommentList from "./components/CommentList";
import CreateComment from "./components/CreateComment";
import { CommentContextProvider } from "./context/CommentContext";

function App() {
  return (
    <CommentContextProvider>
      <div>
        <main>
          <CommentList />
          <CreateComment />
        </main>
      </div>
    </CommentContextProvider>
  );
}

export default App;
