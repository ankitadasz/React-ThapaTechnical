import {Outlet} from "react-router-dom";
import { Header } from "../Ui/Header";
import { Footer } from "../Ui/Footer";
export const MainLayout = () =>{
    return( 
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
)
}