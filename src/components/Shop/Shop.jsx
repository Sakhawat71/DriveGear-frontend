// import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Shop = () => {


    const brandName = useParams()
    const allProducts = useLoaderData();

    // const selected = allProducts?.filter(car => car.brand === brandName)

    console.log(brandName)
    console.log(allProducts)

    return (
        <div>
            {
                allProducts?.length
            }
            {
                // car?.length
            }
        </div>
    );
};

export default Shop;