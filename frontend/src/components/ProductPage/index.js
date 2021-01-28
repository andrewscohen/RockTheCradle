import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as productActions from '../../store/product';


const ProductPage = ({ products }) => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(productActions.getOneProduct(id))
    }, [dispatch, id])

    const product = useSelector((state) => state.productsList.selectedProduct)
    return (
        <div>
            {product && (<p>
                {product.name}
            </p>)}
        </div>
    )
}


export default ProductPage;
