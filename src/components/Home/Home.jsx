import Banner from "../pages/Banner/Banner";
import ChooseUs from "../pages/Features/ChooseUs";
import Compare from "../pages/Features/Compare";

const Home = () => {
    return (
        <div className="mx-auto justify-center">
            <Banner></Banner>
            <Compare></Compare>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;