import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as productActions from '../../store/product';


const ProductPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const product = useSelector((state) => state.productsList[id])

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [retailPrice, setRetailPrice] = useState(0);
    const [productImg, setProductImg] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(0);
    const [size, setSize] = useState('');
    const [tag, setTag] = useState('');

    useEffect(() => {
        dispatch(productActions.getOneProduct(id))
    }, [dispatch, id])

    useEffect(() => {
        if (product) {
            setName(product.name)
            setDescription(product.description)
            setRetailPrice(product.retailPrice)
            setProductImg(product.productImg)
            setCategory(product.category)
            setContent(product.content)
            setRating(product.rating)
            setSize(product.Sizes)
            // setTag(product.name)
        }
    }, [product])


    return (
        // Container
        <div>
            {product && (
                <>
                    {/* Left Side */}
                    <div>
                        <img src={product.productImg} alt={product.name} />
                    </div>
                    <div>

                    </div>


                </>
            )}
        </div>
    )
}


export default ProductPage;
