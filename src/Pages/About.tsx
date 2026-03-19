import { Link } from "react-router-dom"
import portrait from "../assets/portrait.jpg"
import MenuBar from "../components/MenuBar"
import "../styles/index.css"

function About() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-2 p-5">
        <MenuBar />
        <div className="d-flex flex-column align-items-center justify-content-center gap-2 p-5 w-50">
            <img className="portrait m-2" src={portrait} alt="Portrait of Tamer Alssaleh" style={{width: "300px", height: "300px"}}/>
            <h1 className="roboto bold">About Me</h1>
            <p className="roboto text-start">My name is Tamer Alssaleh. I am a passionate developer with experience in building web applications and software using modern technologies. I enjoy working in both front-end and back-end development environments. I also love to work around in databases as I have a strong SQL background.</p>
            <h3 className="roboto bold">Academic Goals</h3>
            <p className="roboto text-start">As of 2026, I am attending the University of Southern Indiana for a bachelor's degree in Computer Science & Mathematics. Originally, I began my degree with just Computer Science in mind, later I had added math to be a second major as part of my degree as I have a strong passion for working with numbers. After my bachelor's degree, I plan to spend some time in the workforce before going back to school for a master's degree or a PhD in either Computer Science, Mathematics, or a related field.</p>
            <h3 className="roboto bold">Where it All Began...</h3>
            <p className="roboto text-start">My passion with Computer Science & technology as a whole had not just started with me in college, rather as a kid I always enjoyed the idea of putting together something digitally or physically. I loved building computers, repairing and upgrading electronics around the house, and helping others with technical problems. When I was younger, I discovered I can make games in simple programming languages like Python, Lua, JavaScript, etc. This ultimately introduced me to the world of technology. Since then, I have been continuously learning and exploring new technologies, languages, frameworks, and more. I am always eager to take on new challenges and expand my skill-set.</p>
            <h3 className="roboto bold">Future Aspirations</h3>
            <p className="roboto text-start">In the future, I aspire to work in a dynamic and innovative environment where I can contribute to impactful projects. I am very interested in areas such as AI, ML/DL, data science, software engineering, and web development. I also hope to continue learning and growing as a developer, taking on new challenges and expanding my skill-set. Ultimately, I want to make a positive impact in the tech industry and contribute to the advancement of technology.</p>
            <h3 className="roboto bold">Life Long Goals</h3>
            <p className="roboto text-start">My lifelong goals include continuing my education and eventually entering research in the fields of Computer Science and Mathematics. I hope to one day solve problems that may have once thought to have been unsolvable, or one day come up with a solution that is more efficient than the last, or even teach newer passionate tech enthusiasts who also want to make a change in the world.</p>
            <h3 className="roboto bold">Skills</h3>
            <p className="roboto text-start">I have experience with a wide range of programming languages, frameworks, and tools. Some of the languages I have experience with include <span>Python, JavaScript, TypeScript, Java, C/C++, C#, PHP, SQL</span>, and more. Some of the frameworks and libraries I have experience with include <span>React, Node.js, Express.js, ASP.NET, ASP.NET (MVC), ASPX, Entity Framework Core, Numpy, Pandas</span>, and more. Some tools and software that I have experience in include <span>Git, GitHub, MS465 Suite, Azure DevOps, Visual Studio Code, Visual Studio, MySQL Workbench, SQL Server Management Studio (SSMS), phpMyAdmin, Apache Software, Nginx Software, Wireshark, Postman</span>, and more.</p>
            <p className="roboto text-start">Feel free to check out my <Link className="link" to="/projects">Projects</Link> & <Link className="link" to="/experience">Experience</Link> to see where I apply these skills.</p>
        </div>
    </div>
  )
}

export default About