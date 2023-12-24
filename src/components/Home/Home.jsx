import { useEffect, useState } from "react";
import Banner from "../pages/Banner/Banner";
import ChooseUs from "../pages/Features/ChooseUs";
import Compare from "../pages/Features/Compare";
import Products from "../Products/Products";
// import { useLoaderData } from "react-router-dom";

const Home = () => {

    // const allproducts = useLoaderData();
    const [categories, setCategories] = useState();
    // const [pro,setPro] = useState(allproducts);

    // setPro(allproducts)

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    // console.log(allproducts)

    return (
        <div className="mx-auto justify-center">
            <Banner></Banner>
            <div className="grid gap-5 border grid-cols-1 md:gap-10 md:grid-cols-2 lg:grid-cols-3 my-10">
                {
                    categories?.map(category => <Products
                        key={category.id}
                        category={category}
                        // pro={pro}
                    ></Products>)
                }
            </div>
            <Compare></Compare>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;