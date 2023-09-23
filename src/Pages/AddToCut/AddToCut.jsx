import { useEffect, useState } from "react";
import AddToCutCard from "../../Component/AddToCutCard/AddToCutCard";
import swal from 'sweetalert';
const AddToCut = () => {

    const [cutProducts, setCutProducts] = useState([])
    const [notFound, setNotFound] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(()=>{
        const cutProductsItem = JSON.parse(localStorage.getItem("cut"))

        if(cutProductsItem){
            setCutProducts(cutProductsItem)

            const total = cutProductsItem.reduce((preValue, currentItem) => preValue + currentItem?.price, 0)

            setTotalPrice(total)
        }
        else{
            setNotFound("No Data Found")
        }
    },[])
    const handleRemove = () => {
        localStorage.clear()
        setCutProducts([]);
        setNotFound("No Data Found")
        swal("Good job!", "Products removed successfully!", "success");
    }
    return (
        <div>
            {
                notFound
                ?
                <p className="flex justify-center items-center text-2xl md:text-4xl lg:text-6xl font-bold  min-h-[80vh]">{notFound}</p>
                :
                <div className="">
                    {
                        cutProducts.length > 0
                        &&
                        <div className="w-full text-center">
                            <button 
                                onClick={handleRemove}
                                className="btn"
                            >Delete All Cut
                            </button>
                            <h1 className="text-xl md:text-2xl lg:text-3xl my-5 font-semibold underline">Total Price: {totalPrice}</h1>
                        </div>
                    }
                    <div className="grid gap-5">
                        {
                            isShow
                            ?
                            cutProducts?.map(product => 
                                <AddToCutCard
                                    key={product.id}
                                    product={product}
                                />
                            )
                            :

                            cutProducts?.slice(0,2)?.map(product => 
                                <AddToCutCard
                                    key={product.id}
                                    product={product}
                                />
                            )
                        }
                    </div>
                    {
                        cutProducts.length > 2
                        &&
                        <div className="text-center mt-5">    
                            <button 
                                onClick={()=> setIsShow(!isShow)}
                                className="btn"
                            >
                                {isShow ? "see less" : "show all"}
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default AddToCut;