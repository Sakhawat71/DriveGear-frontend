import { useContext } from "react";
import { Link, useLoaderData, useParams, } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {

    const { id } = useParams()
    const { user } = useContext(AuthContext);
    const email = user.email;

    const data = useLoaderData();
    const { name, brand, description, price, rating, image } = data;

 
    const handelAddToCard = () => {

        const cart = { email, id, name, brand, description, price, rating, image}

        fetch('https://brandshop-server-side-two.vercel.app/user-cart', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Added to Cart'
                    })
                }
            })
    }

    return (
        <div className=" my-5 rounded-2xl bg-gray-50 px-5">

            <div className="flex gap-10 py-10 justify-center items-center">
                <figure className="w-1/2">
                    <img className="max-h-96" src={image} alt="" />
                </figure>

                <div className=" w-1/2 p-5">
                    <h1 className="text-center text-3xl font-bold">{name}</h1>

                    <div className="flex justify-around my-5">
                        <h3 className="text-xl font-bold">Brand: {brand}</h3>
                        <h3 className="text-xl font-bold">Rating: {rating}☆</h3>
                    </div>

                    <div className="min-h-[250px] py-5">
                        <p className="text-gray-600">{description}</p>
                    </div>

                    <div className="flex justify-around ">
                        <button className="text-xl font-bold text-[#1c8251]"><span className="text-gray-400">Price: </span>{price}$</button>

                        <Link onClick={handelAddToCard} className="text-blue-700 font-bold text-xl btn hover:bg-[#46D993] hover:text-white">Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;