import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Products = ({ category }) => {

    const {brand,titel,image} = category;

    return (
        <div className='border w-80  mx-auto'>
            <figure className='w-'>
                <img className='w-[50%]' src={image} alt="" />
            </figure>
            <h2>{titel}</h2>
            <Link to={`/product/${brand}`} className='btn'>shop</Link>
        </div>
    );
};

Products.propTypes = {
    category: PropTypes.object,
    allproducts: PropTypes.array
};

export default Products;