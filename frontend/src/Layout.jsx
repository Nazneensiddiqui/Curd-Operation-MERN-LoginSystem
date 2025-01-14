

import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/header";
import Topnavbar from "./components/TopNavebar";


const Layout=()=>{
    return(
        <>
    <Header/>
    <Topnavbar/>
       <Outlet/>
        <Footer/>

       
        </>
    )
}
export default Layout;