import { ProjectFormProps } from "../../interfaces/formData";

export const FormProjectTitle = ({project}: ProjectFormProps) => {
  return (
    <>
        <div className="mb-3" >
            <label htmlFor="title" className="form-label" >
              Title
            </label>
            <input
              type="text"
              className="form-control project-input"
              id="title"
              name="title"
              value={project ? project.title : ""}
            />
          </div>
    </>
  )
}
