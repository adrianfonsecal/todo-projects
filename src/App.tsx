import { ProjectContext } from "./helpers/projectContext";
import { useFetchProjects } from "./hooks/useFetchProjects";
import { AppRouter } from "./router/AppRouter";


const App = () => {

  const { projects } = useFetchProjects();
  return (
    <ProjectContext.Provider value={{ projects }}>
      <div className="App">
        <AppRouter />        
      </div>
    </ProjectContext.Provider>
  );
};

export default App;
