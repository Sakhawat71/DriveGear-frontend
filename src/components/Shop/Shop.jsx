
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";


const Shop = () => {

    const paramsData = useParams();
    const allProducts = useLoaderData();

    const [cars, setCars] = useState(null);
    const queryBrand = paramsData.brand;

    useEffect(() => {

        if (queryBrand) {
            const selected = allProducts.filter((car) => car.brand === queryBrand);
            setCars(selected);

            if (selected.length <= 0) {
                console.log('sorry no products')
            }
        }

    }, [allProducts, queryBrand]);

    console.log(cars)

    return (
        <div className="min-h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 my-10">
            {
                cars?.map(car => <Product
                    key={car._id}
                    car={car}
                ></Product>)
            }
        </div>
    );
};

export default Shop;