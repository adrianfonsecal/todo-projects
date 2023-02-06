import { useEffect } from "react";
import { deleteProject } from "../../helpers/deleteProject";
import { Project } from "../../interfaces/projects"

interface ProjectProps {
  project: Project
}

export const ProjectsItems = ({project}: ProjectProps) => {

  const handleSubmit = (e: any) => {
    e.preventDefault();
    deleteProject(project.id);  
  };

  useEffect(() => {
    
  }, [project]);

  return (
    <>
    <a href="/update">
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{project.title}</div>
          {project.description}
          <p>{project.technology}</p>
        </div>
        <div >
          <button className="btn btn-success mx-2">Complete</button>
          <button onClick={handleSubmit} className="btn btn-danger">Delete</button>
        </div>
      </li>
    </a>
    </>
  );
}
