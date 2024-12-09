import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../Components/RelatedProduct';



const Product = () => {
 
    const {productId} = useParams();
    const {products,currency,addToCart} = useContext(ShopContext);
    const [productData,setProductData] = useState(false);
    const [image,setImage] = useState('');
    const [size,setSize] = useState('');

    const fetchProductData = async () => {
      products.map((item) => {
        if (item._id === productId) {
          setProductData(item);
          setImage(item.image[0])
          return null
        }
      }
      )
    }

    useEffect(() => {
      fetchProductData();
    },[productId,products]
    )

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
       {/* Product Data */}
      <div className="flex flex-col gap-12 sm:gap-12 sm:flex-row">
        {/* Product Images */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col justify-between overflow-x-auto overflow-y-scroll sm:justify-normal sm:w-[18.7%] w-full ">
            {
              productData.image.map((item,index) => (
                 <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              )
              )
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img className='w-full h-auto' src={image} />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className="flex items-center mt-2 gap-1">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
            <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
            <div className="flex flex-col my-8 gap-4">
              <p className="">Select Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((item,index) => (
                  <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size?'bg-orange-500':''}`} key={index} >{item}</button>
                )
                )}
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
            <hr className="mt-8 sm:w-4/5" />
            <div className="flex flex-col gap-1 text-sm mt-5 text-gray-500">
              <p>100% Original Product. </p>
              <p>Cash On Delivery Is Available On This Product.</p>
              <p>Easy Return & Exchange Policy Within 7 days.</p>
            </div>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 text-sm py-3">Description</b>
          <p className="border px-5 text-sm py-3">Reviews(122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Forever is an online plateform thats facilitates the buying and selling of products or sevices over the internet. It serves a virtual marketplace  where business and individuals can showcase thier products, interact with customers , and conduct transactions without the need for ammense popularity due thier convenience, accessibility , and the global reach they offer.  </p>
          <p>Forever typically display products or services along with detailed description, price, images and any available variations (eg.size,color).Each product usually has its own dedicated page with relevant information. </p>
        </div>
      </div>

      {/* Display related product */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className="opacity-0"></div>
}

export default Product