import MenuBar from "../components/MenuBar";
import ProjectTemplateCard from "../components/ProjectTemplateCard";
import hoxXyzBanner from "../assets/hocxyzbanner.png";
import spaceBattlesBanner from "../assets/spacebattlesbanner.png";
import hocXyzDesc from "../assets/text/hocxyzdesc.txt?raw";
import hocXyzLegacyDesc from "../assets/text/hocxyzlegacydesc.txt?raw";
import gillDesc from "../assets/text/gillproglangdesc.txt?raw";
import portfolioDesc from "../assets/text/myportfoliodesc.txt?raw";
import myMathToolDesc from "../assets/text/mymathtooldesc.txt?raw";
import dropDaBlockzDesc from "../assets/text/dropdablockzdesc.txt?raw";
import spaceBattlesDesc from "../assets/text/spacebattlesdesc.txt?raw";
import tspgDesc from "../assets/text/tspgdesc.txt?raw";

function Projects() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center gap-2 p-5">
            <MenuBar />
            <h1 className="roboto bold m-4">My Projects</h1>
            <div className="d-flex flex-column align-items-center justify-content-center gap-4 p-5 w-75">
                <p className="roboto">Here you can find most of my projects, showcasing my skills and experience in web & software development.</p>
                <h3>Web Projects</h3>
                <p>These projects demonstrate my web-development abilities, including front-end and back-end technologies, responsive design, and user experience optimization. Some of the technologies used in these projects include frameworks like React, Bootstrap, Express, and languages like JavaScript, TypeScript, PHP, and softwares like Apache, Nginx, Postman, etc. Some web projects in the future may be found under ".NET Projects" or other areas.</p>
                <div className="d-flex justify-content-center row gap-4">
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
                        title="My Personal Portfolio Website" 
                        description={portfolioDesc}
                        technologiesArray={["React", "Bootstrap", "JavaScript", "CSS", "npm", "Git", "GitHub"]}
                        imageObject={null}
                        projectLink="https://github.com/tameralssaleh/Portfolio"
                    />
                </div>
                <h3>Python Projects</h3>
                <p>These projects demonstrate my proficiency in Python programming, including scripting, automation, and software development. Some of the technologies used in these projects include Python, and various libraries and frameworks. Some of my Python projects are prototypes of others. An example of that is my GILL project, which uses a Python implementation as a prototype and proof of concept, while the final build is planned to be written in C. Some other Python projects may be found under "Game Development Projects" if Python is heavily used.</p>
                <div className="d-flex justify-content-center row gap-4">
                    <ProjectTemplateCard 
                        title="General Interpreted Lightweight Language (GILL)" 
                        description={gillDesc}
                        technologiesArray={["Python", "C", "Interpreter Design", "Git", "GitHub"]}
                        imageObject={null}
                        projectLink="https://github.com/tameralssaleh/gill-programming-lang"
                    />
                </div>
                <h3>.NET (C#) Projects</h3>
                <p>These projects demonstrate my proficiency in C# and the .NET framework. Some of these projects include web applications, windows forms applications, and others. Some technologies used in these projects include C#, .NET, ASP.NET, Entity Framework, Nuget, and others.</p>
                <div className="d-flex justify-content-center row gap-4">
                    <ProjectTemplateCard 
                        title="My Math Tool" 
                        description={myMathToolDesc}
                        technologiesArray={["C#", ".NET", "Windows Forms", "Git", "GitHub", "Nuget"]}
                        imageObject={null}
                        projectLink="https://github.com/tameralssaleh/MyMathTool"
                    />
                </div>   
                <h3>Game Development Projects</h3>  
                <p>These projects demonstrate my proficiency in various programming languages. These game development projects were something I had just put together for fun. Some of these projects were done in collaboration with others.</p>       
                <div className="d-flex justify-content-center row gap-4">
                    <ProjectTemplateCard 
                        title="Drop Da Blockz" 
                        description={dropDaBlockzDesc}
                        technologiesArray={["Python", "Python Libraries", "Git", "GitHub"]}
                        imageObject={null}
                        projectLink="https://github.com/tameralssaleh/DropDaBlockz"
                    />
                    <ProjectTemplateCard 
                        title="Space Battles" 
                        description={spaceBattlesDesc}
                        technologiesArray={["Python", "Python Libraries", "Git", "GitHub"]}
                        imageObject={spaceBattlesBanner}
                        imageSize={{width: "64px", height: "64px"}}
                        projectLink="https://github.com/tameralssaleh/Space-Battles"
                    />
                    <ProjectTemplateCard 
                        title="Tamer's Slow Progression Mod (TSPG)" 
                        description={tspgDesc}
                        technologiesArray={["Java", "Maven", "Gradle", "Git", "GitHub"]}
                        imageObject={null}
                        projectLink="https://github.com/tameralssaleh/neoforge-tspg-mod-1.21-plus"
                    />  
                </div>
            </div>
        </div>
    )
}

export default Projects