import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as productActions from '../../store/product';


const ProductPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const product = useSelector((state) => state.productsList[id])

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [retailPrice, setRetailPrice] = useState(0);
    const [productImg, setProductImg] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(0);
    const [sizes, setSize] = useState('');
    const [tags, setTag] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [inventoryNum, setInventoryNum] = useState('');

    useEffect(() => {
        dispatch(productActions.getOneProduct(id))
    }, [dispatch, id])

    useEffect(() => {
        if (product) {
            setName(product.name)
            setBrand(product.brand)
            setDescription(product.description)
            setRetailPrice(product.retailPrice)
            setProductImg(product.productImg)
            setCategory(product.category)
            setContent(product.content)
            setRating(product.rating)
            setSize(product.Sizes)
            setPostalCode('')
            // setInventoryNum(product.sizes.ProductSizeinventoryNum)
            // console.log("PRODUCT SIZES:   ", product.Sizes)
            // console.log("Inventory Num:   ", product.Sizes[0].ProductSize.inventoryNum)

        }
    }, [product])

    let rentalPrice;
    return (
        // Container
        <div className='flex justify-evenly pt-10'>
            {product && (
                <>
                    {/* Left Side */}
                    <div>
                        <img src={productImg} alt={name} className="h-80 w-80 border-r-2 border-gray-300" />
                    </div>
                    {/* Right Side */}
                    <div className="bg-white border-t-2 border-b-2 border-gray-300">
                        <div className="border-b-2 border-gray-300 p-2">
                            <h2 className="font-bold font-serif text-2xl">{brand}</h2>
                            <h3 className="text-sm">{name}</h3>
                            <div className="flex justify-between">
                                <p className="text-xs text-gray-600 pt-1 line-through">${retailPrice} original retail</p>
                                <p className="text-xs text-gray-600 pt-1">${rentalPrice = Math.round(((retailPrice * .15) / 5) * 5)} rental price</p>
                            </div>
                        </div>
                        <div>
                            <form>
                                <div className="border-b-2 border-gray-300 p-2">
                                    <select>
                                        {sizes !== '' && sizes.map((size) => (
                                            <option value={size.id} key={size.id}>{size.size}</option>
                                        ))}
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
