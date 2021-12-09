import './App.css';
import { Route, Routes } from 'react-router';
import Todo from './components/Todo';
import Home from './components/Home';
import Nav from './components/Nav';
import AboutTodo from './components/Todo/AboutTodo';
import Blog from './components/Blog';
import BlogDetail from './components/Blog/BlogDetail';
import NotFound from './components/NotFound';
import Login from './components/Login';

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo" element={<Todo />}>
          <Route path="about" element={<AboutTodo />} />
        </Route>
        <Route path="blog" element={<Blog />}/>
        <Route path="blog/:slug" element={<BlogDetail />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
