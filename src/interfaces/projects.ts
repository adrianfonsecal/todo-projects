import { State } from "../hooks/useFetchProjects";

export interface Project {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  technology: string[];
}
export interface ProjectContextType {
  projects: Project[];
};
