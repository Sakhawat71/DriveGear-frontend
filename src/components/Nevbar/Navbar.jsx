import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navlink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Add Product</NavLink></li>
        <li><NavLink to="/">My Cart</NavLink></li>
        {/* <li><NavLink to="/">Home</NavLink></li> */}
    </>

    return (
        <div className="navbar bg-base-100 shadow-lg ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>

                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {
                            navlink
                        }
                    </ul>
                </div>

                <NavLink to="/" className="btn btn-ghost text-xl">daisyUI</NavLink>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1 space-x-3">
                    {
                        navlink
                    }
                </ul>
            </div>

            <div className="navbar-end">
                <NavLink to="/login" className="btn">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;