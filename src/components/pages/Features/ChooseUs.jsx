
const ChooseUs = () => {
    return (
        <div className="max-w-7xl my-10  ">
            <h2 className="text-5xl text-center font-semibold">Why Choose Us?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center py-10">

                <div className=" py-5">
                    <figure className="mx-auto justify-center flex">
                        <img className="w-[96px]" src="/asset/financing-64.png" alt="" />
                    </figure>
                    <h2 className="text-xl text-center font-semibold">Special Financing Offers</h2>
                    <p className="px-4 text-center pt-2">Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>

                <div className=" py-5">
                    <figure className="mx-auto  justify-center flex">
                        <img className="w-[96px]" src="/public/asset/trusted-64.png" alt="" />
                    </figure>
                    <h2 className="text-xl text-center font-semibold">Trusted Car Dealership</h2>
                    <p className="px-4 text-center pt-2">Discover the assurance of quality and integrity when choosing our well-established and reputable services today.</p>
                </div>

                <div className=" py-5">
                    <figure className="mx-auto  justify-center flex">
                        <img className="w-[96px]" src="/asset/estimate-96.png" alt="" />
                    </figure>
                    <h2 className="text-xl text-center font-semibold">Transparent Pricing</h2>
                    <p className="px-4 text-center pt-2">Experience confidence in your purchase with our straightforward and transparent pricing policy for every vehicle.</p>
                </div>

                <div className=" py-5">
                    <figure className="mx-auto  justify-center flex">
                        <img className="w-[96px]" src="/asset/car-service-96.png" alt="" />
                    </figure>
                    <h2 className="text-xl text-center font-semibold">Expert Car Service</h2>
                    <p className="px-4 text-center pt-2">Rely on our expert car service for precision, efficiency, and unmatched automotive excellence.</p>
                </div>



            </div>
        </div>
    );
};

export default ChooseUs;