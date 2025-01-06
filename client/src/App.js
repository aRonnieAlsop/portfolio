import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost';
import TestAPI from './TestAPI';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
        <Route path="/test-api" element={<TestAPI />} /> {/* New Route for TestAPI */}
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/websites" element={<Websites />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
