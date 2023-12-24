import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Products = ({ category }) => {

    const {brand,titel,image} = category;

    return (
        <div className='shadow-lg rounded-lg p-4 w-full  mx-auto border space-y-3'>
            <figure className='justify-center items-center border rounded-xl'>
                <img className='w-[50%] border mx-auto' src={image} alt="" />
            </figure>
            <h2 className='text-3xl font-bold text-center'>{titel}</h2>
            <Link to={`/product/${brand}`} className='btn w-full text-[#216d48] font-semibold text-[18px]'>Shop Now</Link>
        </div>
    );
};

Products.propTypes = {
    category: PropTypes.object,
};

export default Products;