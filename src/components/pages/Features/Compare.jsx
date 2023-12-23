
const Compare = () => {
    return (
        <div className="grid mx-auto border items-center grid-cols-1 lg:grid-cols-2 lg:gap-10 my-10 py-10 bg-[#e9e7e7] ">
            
            <div className="space-y-5 text-center lg:text-left px-2 lg:pl-10 md:space-y-10 mx-auto items-center justify-center mb-16 lg:mb-0">
                <h4 className="text-2xl font-bold text-[#46D993] ">Compare Car</h4>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">To Compare Your <br /> Favourite Brand Car</h1>
                <p className="text-xl">Some well-regarded car dealerships known for their customer service, inventory, and overall reputation.</p>
                <button className="btn bg-[#46D993]  text-white">Compare Now</button>
            </div>

            <div className="">
                <img className="w-[80%] lg:w-full mx-auto" src="https://i.ibb.co/dfdm4Wb/compare-img.png" alt="" />
            </div>
        </div>
    );
};

export default Compare;