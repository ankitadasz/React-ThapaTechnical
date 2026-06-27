import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Components/Layout/AppLayout";
import { Errorpage } from "./Pages/ErrorPage";
import { Home } from "./Pages/Home";
import { TopRated } from "./Pages/TopRated";
import { Trending } from "./Pages/Trending";
import { Explore } from "./Pages/Explore";
import "./App.css";
import { GetApiData } from "./Api/GetApiData";
import { CardDetails } from "./Components/Ui/CardDetails";
import { GetMovieDetails } from "./Api/GetMovieDetails";

const App = () => {
  console.log("APP RENDERED");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Errorpage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/explore/",
          element: <Explore />,
          loader: GetApiData,
        },
          {
          path: "/explore/:id",
          element: <CardDetails/>,
          loader: GetMovieDetails,
          
          
          
        },
        {
          path: "/trending",
          element: <Trending />,
        },
        {
          path: "/toprated",
          element: <TopRated />,
        },
        {
          path: "/CardDetails/:id",
          element: <CardDetails />,
          loader: GetMovieDetails,  
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
