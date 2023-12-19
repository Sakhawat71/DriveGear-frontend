import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";


const Register = () => {

    const { signUpWithEmailPass, signWithGoogle } = useContext(AuthContext);

    // email password sign in
    const handelSingIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

        signUpWithEmailPass(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                console.error(error.message)
            })
    }

    // google sign in
    const handelSignWithGoogel = () => {
        signWithGoogle()
            .then(result =>{
                console.log(result.user)
            })
            .catch((error) =>{
                console.log('googel error',error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>

                <div className="text-center p-2 mb-2 mx-auto card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <Link onClick={handelSignWithGoogel} className="btn">Continue with Google <FaGoogle className="text-blue-700" /></Link>
                </div>
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">

                    <form onSubmit={handelSingIn} className="card-body lg:w-[450px]">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Photo Url</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo Url"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required />
                        </div>


                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                // type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="input input-bordered "
                                required />

                            {/* <span onClick={() => setShowPassword(!showPassword)} className="absolute top-12 right-6 text-xl">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }</span> */}


                            <span className="text-red-700 mt-5">
                                {/* {
                                    error
                                }
                                {
                                    firebaseError
                                } */}
                            </span>
                        </div>

                        <input
                            type="submit"
                            value="Register"
                            className="btn text-white mt-5 bg-sky-500 text-[16px]"
                        />

                        <p className="font-semibold text-center">Already have an account?
                            <Link to="/login">
                                <button className="btn btn-sm ml-1 text-blue-700">Login</button>
                            </Link> </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;