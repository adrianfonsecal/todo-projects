import { sendProject } from "../helpers/sendProject";
import { updateProject } from "../helpers/updateProject";
import { FormDataObject } from "../interfaces/formData";
import { Project } from "../interfaces/projects";

export const useSendProject = (project?: Project) => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const dataObject: FormDataObject = {
      title: data.title.toString(),
      description: data.description.toString(),
      technology: data.technology.toString(),
    };

    project ? updateProject(project.id, dataObject) : sendProject(dataObject);
  };
  
  return {
    handleSubmit,
  };
};
