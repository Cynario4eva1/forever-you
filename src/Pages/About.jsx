import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'
import Title from '../Components/Title'


const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6  md:w-2/4 text-gray-600">
          <p>Forever was born out of Passion for innovation and desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a plateform where customers can easily discover, explore and purchase a wide range of products from the comfort of your home.  </p>
          <p>Since our inception, we have worked tirelessly to create a diverse selection of high-quality that carter to every taste and preference. From fashion and beauty to elecronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at forever is to empower customers with choice, convenience, and confidence. We are dedicated to provide seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond. </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, delivery has never been easier. </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptinal Customer Service:</b>
          <p className='text-gray-600'>Our team dedicated proffesionials is here to assist you the way, ensuring your satisfaction is our top priority </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About