import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const userName = user?.displayName;
    const userPic = user?.photoURL;

    const handelLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const navlink = <>
        <li>
            <NavLink
                className={({ isActive, isPending }) => isActive ? 'text-blue-600' : isPending ? 'text-black' : ''}
                to="/"
            >Home</NavLink>
        </li>
        <li>
            <NavLink
                className={({ isActive, isPending }) => isActive ? 'text-blue-600' : isPending ? 'text-black' : ''}
                to="/addProduct"
            >Add Product</NavLink>
        </li>
        <li>
            <NavLink
                className={({ isActive, isPending }) => isActive ? 'text-blue-600' : isPending ? 'text-black' : ''}
                to="/mycart"
            >My Cart</NavLink>
        </li>
        {
            user && <>

            </>
        }

    </>

    return (
        <div className="navbar bg-base-100 shadow-lg ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>

                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        {
                            navlink
                        }
                    </ul>
                </div>

                <NavLink to="/" className="btn btn-ghost text-xl">
                    <span><img className="w-8" src="/carlogo.png"/></span>
                    DriveGear</NavLink>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1 space-x-3 font-semibold">
                    {
                        navlink
                    }
                </ul>
            </div>

            <div className="navbar-end">
                {
                    userName
                }
                <div className="avatar">
                    <div className="w-10 mx-2 mask mask-squircle">
                        {
                            user && <img src={userPic} />
                        }
                    </div>
                </div>
                {
                    user ?
                        <NavLink
                            onClick={handelLogOut}
                            className="btn"
                        >LogOut</NavLink>
                        :
                        <NavLink
                            to="/login"
                            className="btn"
                        >Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;