import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
import { Country } from "./Pages/Country"
import { Home } from "./Pages/Home"
import "./App.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { AppLayout } from "./Components/Layout/AppLayout"
import { ErrorPage } from "./Pages/ErrorPage"

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:
    [
       {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/country",
    element:<Country/>
  }
    ]
  }
 
])

 const App = () =>{
  return <RouterProvider router={router}>
    
  </RouterProvider>
}
export default App;