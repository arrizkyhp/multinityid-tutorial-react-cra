import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/todo">Todo List</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/login">Login</Link>
        </nav>
    )
}
