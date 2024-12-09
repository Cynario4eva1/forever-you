import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'
import Title from '../Components/Title'

const Contact = () => {
  return (
    <div>
      <div  className='text-center text-2xl pt-20 border-t'>
      <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} alt="" className="w-full md:max-w-[480px]" />
        <div className="flex flex-col justify-center gap-6 items-start">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>458 Adinkra street <br /> Kasoa, Ghana,</p>
          <p className='text-gray-500'>Tel: (233) 532-831-169 <br /> Email:admin@forever.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our team and job openings.</p>
          <button className="border border-black px-8 py-4 text-xl hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact
