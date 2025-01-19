import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost';
import Projects from './components/Projects/Projects';
import Websites from './components/Websites/Websites';
import CommentPost from './components/comments/comment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/comments" element={<CommentPost />} />
      </Routes>
    </Router>
  );
}

export default App;
