import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost';
import Projects from './components/Projects/Projects';
import ProjectDetails from './components/ProjectDetails/ProjectDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" component={ProjectDetails} />
        {/* <Route path="/websites" element={<Websites />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
