import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title';


const Orders = () => {

  const {products, currency} = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      <div className="text-2xl">
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>

      <div>
        {
          products.slice(1,4).map((item,index) => {
            return(
              <div key={index} className="border-t border-b py-4 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start text-sm gap-6">
                <img src={item.image[0]} alt="" className="w-16 sm:w-20" />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className="flex items-center text-gray-700 mt-2 gap-3 text-base">
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-400'>25, jul ,2024</span></p>
                </div>
              </div>
              <div className="flex justify-between md:w-1/2">
                 <div className="flex items-center gap-2">
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Ready To Deliver</p>
                 </div>
                 <button className="border px-4 py-2 text-sm font-medium rounded-sm ">Track Order</button>
              </div>
            </div>
            )
          }
          )
        }
      </div>
    </div>
  )
}

export default Orders
