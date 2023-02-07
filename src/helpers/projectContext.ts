import { createContext } from "react";
import { ProjectContextType } from "../interfaces/projects";

export const ProjectContext = createContext<ProjectContextType |null>(null);