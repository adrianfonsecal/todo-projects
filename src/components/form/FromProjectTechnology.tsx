import { ProjectFormProps } from "../../interfaces/formData";


export const FromProjectTechnology = ({project}: ProjectFormProps) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="technology" className="form-label">
          Technology
        </label>
        <input
          type="text"
          className="form-control project-input"
          id="technology"
          name="technology"
          value={project ? project.technology : ""}
        />
      </div>
    </>
  );
};
