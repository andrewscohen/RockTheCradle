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
    const [postalCode, setPostalCode] = useState('');
    const [inventoryNum, setInventoryNum] = useState('');

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
            setPostalCode('')
            setInventoryNum(product.inventoryNum)
            // setTag(product.name)
        }
    }, [product])

    return (
        // Container
        <div className='flex justify-evenly pt-10'>
            {product && (
                <>
                    {/* Left Side */}
                    <div>
                        <img src={product.productImg} alt={product.name} className="h-80 w-80 border-r-2 border-gray-300" />
                    </div>
                    {/* Right Side */}
                    <div className="bg-white border-t-2 border-b-2 border-gray-300">
                        <div className="border-b-2 border-gray-300 p-2">
                            <h2 className="font-bold font-serif text-2xl">{product.brand}</h2>
                            <h3 className="text-sm">{product.name}</h3>
                            <p className="text-xs text-gray-600 pt-1">${product.retailPrice} original retail</p>
                        </div>
                        <div>
                            <form>
                                <div className="border-b-2 border-gray-300 p-2">
                                    <label>ZIP CODE</label>
                                    <input type='text' name='postalCode' className="border-gray-300 pb-2 border-opacity-100" />

                                    <select>
                                        <option>Select Size</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <p>DELIVERY + RETURN DATES</p>
                                <div className="mt-1">
                                    <div className="flex">
                                        <div>
                                            <input
                                                id='fourDay'
                                                type='radio'
                                                value='fourDay'
                                            />
                                        </div>
                                        <div className="pl-2 text-xs">
                                            <label>4 Day Rental</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex">
                                            <div>
                                                <input
                                                    id='fiveDay'
                                                    type='radio'
                                                    value='fiveDay'
                                                />
                                                <label className="pl-2 text-xs">5 Day Rental</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div>
                            <button className="bg-black text-white hover:bg-opacity-75 w-full mt-2 rounded-sm text-xs p-2">Add to bag</button>
                        </div>
                    </div>
                </>
            )
            }
        </div >
    )
}


export default ProductPage;
