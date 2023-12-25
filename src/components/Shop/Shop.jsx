
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";
import AdsSlider from "../pages/AdsSlider/AdsSlider";


const Shop = () => {

    const paramsData = useParams();
    const allProducts = useLoaderData();

    const [cars, setCars] = useState(null);
    const queryBrand = paramsData.brand;

    useEffect(() => {

        if (queryBrand) {
            const selected = allProducts.filter((car) => car.brand === queryBrand);
            setCars(selected);
        }

    }, [allProducts, queryBrand]);


    return (
        <div className="min-h-screen my-10">

            {
                cars?.length ?
                    <div>
                        <div className="shadow-lg mb-14">
                            <AdsSlider></AdsSlider>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                            {cars?.map(car => <Product
                                key={car._id}
                                car={car}
                            ></Product>)}</div>
                    </div>
                    :
                    <div className="text-center mt-20 space-y-3">
                        <h2 className="font-bold text-4xl">No Products Available</h2>
                        <p className="text-xl font-semibold">Check out our other products</p>
                        <Link to="/" className="btn">Go to Store</Link>
                    </div>
            }
        </div>
    );
};

export default Shop;