import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as productActions from '../../store/product';

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productActions.getAllProducts())
    }, [dispatch]);

    const products = useSelector((state) => Object.values(state.productsList))

    return (
        <div className="pt-30">
            <div className="grid">
                <ul className="grid grid-flow-col auto-cols-max grid-cols-4 grid-rows-4 gap-4 mt-12">
                    {products && products.map((product) => (
                        <li key={product.id} className="h-12 w-12 p-1 m-12 "><Link to={`/products/${product.id}`}>
                            <div><img src={product.productImg} alt={product.name} /></div>
                            <div className="text-xs">{product.name}</div></Link></li>
                    ))}
                </ul>
            </div>
        </div >
    )
}

export default HomePage;
