import { Link } from "react-router-dom"
import "../styles/index.css"

function MenuBar() {
    return (
        <nav>
            <div className="d-flex align-center justify-content-center gap-5 rounded-4 p-2 menu-bar" style={{ width: "50vw" }}>
                <h2><Link className="link bold" to="/">Home</Link></h2>
                <h2><Link className="link bold" to="/about">About</Link></h2>
                <h2><Link className="link bold" to="/projects">Projects</Link></h2>
                <h2><Link className="link bold" to="/experience">Experience</Link></h2>
            </div>
        </nav>
    )
}

export default MenuBar