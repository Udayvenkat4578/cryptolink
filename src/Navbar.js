import React from 'react'
import icon from './nodes.png'

const Navbar = () => {
  return (
    <div>
        <div className='flex flex-row justify-between bg-white '>
            <div className='flex flex-rows-1'>
            <div><img9 className='w-5 mt-6 ml-5' src={icon} alt="icon"/></div>
                <div className='md:mt-5 mt-2 ml-3 font-extrabold text-lg'>                    <p className=' text-sm sm:text-xl text-[#4855e0] absolute  mb-11'>Crypto Link</p>
</div>
                
                    
                
            </div>
            <div className='opacity-80   md:flex mr-11 pr-11 '>
                <ul className='flex flex-row p-3 mt-2 '>
                <li className='md:mr-11 mr-2 font-medium md:text-lg text-xs transition-all ease-in-out hover:text-[#4855e0] hover:scale-110 text-black'><a href ='/'>Dashboard </a></li> 
                <li className='md:mr-11 mr-2  font-medium md:text-lg text-xs transition-all ease-out hover:text-[#4855e0] hover:scale-110 text-black'><a href ='/exchanges'>Cryptoexchanges</a> </li> 
                <li className='md:mr-11 mr-2 font-medium md:text-lg text-xs transition-all ease-out hover:text-[#4855e0] hover:scale-110 text-black'><a href ='/wallets'>CryptoWallets</a> </li> 
                <li className='md:mr-11 mr-2 font-medium md:text-lg text-xs transition-all ease-out hover:text-[#4855e0] hover:scale-110 text-black'><a href ='/ico'>Ico</a> </li> 
                <li className='md:mr-11 mr-2 font-medium md:text-lg text-xs transition-all ease-out hover:text-[#4855e0] hover:scale-110 text-black'><a href ='/Learn'>Learn </a></li>     
             </ul>
            </div> 


        </div>
       
    </div>
  )
}

export default Navbar