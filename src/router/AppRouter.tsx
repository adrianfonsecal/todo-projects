import { Route, Routes } from "react-router-dom"
import { ProjectUpdate } from "../components/projects/ProjectUpdate"
import { ErrorPage } from "../components/ErrorPage";
import { MainPage } from "../pages/MainPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/update/:id" element={<ProjectUpdate />} />        
      </Routes>
    </>
  )
}
