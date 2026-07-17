import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./Components/Layout/MainLayout";
import { Home } from "./Pages/Home";
import { FetchRQ } from "./Pages/FetchRQ";
import { FetchOld } from "./Pages/FetchOld";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { FetchIndv } from "./Components/Ui/FetcIndv";

const router=createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/trad",
        element:<FetchOld/>,
      },
      {
        path:"/rq",
        element:<FetchRQ/>,
      },
      {
        path:"/rq/:id",
        element:<FetchIndv/>,
      }
    ]
  }
]) 

 
 const app = () =>{
 const queryClient= new QueryClient();
 return(
   <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
  <RouterProvider router={router}></RouterProvider>
 </QueryClientProvider>
  )
 
}
export default app;