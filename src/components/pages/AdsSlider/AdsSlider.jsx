import { Link } from "react-router-dom";

const AdsSlider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">

                <figure className="bg-slate-100 w-full grid grid-cols-2 gap-4 justify-between mx-auto rounded-2xl">
                    <div className="flex flex-col justify-center items-center lg:space-y-2" >
                        <h1 className="text-[#46D993] md:text-2xl lg:text-5xl font-bold">NEED A CAR?</h1>
                        <h2 className="text-[#0066FF] text-xs md: lg:text-2xl font-semibold">let`s find the perfect car for you!</h2>
                        <h1 className="md:text-3xl lg:text-6xl font-extrabold">SAVE UP TO 30%</h1>
                        <Link to="/" className="btn text-[#0066FF] md: lg:mt-10 md: lg:text-xl">SHOP NOW</Link>
                    </div>
                    <img src="https://i.ibb.co/Dwj6qVJ/BMW-i7.jpg" className="w-full max-h-[380px] rounded-r-2xl" />
                </figure>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>


            <div id="slide2" className="carousel-item relative w-full">
                <figure className="bg-slate-100 w-full grid grid-cols-2 gap-4 justify-between mx-auto rounded-2xl">
                    <div className="flex flex-col justify-center items-center lg:space-y-2" >
                        <h1 className="text-[#001829] md:text-2xl lg:text-5xl font-bold">YOUR NEXT CAR</h1>
                        <h2 className="text-[#297EA6] text-xs md: lg:text-2xl font-semibold">The Ultimate Driving Machine</h2>
                        <h1 className="md:text-3xl text-[#297EA6] lg:text-5xl font-extrabold">3% DOWN PAYMENT</h1>
                        <Link to="/" className="btn text-[#001829] md: lg:mt-10 md: lg:text-xl">SHOP NOW</Link>
                    </div>
                    <img src="https://i.ibb.co/zPZq3rL/BMW-X2.jpg" className="w-full max-h-[380px] rounded-r-2xl" />
                </figure>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>


            <div id="slide3" className="carousel-item relative w-full">
                <figure className="bg-slate-100 w-full grid grid-cols-2 gap-4 justify-between mx-auto rounded-2xl">
                    <div className="flex flex-col justify-center items-center lg:space-y-2" >
                        <h1 className="text-[#46D993] md:text-2xl lg:text-5xl font-bold">NEED A CAR?</h1>
                        <h2 className="text-[#0066FF] text-xs md: lg:text-2xl font-semibold">let`s find the perfect car for you!</h2>
                        <h1 className="md:text-3xl lg:text-6xl font-extrabold">SAVE UP TO 30%</h1>
                        <Link to="/" className="btn text-[#0066FF] md: lg:mt-10 md: lg:text-xl">SHOP NOW</Link>
                    </div>
                    <img src="https://i.ibb.co/jVbJDR8/BMW-iX2.jpg" className="w-full max-h-[380px] rounded-r-2xl" />
                </figure>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>


            <div id="slide4" className="carousel-item relative w-full">
                <figure className="bg-slate-100 w-full grid grid-cols-2 gap-4 justify-between mx-auto rounded-2xl">
                    <div className="flex flex-col justify-center items-center lg:space-y-2" >
                        <h1 className="text-[#46D993] md:text-2xl lg:text-5xl font-bold">NEED A CAR?</h1>
                        <h2 className="text-[#0066FF] text-xs md: lg:text-2xl font-semibold">let`s find the perfect car for you!</h2>
                        <h1 className="md:text-3xl lg:text-6xl font-extrabold">SAVE UP TO 30%</h1>
                        <Link to="/" className="btn text-[#0066FF] md: lg:mt-10 md: lg:text-xl">SHOP NOW</Link>
                    </div>
                    <img src="https://i.ibb.co/25tLs0Y/car.jpg" className="w-full max-h-[380px] rounded-r-2xl" />
                </figure>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default AdsSlider;