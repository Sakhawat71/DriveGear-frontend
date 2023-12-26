import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ShopCategory = ({ car }) => {

    const { _id, image, brand, name, price, rating, type } = car;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img className='w-full h-60' src={image} alt="" />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title text-center">{name}</h2>

                <div className='font-semibold '>
                    <p className=''>Band: {brand}</p>
                    <p>Type: {type}</p>
                </div>
                <div className='grid grid-cols-2 text-xl justify-end'>
                    <p className='text-left'>Price: {price} $</p>
                    <p className=''><span className='flex items-center  justify-end'>Retting {rating} <FaStar className='ml-1 text-yellow-400'/></span></p>
                </div>
                <div className="card-actions justify-between bottom-0">
                    <Link to={`/details/${_id}`} className="btn font-bold text-blue-900">Details</Link>
                    <Link to={`/update-product/${_id}`} className="btn font-bold bg-[#69d3a0] text-white hover:text-[#46D993] ">Update</Link>
                </div>
            </div>
        </div>
    );
};

ShopCategory.propTypes = {
    car: PropTypes.object,
};

export default ShopCategory;