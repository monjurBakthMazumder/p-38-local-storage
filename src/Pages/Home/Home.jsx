import Product from "../../Component/products/product";
import useGetProducts from "../../Hook/useGetProducts";
const Home = () => {

    const [products] = useGetProducts()
    return (
        <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold underline mb-5 text-center">Products: {products?.length}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                {
                    products?.map(product=> 
                        <Product
                            key={product.id}
                            product={product}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Home;