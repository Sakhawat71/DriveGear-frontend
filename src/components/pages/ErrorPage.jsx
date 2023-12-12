import { Link } from "react-router-dom";
import { TfiFaceSad } from "react-icons/tfi";
import { RiArrowGoBackLine } from "react-icons/ri";

const ErrorPage = () => {


    return (
        <div className="text-center text-red-700 w-screen md:py-20 font-serif bg-slate-100 h-screen">
            <figure className="flex justify-center">
                <TfiFaceSad className="text-7xl"></TfiFaceSad>
            </figure>
            <h1 className="font-bold text-[100px]">404</h1>
            <h3 className="text-2xl ">Page Not Found</h3>
            <Link to="/" className="btn btn-sm mt-5">< RiArrowGoBackLine/> Back to HomePage</Link>
        </div>
    );
};

export default ErrorPage;