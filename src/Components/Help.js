import React from 'react'
import img11 from './img11.avif'

const Help = () => {

    const submitme =()=>{
        alert("we will reach you out soon")
    }
  return (
    <div className='mt-5 mb-11'>
                    <p className='text-center text-2xl font-bold text-[#4655f5] mt-6'>Need Help?</p>

        <div className='grid grid-cols-2 '>
    <div>
        <div className='flex flex-cols-2'>
            <div>        <span><img className='w-60 h-60 mt-2 ml-8'  src={img11} alt="11"/></span>
</div><div className='mt-11 pt-10 ml-3 font-bold  '>
        <span> 24/7 customer Service.</span><br></br>
        <span>Get support with our friendly customer </span><br></br>
        <span> service agents at your service. </span></div>

        </div>
    </div>
    <div className='place-items-center mt-11 pt-11 ml-11 pl-11'>
    <form onSubmit={submitme}>
        <p className='text-lg font-bold mb-2  text-[#f38630] '>Love to hear from you</p>
        <input className='border-2 border-gray-200 py-1 px-4 rounded-sm' type="text" placeholder='Enter your Query'/>
        <input className=' py-1.5 rounded-sm px-4 mt-1 mb-1 ml-3 font-bold bg-[#4655f5] text-white cursor-pointer' type="submit" value='send'/>
        
    </form>

    </div>
        </div>
    </div>
  )
}

export default Help