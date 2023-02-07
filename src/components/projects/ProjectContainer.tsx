import { Context, useContext } from "react";
import { ProjectContext } from "../../helpers/projectContext";
import { ProjectContextType } from "../../interfaces/projects";
import { ProjectsItems } from "./ProjectsItems"

export const ProjectContainer = () => {
  const { projects } = useContext<ProjectContextType>(ProjectContext as Context<ProjectContextType>);
  
  return (
    <>
        <div className="container" >
            <ol className="list-group list-group-numbered">
                {projects.map((project: any) => (
                    <ProjectsItems key={project.id} project={project}/>
                ))}
            </ol>
        </div>
    </>
  )
}
