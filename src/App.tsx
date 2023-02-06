import { createContext, useEffect } from "react";
import { FormContainer } from "./components/form/FormContainer";
import { ProjectContainer } from "./components/projects/ProjectContainer";
import {  useFetchProjects } from "./hooks/useFetchProjects";
import {  ProjectContextType } from "./interfaces/projects";

export const ProjectContext = createContext<ProjectContextType |null>(null);

function App() {
  const { projects } = useFetchProjects();

  return (
    <ProjectContext.Provider value={{projects}}>
      <div className="App">
        <ProjectContainer />
        <FormContainer />
      </div>
    </ProjectContext.Provider>
  );
}

export default App;
