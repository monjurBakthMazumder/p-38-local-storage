import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import swal from 'sweetalert';
const DetailsProduct = ({product}) => {
    const navigate= useNavigate();
    const handleClick = () => {
        navigate(-1)
    }
    const {id, brand, category,description, discountPercentage,  price, rating, stock, title, images} = product || {}
    const handleAddTOCut = () => {
        const addedCurArray = [];
        // console.log('object');
        const cutItem = JSON.parse(localStorage.getItem("cut"));
        if(!cutItem){
            addedCurArray.push(product);
            localStorage.setItem("cut", JSON.stringify(addedCurArray));
        }
        else{
            const have = cutItem.find((pro)=>pro.id === id);

            if(!have){
                addedCurArray.push(...cutItem, product)
                localStorage.setItem("cut", JSON.stringify(addedCurArray))
                swal("Good job!", "Products removed successfully!", "success");
            }
            else{
                swal("Error!", "No duplicate !", "error");
            }
        }
    }
    return (
        <>
            <BsFillArrowLeftCircleFill onClick={handleClick} className="text-3xl cursor-pointer mb-5"/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                <div className="carousel carousel-center p-1 space-x-4 rounded-box bg-gray-100 h-fit">
                    {
                        images?.map((img, i)=> 
                            <div className="carousel-item" key={i}>
                                <img src={img} className="rounded-box" />
                            </div> 
                        )
                    }
                </div>
                <div className="space-y-2 md:text-lg md:col-span-2">
                    <h2 className="text-2xl md:text-4xl font-bold my-5">{title}</h2>
                    <p><span className='font-bold'>Price: </span><button className="btn btn-secondary btn-xs border-t-pink-600 cursor-text">${price}</button></p>
                    <p className="my-1"><span className='font-bold'>Discount: </span>{discountPercentage}%</p>
                    <Rating
                        emptySymbol={
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                            </svg>
                        }
                        fullSymbol={
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                            >
                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                            />
                            </svg>
                        }
                        initialRating={rating}
                        readonly
                    />
                    <p className='my-1'><span className='font-bold'>Stock: </span>{stock}</p>
                    <p className='my-1'><span className='font-bold'>Category: </span>{category}</p>
                    <p className='my-1'><span className='font-bold'>Brand: </span>{brand}</p>
                    <p className="my-1"><span className='font-bold'>Description: </span>{description}</p>
                    <button className="btn btn-secondary btn-outline" id="{product.id}" onClick={handleAddTOCut}>add to cut</button>
                </div>
            </div>
        </>
    );
};

DetailsProduct.propTypes = {
    product: PropTypes.object,
};

export default DetailsProduct;