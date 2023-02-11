
import { ProjectFormProps } from '../../interfaces/formData'

export const FormProjectDescription = ({project}: ProjectFormProps) => {
  return (
    <>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control project-input"
              id="description"
              name="description"
              rows={2}
              
            />
          </div>
    </>
  )
}
