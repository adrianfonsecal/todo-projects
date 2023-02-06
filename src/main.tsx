import ReactDOM from 'react-dom/client'
import App from './App'
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from './components/ErrorPage';
import './index.css'
import { ProjectUpdate } from './components/projects/ProjectUpdate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,    
  },
  {
    path: '/update/:id',
    element: <ProjectUpdate />,
    errorElement: <ErrorPage />,
  }
]
);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
