import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom';


const ProductItem = ({id,name,price,image}) => {

  const {currency} = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer ' to={`product/${id}`}>
       <div className="overflow-hidden">
        <img src={image[0]}className='hover:scale-110 transition ease-in-out '/>
       </div>
       <p className='pt-3 pb-1 text-small'>{name}</p>
       <p className='text-small font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
