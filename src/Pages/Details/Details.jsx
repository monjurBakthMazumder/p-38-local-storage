import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetProducts from "../../Hook/useGetProducts";
import DetailsProduct from "../../Component/DetailsProduct/DetailsProduct";

const Details = () => {

    const [product, setProduct] = useState();

    const {id} = useParams();

    const [Products] = useGetProducts()

    useEffect(()=>{

        const findProduct = Products?.find(product=> product.id == Number(id))
        setProduct(findProduct);

    },[id, Products])

    return (
        <div>
            <DetailsProduct product={product}/>
        </div>
    );
};

export default Details;