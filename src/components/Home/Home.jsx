import { useEffect, useState } from "react";
import Banner from "../pages/Banner/Banner";
import ChooseUs from "../pages/Features/ChooseUs";
import Compare from "../pages/Features/Compare";
import Products from "../Products/Products";

const Home = () => {

    const [categories, setCategories] = useState();

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className="mx-auto justify-center">
            <Banner></Banner>
            <div className="grid gap-5 border grid-cols-1 md:gap-10 md:grid-cols-2 lg:grid-cols-3 my-20">
                {
                    categories?.map(category => <Products
                        key={category.id}
                        category={category}
                    ></Products>)
                }
            </div>
            <Compare></Compare>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;