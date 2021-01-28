import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as productActions from '../../store/product';

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productActions.getAllProducts())
    }, [dispatch]);

    const products = useSelector((state) => state.productsList.products)

    return (
        <div className="grid p-4 ">
            <ul className="grid grid-flow-col auto-cols-max">
                {products && products.map((product) => (
                    <li key={product.id} className="h-12 w-12 p-1 m-7"><Link to={`/products/${product.id}`} >{product.name}</Link></li>
                ))}
            </ul>
        </div >
    )
}

export default HomePage;
