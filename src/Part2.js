import React from 'react'

const Part2 = () => {
  return (
    <div>
        <div className='grid-grid-rows-1 '>        
             <div className='grid grid-cols-4 gap-4  place-items-center p-10'>
                <a href='/wallets'>
            <div className='border-2 border-gray-100 rounded-lg shadow-md transition-all ease-in-out hover:scale-105 py-10  px-11'>
               <p className='ml-3 font-extrabold text-xl   text-gray-600 '>8+</p>
                <p className='px-2 font-bold  text-[#4855e0]'> Crypto Wallets</p>

            </div></a>
             <a href='/exchanges'>
            <div className='border-2 border-gray-100 rounded-lg shadow-md transition-all ease-in-out hover:scale-105 p-10'>
               <p className='font-extrabold text-xl  text-gray-600  '>10+</p>
               <p className='font-bold  text-[#4855e0]'> Crypto Exchanges</p>
            </div></a>
            <a href='/Price'>

            <div className='border-2 border-gray-100 rounded-lg shadow-md transition-all ease-in-out hover:scale-105 py-7 px-11'>
               <p className='font-extrabold text-xl   text-gray-600 '>1000+ </p>
               <p className='font-bold  text-[#4855e0] '> live Crypto </p>
               <p className='font-bold  text-[#4855e0]'> Currencies price</p>

            </div></a>
            <a href='/ico'>

            <div className='border-2 border-gray-100 rounded-lg shadow-md transition-all ease-in-out hover:scale-105 py-7 px-10'>
               <p className='px-5 font-extrabold text-xl  text-gray-600  '>ICO</p>
               <p className='px-5 font-bold  text-[#4855e0]'> Initial Coin</p>
               <p className='px-5 font-bold  text-[#4855e0]'> Offerings</p>

            </div></a>


        </div>
        </div>

    </div>
  )
}

export default Part2