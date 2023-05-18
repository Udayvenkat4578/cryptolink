import React from 'react'
import best from './best.png'
import exodus from './exodus.png'
import trust from './trust.png'
import ledger from './ledger.png'
import coin from './Coinbase.png'
import crypto from './crypto.com.png'
import blue from './blue.png'
import metamask from './metamask.jpg'



const Wallets = () => {
  return (
    <div>
            <div className='text-2xl font-bold text-[#4855e0] text-center  mb-7 mt-11 PT-7'>BEST CRYPTO WALLETS (MOBILE AND DESKTOP)</div>

      <div>
      <div className='grid grid-rows-6 gap-10 pb-11  place-items-center'>

<div className='flex border-2 border-100 shadow-md pt-3 pl-5'><div className='p-6 ml-5 pl-11 '> <img  className='w-24 h-8 'alt='h1' src={coin}/><p className='mt-2 mb-2 mr-2'>Coinbase wallet</p></div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>4.8/5</div> <div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>$0</div><div  className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>	Get $200 in crypto</div> <div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl mr-11 pr-11  text-[#4855e0]'><a href='https://www.coinbase.com/wallet'><p>Explore Wallet</p></a></div></div>
<div className='flex border-2 border-100 shadow-md px-10 pt-2'><div className='p-6 ml-5 pl-3'> <img  className='w-24 h-12'alt='h1' src={best}/><p className='mt-1'>Electrum Wallet</p></div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>4.1/5</div> <div  className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>$0</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>Get a $10 bonus</div><div  className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl  mr-11 pr-11   text-[#4855e0]'><a href='https://electrum.org/#home'><p>Explore Wallet </p><p className='pr-11 mr-11'></p></a></div></div>
<div className='flex border-2 border-100 shadow-md  pl-8   pt-2'><div className='p-6 ml-5'> <img  className='w-24 h-12 'alt='h1' src={exodus}/><p className='mt-1 ml-6 mr-11 pr-11 mb-1'>Exodus</p></div><div className='ml-11  py-5 mt-2 font-extrabold text-xl '>3.6/5</div> <div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>$0</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>No promotion</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl     text-[#4855e0]'><a href='https://www.exodus.com/'><p className='mr-11 pr-11 ml-11 '>Explore Wallet </p></a></div></div>
<div className='flex border-2 border-100 shadow-md pt-2 pl-5 pr-11'><div className='p-6 ml-5 pl-11  mt-2 pr-11 '> <img  className='w-24 h-16'alt='h1' src={trust}/><p className='mt-1'> Trust Wallet</p></div><div className='ml-11  py-5 mt-2 font-extrabold text-xl  pl-5  '>4.0/5</div> <div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>$0</div><div className='ml-11 pl-11 pr-11 py-5 mt-2 font-extrabold text-xl px-5'>$20 of BTC</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl     text-[#4855e0]'><a href='https://trustwallet.com/'><p className='pr-11 mr-11'>Explore wallet </p></a></div></div>
<div className='flex border-2 border-100 shadow-md pt-2  pl-11 pr-11'><div className='p-6 ml-5 pl-11 mb-1 mt-2 mr-6'> <img  className='w-24 h-8'alt='h1' src={ledger}/><p className='mt-1 mb-1'>ledger Wallet</p></div><div className=' pl-11 py-6 mt-2 font-extrabold text-xl '>3.9/5</div> <div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>$0</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>No promotion</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl   pr-11 mr-11   text-[#4855e0]'><a href='https://shop.ledger.com/'><p>Explore Wallet </p></a></div></div>
<div className='flex border-2 border-100 shadow-md pt-2  pl-11 ml-11 mr-11 pr-9'><div className='pr-11 py-6 pl-11 mr-11 mt-2'> <img  className='w-24 h-12'alt='h1' src={metamask}/><p className=''>Meta mask</p></div><div className=' pl-11 py-5 mt-2 font-extrabold text-xl mr-6'>3.8/5</div> <div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>$0</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>No promotion</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl   pr-11 mr-6   text-[#4855e0]'><a href='https://metamask.io/'><p>Explore Wallet </p></a></div></div>

<div className='flex border-2 border-100 shadow-md pt-2 pl-11 ml-11 mr-11 pr-9 mt-1'><div className='p-6 ml-9 pl-9'> <img  className='w-24 h-12'alt='h1' src={blue}/><p className='mt-1'>Blue Wallet</p></div><div className='ml-11 pl-2 py-5 mt-2 font-extrabold text-xl'>3.8/5</div> <div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>$0</div><div className='ml-11 pl-8 py-5 mt-2 font-extrabold text-xl'>Get $150 in Bitcoin</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl  mr-11 pr-11   text-[#4855e0]'><a href='https://bluewallet.io/'><p>Explore Wallet </p></a></div></div>
<div className='flex border-2 border-100 shadow-md pt-2 pl-11 ml-11 mr-11 pr-11 '><div className='p-6 ml-5 pl-11 mt-1 mb-1'> <img  className='w-24 h-8'alt='h1' src={crypto}/><p className='mt-1'>Crypto.com</p></div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>4.5/5</div> <div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>$0</div><div className='ml-11 pl-8 py-5 mt-2 font-extrabold text-xl'>No promotion</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl  mr-11 pr-11 px-11  text-[#4855e0]'><a href='https://crypto.com/defi-wallet'><p>Explore Wallet </p></a></div></div>




 </div>
      </div>
    </div>
  )
}

export default Wallets