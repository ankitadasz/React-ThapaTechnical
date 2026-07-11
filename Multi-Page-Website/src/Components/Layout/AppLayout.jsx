import { Outlet } from "react-router-dom"
import { Header } from "../Ui/Header"
import { Footer } from "../Ui/Footer"

export const AppLayout = () =>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}