import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AddToCutCard = ({product}) => {
    const {id,brand,  thumbnail, price, title} = product || {}
    return (
        <div className='card card-compact border flex flex-row items-center'>
            <figure className="w-1/3 md:w-1/4 rounded-none flex justify-center items-center"><img src={thumbnail} alt={`image of ${title}`} className=" w-full"/></figure>
                <div className="card-body w-2/3 md:w-3/4">
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold flex items-center gap-1">{title}<span className="cursor-text btn btn-secondary btn-xs border-t-pink-600">${price}</span></h2>
                  <p><span className='font-bold'>Brand: </span>{brand}</p>
                <Link to={`/${id}`} className="my-1 underline text-pink-600" >Details</Link>
                </div>
        </div>
    );
};

AddToCutCard.propTypes = {
    product: PropTypes.object,
};

export default AddToCutCard;