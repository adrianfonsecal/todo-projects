import { useSendProject } from "../../hooks/useSendProject";
import { ProjectFormProps } from "../../interfaces/formData";
import { FormProjectDescription } from "./FormProjectDescription";
import { FormProjectTitle } from "./FormProjectTitle";
import { FormSubmitBtn } from "./FormSubmitBtn";
import { FormUpdate } from "./FormUpdate";
import { FromProjectTechnology } from "./FromProjectTechnology";

export const FormContainer = ({project}: ProjectFormProps) => {
  
  if( project ) {
    const { handleSubmit } = useSendProject(project);
    console.log(project);
  }
    const { handleSubmit } = useSendProject();

  return (
    <>
      { project ? (
        <form onSubmit={handleSubmit}>
          <h1>Form</h1>
          <FormUpdate project={project} />
        </form>
      ) : (
        <form method="POST" onSubmit={handleSubmit} >
        <div className="container-sm" data-bs-theme="dark">
          <h1>Form</h1>
          <FormProjectTitle />
          <FormProjectDescription />
          <FromProjectTechnology />
          <FormSubmitBtn />
        </div>
      </form>
      )}
    </>
  );
}
