import { Outlet } from "react-router-dom";
import Navbar from "../components/shareComponents/Navbar";
import Footer from "../components/shareComponents/Footer";



const Root = () => {
    return (
        <div className="mx-12">
            <div className="my-10">
                <Navbar />
            </div>
            <Outlet></Outlet>
            <div className="my-10">
                <Footer />
            </div>
        </div>
    );
};

export default Root;