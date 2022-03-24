import PostsListView from "./components/PostsListView/PostsListView";
import './styles/global.scss'
import {QueryClientProvider} from "react-query";
import {BrowserRouter as Router,Navigate, Route, Routes} from "react-router-dom";
import {PostByIdView} from "./components/PostByIdView/PostByIdView";
import {queryClient} from "./hooks/queryClient";
import {ReactQueryDevtoolsPanel} from "react-query/devtools";

function App() {

  return (
      <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
            <Routes>
                <Route path="/" element={<PostsListView/>}/>
                <Route path="/:postId" element={<PostByIdView/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>

        </Router>
        <ReactQueryDevtoolsPanel handleDragStart={true} setIsOpen={true}/>
       </QueryClientProvider>
      </div>
  );
}

export default App;
