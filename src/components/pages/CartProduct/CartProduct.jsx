import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const CartProduct = ({ product,cartProducts ,setCartProducts }) => {

    const { _id, name, brand, price, rating, image } = product;


    const handelDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://brandshop-server-side-two.vercel.app/user-cart/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Product has been deleted.",
                                icon: "success"
                            });

                            const remaining = cartProducts.filter(pro => pro._id !==id)
                            setCartProducts(remaining)
                        }
                    })
            }
        });

    }


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={image} className='max-h-56  w-full' alt="Product" />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title">{name}</h2>
                <div className='flex justify-between items-center '>
                    <p>Brand: {brand}</p>
                    <p className='text-right text-lg'>Rating: {rating}⭐</p>
                </div>
                <div className="card-actions justify-between items-center">
                    <button className='btn-disabled text-xl font-bold'>Price: {price}$</button>
                    <button onClick={() => handelDelete(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

CartProduct.propTypes = {
    product: PropTypes.object,
    cartProducts: PropTypes.func,
    setCartProducts: PropTypes.func,
};

export default CartProduct;