
const Banner = () => {



    return (
        <div className="hero min-h-screen" style={{ backgroundImage:`url("https://i.ibb.co/K61Nn8Z/black-luxury-sport-car-driving-accross-forest.jpg")` }}>
            
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">Choose Excellence, Choose DriveGear!</h1>
                    <p className="mb-5">Where Every Mile Feels Like a Celebration!</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;