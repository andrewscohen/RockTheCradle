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
    const [inventoryNum, setInventoryNum] = useState('');
    const [buttonClick, setButtonClick] = useState('false')

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
                    {/* Start of Left Side */}
                    <div>
                        <img src={productImg} alt={name} className="h-80 w-80 border-gray-300 shadow-lg rounded" />
                    </div>

                    {/* End of Left Side */}
                    {/* Start of Right Side */}

                    {/* Start of Information Block */}
                    <div className="bg-white border-t-2 border-b-2 border-gray-300">
                        <div className="border-b-2 border-gray-300 p-2">
                            <h2 className="font-bold font-serif text-2xl">{brand}</h2>
                            <h3 className="text-sm">{name}</h3>
                            <div className="flex justify-between">
                                <p className="text-xs pt-1 pr-2">${rentalPrice = Math.round(((retailPrice * .15) / 5) * 5)} rental price</p>
                                <p className="text-xs text-gray-600 pt-1 line-through">${retailPrice} original retail</p>
                            </div>
                        </div>
                        {/* End of Information Block */}
                        {/* Start of Cart Form */}
                        <div>
                            <form>
                                {/* START: Size Block */}
                                <div className="flex justify-between border-b-2 border-gray-300 pb-2 ">
                                    <p className="self-end">Size</p>
                                    {sizes && sizes[0].size !== 'n/a' && (
                                        < select className="border border-black mt-2">
                                            <option>Select</option>
                                            { sizes !== '' && sizes.map((size) => (
                                                <option value={size.id} key={size.id}>{size.size}</option>
                                            ))}
                                        </select>)}
                                </div>
                                {/* END: Size Block */}

                                {/* START: Calender Block */}
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
                        {/* END: Calender Block */}

                        {/* START: Submit Button */}
                        <div>
                            <button className="bg-black text-white hover:bg-opacity-75 w-full mt-2 rounded-sm text-xs p-2">Add to bag</button>
                        </div>
                    </div>
                </>
            )}
        </div >
    )
}


export default ProductPage;
