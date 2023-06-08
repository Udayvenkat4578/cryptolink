{/*USE BRANCH ONE*/}
import React, { useState,useEffect } from 'react'
import axios from 'axios';
const App = () => {
const [search,setSearch]=useState("");
const [data,setData]=useState([]);

useEffect(()=>{ 
  axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=1000&currency=INR").then(res=>setData(res.data.coins)).then(console.log(data))
})





  return (
    <div>
      <div className='grid grid-cols-1 place-items-center mt-11 mb-6 '>
        <span>             <p  className='text-xl font-bold text-[#4855e0] text-center '>
                Get Access to 1000+ crypto currencies
             </p>
             <p  className='text-lg font-bold text-gray-600 text-center mb-3'>
                Enter the crypto u want to Explore
             </p>

</span>
        <input type="text" className='border-2 border-gray-400 rounded-sm px-6 py-2 pr-5' value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search Crypto'  />
           
      </div>
      <div >
      
        
        {data.length>0 ?<div className=" grid grid-cols-4 gap-6  p-5 border-2 border-gray-300">
          {data.filter(crypto=>
        crypto.name.toLowerCase()
        .includes(search.toLowerCase()))
          .map(crypto=>
        
          <div className='grid grid-rows-2   border-2 border-gray-200 shadow-lg rounded-md p-5 bg-white opacity-90'>
           <div className='flex flex-cols-1'><p className='ml-3'></p><img class=" w-18 h-12 ml-11 pl-11  " src={crypto.icon} alt={crypto.name} /></div>
          <div><p className='font-bold text-md text-center text-'>{crypto.name}</p></div>
          <div><p className='font-bold text-md text-center'><span>marketCap:</span> {Math.ceil(crypto.marketCap) }</p></div>
          <div><p className='font-bold text-md text-center'><span>marketprice:</span> {Math.ceil(crypto.price)}</p></div>
          <div><p className='font-bold text-md text-center'> <span>Rank:</span> {crypto.rank}</p></div>
          <div><p className='font-bold text-md text-center'> <span>Symbol:</span> {crypto.symbol}</p></div>
          <div><p className='font-medium text-sm text-end '> <a href={crypto.websiteUrl}><span>know more</span></a> </p></div> 



          
          </div>
     
       )}

    </div>:<div className='grid grid-cols-1 place-items-center'>
<div class="relative items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-20 p-11">Accessing all the cryptocurrencies <p>Please wait!</p></h5>

    <p class="font-normal text-gray-900 dark:text-gray-400 opacity-20 px-11 py-2"> Fact:There are more than 12,000 cryptocurrencies in existence</p>
    <p class="font-normal text-gray-900 dark:text-gray-400 opacity-20 px-11 py-2"> Fact:The first commercial bitcoin transaction was for pizza</p>

    <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <svg aria-hidden="true" class="w-32 h-32 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span class="sr-only">Loading...</span>
    </div>
</div>
</div> }

      </div>
    </div>
  )
}

export default App
