
import { ProjectFormProps } from "../../interfaces/formData";
import { FormContainer } from "../form/FormContainer"

export const ProjectUpdate = ({project}: ProjectFormProps) => {
  return (
    <>
        <FormContainer project={project} />
    </>    
  )
}
