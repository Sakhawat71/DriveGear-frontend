import { useContext, useEffect, useState, } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import CartProduct from "../pages/cartProduct/cartProduct";

const Mycart = () => {

    const { user } = useContext(AuthContext);
    const userEmail = user.email;
    const cart = useLoaderData();
    const [cartProducts, setCartProducts] = useState(null);


    useEffect(() => {

        const mycartProducts = cart?.filter(pro => pro.email === userEmail);
        setCartProducts(mycartProducts)

    }, [cart, userEmail])

    return (
        <div className="min-h-screen">
            <h1 className="my-5 font-bold text-3xl text-center">Your Selected Products: {cartProducts?.length || 0}</h1>
            <div className="grid gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
                {
                    cartProducts?.map(product => <CartProduct
                        key={product._id}
                        product={product}
                        cartProducts={cartProducts}
                        setCartProducts={setCartProducts}
                    ></CartProduct>)
                }
            </div>
        </div>
    );
};

export default Mycart;