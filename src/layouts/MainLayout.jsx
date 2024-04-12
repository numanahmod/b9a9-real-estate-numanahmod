import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";




const MainLayout = () => {
    return (
        <div className="w-[1200px justify-center items-center] m-auto">
            <div className="h-20"><Navbar></Navbar> </div>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;