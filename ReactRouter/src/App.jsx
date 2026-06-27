import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Movie } from "./Pages/Movie";
import { Contact, contactData } from "./Pages/Contact";
import { AppLayout } from "./components/Layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./Pages/ErrorPage";
import { GetAPIData } from "./api/getAPIData";
import { MovieDetails } from "./components/Ui/MovieDetails";
import { GetMovieDetails } from "./api/GetMovieDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement : <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
          
        },
        {
          path: "/movie",
          element: <Movie />,
          loader:GetAPIData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader:GetMovieDetails,
          
        },
        {
          path: "/contact",
          element: <Contact />,
          action:contactData,
        },
        
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
