import React from 'react'
import pic2 from './pic2.png'
import pic8 from './pic8.png'
import pic9 from './pic9.png'
import Part2 from './Part2'
import Some from './Components/Some'
import g3 from './assets/g3.avif'
import Help from './Components/Help'
import Bottom from './Bottom'
import News from './News'
const Home = () => {
  return (
    <div className='mt-11'>
        <div className='grid grid-cols-2 gap-7 p-2 align-middle'>
            <div className=' flex-flex-rows p-11 pt-11  mt-11  '>
              <p className='mt-5 pt-8'></p>
             <p className='text-3xl font-bold text-center text-[#4855e0]'>
                UNLOCK ALL YOUR CRYPTO
             </p>
             <p  className='text-3xl font-bold  text-center  text-[#4855e0]'>
              NEEDS FROM ONE PLACE
             </p>
             <p  className='text-lg font-bold text-gray-600 text-center'>
                Get Access to 1000+ crypto currencies
             </p>
             <p className='text-center font-bold text-xs text-gray-500 mt-3'>
             Welcome to our revolutionary new platform for cryptocurrency enthusiasts! Our website allows you to easily connect with all major cryptocurrency exchanges and wallets, giving you unparalleled access to the rapidly growing world of digital assets.
             </p>
             
            </div>
            <div  className=' place-items-center'>
              <div className='grid grid-cols-2 '>
              
               <div>
               <img className='scale-75 shadow-xl ' src={pic2} alt='2'/>

               
               </div>
        
              

              
              <div className='grid grid-rows-2'>
                <div>
                <img className='w-60 shadow-md rounded-md mr-11 mt-8 mb-3' src={pic9} alt='2'/>

                </div>
                <div>
                <img className='w-60 rounded-md shadow-xl ' src={pic8} alt='1'/>
                </div>
              </div>
              </div>
            </div>
        </div>
        <Part2/>
        <Some/>
        <hr></hr>
        <p className='font-bold text-2xl text-center mt-6 text-[#4855e0]'>LEARN WITH US</p>
        <div>
         <div className='grid grid-cols-2 p-5 mt-8 place-items-center mr-11  mb-6'>
          <div className=' ml-4'>
           <span className='text-center mt-3 text-md font-bold '>Welcome to our website! We know that the world is constantly changing, and it can be hard to keep up with new ideas and concepts. That's why we're here to help. Our mission is to provide you with the knowledge and tools you need to learn and grow, no matter what your background or experience level is.</span>
          <a href='/Learn'><div className='text-[#4655f5]   text-end mr-3 mt-2 text-md font-bold' >Continue learning ...</div></a>
          </div>
          <div>
       
          <img className='w-96 h-48 rounded-md shadow-lg mb-6 opacity-90' src={g3} alt='3'/>
          </div>
          
         </div>
         <hr className=''></hr>

        </div>
        <div><News/></div>
        <div>
          <Help/>
        </div>
        <hr></hr>
        <div>
          <Bottom/>
        </div>
    </div>
  )
}

export default Home
