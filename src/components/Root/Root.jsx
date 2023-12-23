import { Outlet } from "react-router-dom";
import Navbar from "../Nevbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=" mx-5 md:mx-10 ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;