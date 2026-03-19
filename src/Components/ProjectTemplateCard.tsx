import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectTemplateCard({
  title,
  description,
  technologiesArray,
  imageObject = null,
  imageSize = { width: "100px", height: "100px" },
  projectLink,
}: {
  title: string;
  description: string;
  technologiesArray: string[];
  imageObject?: any;
  imageSize?: { width: string; height: string };
  projectLink?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="proj-template-card d-flex flex-column align-items-center justify-content-center gap-2 p-3">
        <div className="d-flex align-items-center justify-content-between p-2 gap-4 w-100">
          {imageObject && (
            <img
              src={imageObject}
              alt={`${title} image`}
              style={{ width: imageSize.width, height: imageSize.height }}
            />
          )}
          <h4 className="roboto bold">{title}</h4>
        </div>
        <div className="d-flex flex-column align-items-start justify-content-center gap-2 p-3 w-100">
          <p className="roboto text-start description">{description}</p>
          {projectLink && (
            <p className="roboto text-start">
              Find this project <Link className="link" to={projectLink}>here</Link>.
            </p>
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
        <button className="roboto bold" onClick={() => setIsModalOpen(true)}>
          Click Here to Expand
        </button>
      </div>
        {/* Modal */}
        {isModalOpen && (
            <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="d-flex flex-column gap-3">
                        {imageObject && (<img src={imageObject} alt={`${title} image`} style={{ width: imageSize.width, height: imageSize.height }}/>)}
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <div>
                            <p className="roboto bold">Technologies Used:</p>
                            <div className="d-flex flex-wrap gap-1">
                                {technologiesArray.map((tech) => (
                                    <p className="roboto bubble" key={tech}>{tech}</p>
                                ))}
                            </div>
                        </div>
                        {projectLink && (<p>Find this project <Link className="link" to={projectLink}>here</Link>.</p>)}
                    </div>
                    <button className="roboto bold" onClick={() => setIsModalOpen(false)}>Close</button>
                </div>
            </div>
        )}
        </>
    );
    }

export default ProjectTemplateCard;