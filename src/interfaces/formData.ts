import { Project } from "./projects";

export interface FormDataObject {
    title: string;
    description: string;
    technology: string;
}

export interface ProjectFormProps {
    project?: Project;
    id?: string;
}