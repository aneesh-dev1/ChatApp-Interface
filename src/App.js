import CommentList from "./components/CommentList";
import CreateComment from "./components/CreateComment";
import Footer from "./components/Footer";
import { CommentContextProvider } from "./context/CommentContext";

function App() {
  return (
    <CommentContextProvider>
      <div>
        <main>
          <CommentList />
          <CreateComment />
        </main>
        <Footer />
      </div>
    </CommentContextProvider>
  );
}

export default App;
