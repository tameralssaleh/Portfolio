import { Link } from "react-router-dom"

function MenuBar() {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
            </div>
        </nav>
    )
}

export default MenuBar