import { ProjectFormProps } from "../../interfaces/formData"
import { FormProjectDescription } from "./FormProjectDescription"
import { FormProjectTitle } from "./FormProjectTitle"
import { FormSubmitBtn } from "./FormSubmitBtn"
import { FromProjectTechnology } from "./FromProjectTechnology"

export const FormUpdate = ({project}: ProjectFormProps) => {
  return (
    <>
        <FormProjectTitle  project={project}/>
        <FormProjectDescription project={project}/>
        <FromProjectTechnology project={project}/>
        <FormSubmitBtn />
    </>
  )
}
