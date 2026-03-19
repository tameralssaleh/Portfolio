import { Link } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import ProjectTemplateCard from "../components/ProjectTemplateCard";
import hoxXyzBanner from "../assets/hocxyzbanner.png";
import hocXyzDesc from "../assets/text/hocxyzdesc.txt?raw";
import hocXyzLegacyDesc from "../assets/text/hocxyzlegacydesc.txt?raw";
import gillDesc from "../assets/text/gillproglangdesc.txt?raw";

function Projects() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-2 p-5">
        <MenuBar />
        <h1 className="roboto bold m-4">My Projects</h1>
        <div className="d-flex flex-column align-items-center justify-content-center gap-2 p-5 w-75">
            <p className="roboto">Here you can find most of my projects, showcasing my skills and experience in web & software development.</p>
            <ProjectTemplateCard 
                title="House of Code Project" 
                description={hocXyzDesc}
                technologiesArray={["React", "Express.js", "MySQL", "Linux", "Nginx"]}
                imageObject={hoxXyzBanner}
                imageSize={{width: "96px", height: "54px"}}
                projectLink="https://houseofcode.xyz"
            />
            <ProjectTemplateCard 
                title="House of Code Project [LEGACY]" 
                description={hocXyzLegacyDesc}
                technologiesArray={["HTML/CSS/JS", "PHP", "MySQL", "Apache Software"]}
                imageObject={hoxXyzBanner}
                imageSize={{width: "96px", height: "54px"}}
                projectLink="https://github.com/tameralssaleh/hoc.xyz--LEGACY-"
            />
            <ProjectTemplateCard 
                title="General Interpreted Lightweight Language (GILL)" 
                description={gillDesc}
                technologiesArray={["Python", "C", "Interpreter Design", "Git", "GitHub"]}
                imageObject={null}
                projectLink="https://github.com/tameralssaleh/gill-programming-lang"
            />
        </div>
    </div>
  )
}

export default Projects