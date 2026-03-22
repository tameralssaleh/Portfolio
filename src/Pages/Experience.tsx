import MenuBar from "../components/MenuBar"
import WorkExperienceTemplateCard from "../components/WorkExperienceTemplate"
import oneCallDesc from "../assets/text/onecallinterndesc.txt?raw"

function Experience() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center gap-2 p-5">
            <MenuBar />
            <h1 className="roboto bold m-4">My Work Experience</h1>
            <div className="d-flex flex-column align-items-center justify-content-center gap-4 p-5 w-75">
                <p className="roboto">Here you can find most of my work experience, showcasing my skills and experience in web & software development.</p>
                <h3>Internships</h3>
                <p>My internship experience demonstrates my ability to apply software engineering principles to real world applications, work collaboratively in a team environment, and adapt to new technologies and tools quickly.</p>
                <div className="d-flex justify-content-center row gap-4">
                    <WorkExperienceTemplateCard 
                        title="One Call" 
                        description={oneCallDesc}
                        positionName="IT Intern - Application Development"
                        duration="May 27th - August 8th, 2025 (10 weeks)"
                        location="Remote (United States)"
                        technologiesArray={["C#", "ASP.NET", "Azure DevOps", "MS365", "SSMS"]}
                        companySiteLink="https://www.onecallcm.com"
                    />
                </div>
            </div>
        </div>
    )
}

export default Experience