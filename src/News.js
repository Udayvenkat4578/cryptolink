import React from 'react'
import news from './news.avif'
const Help = () => {

    const submitme =()=>{
        alert("Thankyou for subscribing")
    }
  return (
    <div className='mt-5 mb-11'>
                    <p className='text-center text-2xl font-bold text-[#4655f5] mt-6'>OUR NEWSLETTER</p>

        <div className='grid grid-cols-2 '>
        <div className='place-items-center mt-11 pt-11 ml-11 pl-11'>
    <form onSubmit={submitme}>
        <p className='text-lg font-bold mb-2  text-[#f38630] '>Our Customized Newsletter Only for you</p>
        <input className='border-2 border-gray-200 py-1 px-4 rounded-sm' type="text" placeholder='Enter you Email'/>
        <input className=' py-1.5 rounded-sm px-4 mt-1 mb-1 ml-3 bg-[#4655f5] text-white cursor-pointer font-bold' type="submit" value='subscribe'/>
        
    </form>

    </div>
    <div>
       
          

        
        <div className='grid grid-cols-2'> <div><span><img className='w-72 h-60 mt-2 ml-8'  src={news} alt="11"/></span></div>


<p className='pt-11 mt-5 font-bold mr-3'>Subscribe to our newsletter for exclusive crypto trend updates. Stay ahead with valuable insights, market news, and investment opportunities. Join our community and shape the future of finance through cryptocurrencies!</p>
    </div></div>
   
        </div>
    </div>
  )
}

export default Help