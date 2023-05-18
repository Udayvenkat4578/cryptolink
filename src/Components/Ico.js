import React from 'react'
import no from './noavail.png'
const Ico = () => {
  const submitme =()=>{
    alert("we will let you know")
}


  return (
    <div>
      <div className='grid grid-cols-2 place-items-center'>
        <div className='mt-11 pt-11'><img src={no} alt=''/></div>
        <div>        <div className='mb-6 pr-11 mr-11 mt-11 pt-11 font-extrabold text-xl  text-[#4855e0]'> THERE ARE NO UPCOMING ICO'S NOW.ENTER YOUR EMAIL AND WE WILL LET YOU KNOW</div>
        <div className='mt-2'>
        <form onSubmit={submitme}>
        <p className='text-lg font-bold mb-2  text-[#f38630] '>Enter your Email</p>
        <input className='border-2 border-gray-200 py-1 pl-3 rounded-sm' type="text" placeholder='Enter your Email'/>
        <input className=' py-1.5 rounded-sm px-4 mt-1 mb-1 ml-3 font-bold bg-[#4655f5] text-white cursor-pointer' type="submit" value='send'/>
        
    </form>

        </div>
        </div>

      </div>
    </div>
  )
}

export default Ico