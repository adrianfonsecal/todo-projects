import { Project } from "../interfaces/projects";
import { url } from "./url";

const returnProjectProperties = (project:Project) => {
    return {
        id: project.id,
        title: project.title,
        description: project.description,
        createdAt: project.createdAt,
        technology: project.technology,
    }; 
}

export const getProjects = async () => {

    const resp = await fetch(url);
    const data = await resp.json();

    const projects:Project[] = data.map(returnProjectProperties);
    return projects;

}