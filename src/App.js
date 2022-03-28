import React from "react";
import './styles/global.scss'
import {QueryClientProvider} from "react-query";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {queryClient} from "./hooks/queryClient";
import {ReactQueryDevtoolsPanel} from "react-query/devtools";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const PostsListView = React.lazy(() => import("./components/PostsListView/PostsListView"));
const PostByIdView = React.lazy(() => import("./components/PostByIdView/PostByIdView"));

export default function App() {

  return (
      <div className="App">
          <QueryClientProvider client={queryClient}>
              <ErrorBoundary>
                  <React.Suspence fallback={<span>Loading...</span>}>
                      <Router>
                          <Routes>
                              <Route path="/" element={<PostsListView />}/>
                              <Route path="/:postId" element={<PostByIdView />}/>
                              <Route path="*" element={<Navigate to="/"/>}/>
                          </Routes>
                      </Router>
                  </React.Suspence>
              </ErrorBoundary>
            <ReactQueryDevtoolsPanel handleDragStart={true}  setIsOpen={false}/>
           </QueryClientProvider>
      </div>
  );
}

