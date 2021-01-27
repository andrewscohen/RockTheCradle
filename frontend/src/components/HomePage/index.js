import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as productActions from '../../store/product';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productActions.getAllProducts())
    }, [dispatch]);

    const products = useSelector((state) => state.productsList.products)

    return (
        <div>
            <ul>
                {products && products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage;
