
import { useLoaderData, useParams } from "react-router-dom";

const Shop = () => {

    const paramsData = useParams();
    const allProducts = useLoaderData();

    const queryBrand = paramsData.brand;
    const selected = allProducts.map(car => car.brand)

    console.log(queryBrand)
    console.log(selected)

    return (
        <div className="min-h-screen">
            {
                allProducts?.map(car => <li key={car._id}>{car.brand}</li>)
            }

        </div>
    );
};

export default Shop;