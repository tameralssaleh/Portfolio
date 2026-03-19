import MenuBar from "../components/MenuBar"
import portrait from "../assets/portrait.jpg"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="m-4 d-flex flex-column align-items-center justify-content-center gap-1 text-center">
            <h1 className="roboto bold">Tamer Alssaleh</h1>
            <p className="roboto">Welcome to my portfolio website! Here you can find information about myself, my projects, and other experience. Use the navigation menu below to get started.</p>
            <MenuBar />
            <div className="d-flex align-items-center justify-content-center gap-5">
                <div className="p-5">
                    <img className="portrait m-5" src={portrait} alt="Portrait of Tamer Alssaleh" />
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center gap-2 w-25">
                    <h2 className="roboto bold">About Me</h2>
                    <p className="roboto text-start">Hi! I'm Tamer. I am a passionate developer with experience in building web applications using modern technologies. I enjoy learning new skills while improving my existing ones. To learn more about me and see my skills as a developer, visit the <Link className="link" to="/about">About</Link> page.</p>
                    <h2 className="roboto bold">About This Portfolio</h2>
                    <p className="roboto text-start">This portfolio was built using mostly <Link className="link" to="https://react.dev/">React</Link> & the <Link className="link" to="https://getbootstrap.com/">Bootstrap</Link> CSS framework. On this site, you can explore my projects, check out my past work experience, and learn more about my academics, skills, and interests.</p>
                </div>
            </div>
            <p className="roboto text-start">Find me on <Link className="link" to="https://www.linkedin.com/in/tamer-alssaleh/">LinkedIn</Link> & <Link className="link" to="https://github.com/tameralssaleh">GitHub</Link>, or email me at <span>tameralssaleh8@gmail.com</span>!</p>
            <p className="roboto text-start">This site is up to date as of March 2026. Follow the <Link className="link" to="https://github.com/tameralssaleh/portfolio">repository</Link> on GitHub for future updates!</p>
        </div>
    )
}

export default Home