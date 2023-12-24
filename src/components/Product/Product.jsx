import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ShopCategory = ({ car }) => {

    const {  image, brand, name, price, rating, type } = car;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-center">{name}</h2>

                <div className='font-semibold '>
                    <p className=''>Band: {brand}</p>
                    <p>Type: {type}</p>
                </div>
                <div className='grid grid-cols-2 text-xl justify-end'>
                    <p className='text-left'>Price: {price} $</p>
                    <p className=''><span className='flex items-center  justify-end'>Retting {rating} <FaStar className='ml-1 text-yellow-400'/></span></p>
                </div>
                <div className="card-actions justify-between">
                    <Link to={''} className="btn font-bold text-blue-900">Details</Link>
                    <Link className="btn font-bold bg-[#46D993]">Update</Link>
                </div>
            </div>
        </div>
    );
};

ShopCategory.propTypes = {
    car: PropTypes.object,
};

export default ShopCategory;