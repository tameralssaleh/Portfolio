import { useState } from "react";
import { Link } from "react-router-dom";

function WorkExperienceTemplateCard({
    title,
    description,
    technologiesArray,
    positionName,
    duration,
    location,
    companySiteLink,
}: {
    title: string;
    description: string;
    technologiesArray: string[];
    positionName: string;
    duration: string;
    location: string;
    companySiteLink?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

    return (
    <>
    {/* Card */}
    <div className="work-exp-template-card d-flex flex-column align-items-center justify-content-center gap-2 p-3">
        <div className="d-flex align-items-center justify-content-center p-2 gap-4 w-100">
            <h4 className="roboto bold">{title} - {location}</h4>
        </div>
        <div className="d-flex flex-column align-items-start justify-content-center gap-2 p-3 w-100">
            <p className="roboto text-start description">{description}</p>
            <p className="roboto"><strong>Position:</strong> {positionName}</p>
            <p className="roboto"><strong>Duration:</strong> {duration}</p>
            {companySiteLink && (
                <p className="roboto text-start">To visit this company's site, click <Link className="link" to={companySiteLink}>here</Link>.</p>
            )}
            <div className="d-flex flex-column align-items-start justify-content-start w-100">
                <p className="roboto bold">Technologies Used:</p>
                <div className="d-flex flex-wrap gap-1">
                {technologiesArray.map((tech) => (
                    <p className="roboto bubble" key={tech}>{tech}</p>
                ))}
                </div>
            </div>
        </div>
        <button className="roboto bold" onClick={() => setIsModalOpen(true)}>Click Here to Expand</button>
    </div>
        {/* Modal */}
        {isModalOpen && (
            <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="d-flex flex-column gap-3">
                        <h2>{title}</h2>
                        <p><strong>Position:</strong> {positionName}</p>
                        <p><strong>Location:</strong> {location}</p>
                        <p><strong>Duration:</strong> {duration}</p>
                        <p>{description}</p>
                        <div>
                            <p className="roboto bold">Technologies Used:</p>
                            <div className="d-flex flex-wrap gap-1">
                                {technologiesArray.map((tech) => (
                                    <p className="roboto bubble" key={tech}>{tech}</p>
                                ))}
                            </div>
                        </div>
                        {companySiteLink && (<p>To visit this company's site, click <Link className="link" to={companySiteLink}>here</Link>.</p>)}
                    </div>
                    <button className="roboto bold" onClick={() => setIsModalOpen(false)}>Close</button>
                </div>
            </div>
        )}
        </>
    );
    }

export default WorkExperienceTemplateCard;