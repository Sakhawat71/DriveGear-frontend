import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShopCategory = ({ car }) => {

    const {  image, brand, name, price, rating, type } = car;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>

                <div className=''>
                    <p className=''>{brand}</p>
                    <p>{type}</p>
                </div>
                <div className='grid grid-cols-2 justify-end'>
                    <p>Price: {price}</p>
                    <p>Retting {rating}</p>
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