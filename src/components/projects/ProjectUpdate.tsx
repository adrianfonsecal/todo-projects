import { Context, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProjectContext } from '../../helpers/projectContext';
import { ProjectContextType } from "../../interfaces/projects";
import { FormContainer } from "../form/FormContainer"

export const ProjectUpdate = () => {
  const { id } = useParams<{id: string}>();
  const { projects } = useContext<ProjectContextType>(ProjectContext as Context<ProjectContextType>);

  const currentProject = projects.find((project: any) => project.id === id);
  console.log(projects)
  return (
    <>
        <FormContainer project={currentProject} />
    </>    
  )
}
