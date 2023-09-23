
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Component/Shared/Navbar/Navbar';
import Footer from '../Component/Shared/Footer/Footer'
import { useEffect } from 'react';

const MainLayout = () => {
    const loc= useLocation();

    useEffect(()=>{
        if(loc.pathname === "/"){
            document.title = `Product-home`
        }
        else{
            document.title = `phone ${loc.pathname.replace("/","-")}`
        }
        if(loc.state) {
            document.title = `${loc.state}`
        }
    },[loc.pathname, loc.state])
    return (
        <div>
            <Navbar/>
            <div className="min-h-[80vh] px-5 sm:px-[10%] my-10">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;