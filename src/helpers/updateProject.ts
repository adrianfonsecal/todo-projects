import { FormDataObject } from "../interfaces/formData";
import { Project } from "../interfaces/projects";
import { url } from "./url";

export const updateProject = async (id: string, project: FormDataObject) => {
    const response = await fetch(`${url}${id}/`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
    });

    if( response.status == 201 ){
        return await response.json();
    } else {
        throw new Error('Failed to create project');
    }
};