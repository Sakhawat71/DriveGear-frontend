import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const loadedProduct = useLoaderData();
    const { _id, name, brand, type, description, price, rating, image } = loadedProduct;

    const handelUpdateProduct = e => {

        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const image = form.image.value;

        const updatedProduct = { name, brand, type, description, price, rating, image };

        // console.log(updatedProduct)

        fetch(`https://brandshop-server-side-two.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Updated',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="mx-auto max-w-6xl my-5 min-h-screen mb-20">

            <form onSubmit={handelUpdateProduct} className="bg-[#F4F3F0] px-10 md:px-28 py-10">
                <div className="text-center my-5 space-y-3">
                    <h2 className="font-bold text-2xl">Update Product</h2>
                    <p>Product product with correct information. After giving the information of Image, Name, Brand Name, Type, Price, Short description, Rating click on Update Product.</p>
                </div>

                <div className="md:flex justify-center items-center gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Product name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <select name="brand" defaultValue={brand} className="select select-bordered w-full ">
                                <option value="toyota">Toyota</option>
                                <option value="ford">Ford</option>
                                <option value="bmw">BMW</option>
                                <option value="mercedes-benz">Mercedes-Benz</option>
                                <option value="tesla">Tesla</option>
                                <option value="honda">Honda</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className="md:flex justify-center gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" defaultValue={type} placeholder="Car / Bike" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex justify-center gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" defaultValue={rating} placeholder="Rate Porduct out of 5" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description} placeholder="Short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Image</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="image" defaultValue={image} placeholder="Enter image URL" className="input input-bordered w-full" />
                    </label>
                </div>

                <input
                    type="submit"
                    value="Update Product"
                    className="btn bg-[#D2B48C] text-[#331A15]  mt-10 btn-block"
                />
            </form>
        </div>
    );
};

export default UpdateProduct;