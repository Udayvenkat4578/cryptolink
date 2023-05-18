import React from 'react'
import coin from './Coinbase.png'
import robin from './robin.png'
import gemini from './gemini.png'
import etoro from './etoro.png'
import webull from './webull.png'
import TradeStation from './TradeStation.png'
import crypto from './crypto.com.png'
import kraken from './Kraken.png'
import Bottom from '../Bottom'


const Exchanges = () => {
  return (
    <div>
      <div className='text-2xl font-bold text-[#4855e0] text-center  mb-7 mt-11'>BEST CRYPTO EXCHANGES AND APPS</div>
      <div className='grid grid-rows-1 place-items-center'> <div className='flex'><div  className=' pr-11 mr-11 py-5 mt-2 font-extrabold text-2xl text-[#f38630] '> Broker</div><div  className=' mr-11 py-5 mt-2 font-extrabold text-2xl text-[#f38630]'> Rating</div> <div  className='pl-11  py-5 mt-2 font-extrabold text-2xl mr-3 text-[#f38630]'>Acc Min</div><div className='ml-11   py-5 mt-2 font-extrabold text-2xl mr-11 text-[#f38630]' >Promotion</div><div  className='ml-11  py-5 mt-2 font-extrabold text-2xl text-[#f38630]'>Learn more</div></div></div>

      <div className='grid grid-rows-6 gap-10 pb-11  place-items-center'>

     <div className='flex border-2 border-100 shadow-md pt-2'><div className='p-6 ml-5 pl-11'> <img  className='w-24 h-8 'alt='h1' src={coin}/><p className='mt-1'>Coinbase</p></div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>5.0/5</div> <div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>$0</div><div  className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>	Get $200 in crypto</div> <div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl mr-11 pr-11  text-[#4855e0]'><a href='https://www.coinbase.com/'><p>Explore CoinBase</p></a></div></div>
     <div className='flex border-2 border-100 shadow-md px-11 pt-2'><div className='p-6 ml-5 pl-3'> <img  className='w-24 h-8'alt='h1' src={etoro}/><p className='mt-1'>eToro</p></div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>3.5/5</div> <div  className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>$0</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>Get a $10 bonus</div><div  className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl  mr-11 pr-11   text-[#4855e0]'><a href='https://www.etoro.com/'><p>Explore etoro </p><p className='pr-11 mr-11'></p></a></div></div>
     <div className='flex border-2 border-100 shadow-md  pl-8   pt-2'><div className='p-6 ml-5'> <img  className='w-24 h-8 'alt='h1' src={robin}/><p className='mt-1 '>Robinhood Crypto</p></div><div className='ml-11  py-5 mt-2 font-extrabold text-xl '>3.6/5</div> <div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>$0</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>No promotion</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl     text-[#4855e0]'><a href='https://robinhood.com/us/en/'><p className='mr-11 pr-11'>Explore Robinhood </p></a></div></div>
     <div className='flex border-2 border-100 shadow-md pt-2 pl-5 pr-11'><div className='p-6 ml-5 pl-11 pr-2'> <img  className='w-24 h-8'alt='h1' src={gemini}/><p className='mt-1'>Gemini</p></div><div className='ml-11  py-5 mt-2 font-extrabold text-xl  pl-5 '>4.2/5</div> <div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>$0</div><div className='ml-11 pl-11 pr-11 py-5 mt-2 font-extrabold text-xl '>$20 of BTC</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl     text-[#4855e0]'><a href='https://www.gemini.com/'><p className='pr-11 mr-11'>Explore Gemini </p></a></div></div>
     <div className='flex border-2 border-100 shadow-md pt-2  pl-5'><div className='p-6 ml-5 pl-11'> <img  className='w-24 h-8'alt='h1' src={webull}/><p className='mt-1'>Webull Crypto</p></div><div className=' pl-11 py-5 mt-2 font-extrabold text-xl'>3.9/5</div> <div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>$0</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>No promotion</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl   pr-11 mr-6   text-[#4855e0]'><a href='https://www.webull.com/'><p>Explore Webull Crypto </p></a></div></div>
     <div className='flex border-2 border-100 shadow-md pt-2'><div className='p-6 ml-9 pl-9'> <img  className='w-24 h-8'alt='h1' src={TradeStation}/><p className='mt-1'>TradeStation</p></div><div className='ml-11 pl-2 py-5 mt-2 font-extrabold text-xl'>3.4/5</div> <div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>$0</div><div className='ml-11 pl-8 py-5 mt-2 font-extrabold text-xl'>Get $150 in Bitcoin</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl  mr-11 pr-4   text-[#4855e0]'><a href='https://www.tradestation.com/'><p>Explore TradeStation </p></a></div></div>
     <div className='flex border-2 border-100 shadow-md pt-2 pl-9 pr-9 '><div className='p-6 ml-5 pl-11'> <img  className='w-24 h-8'alt='h1' src={kraken}/><p className='mt-1'>Kraken</p></div><div className='ml-7 py-5 mt-2 font-extrabold text-xl'>4.3/5</div> <div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl pr-5'>$0</div><div className='ml-11 pl-8 py-5 mt-2 font-extrabold text-xl pr-5'>No promotion</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl  mr-11 pr-11   text-[#4855e0]'><a href='https://www.kraken.com/'><p>Explore Kraken</p></a></div></div>
     <div className='flex border-2 border-100 shadow-md pt-2'><div className='p-6 ml-5 pl-11'> <img  className='w-24 h-8'alt='h1' src={crypto}/><p className='mt-1'>Crypto.com</p></div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>4.6/5</div> <div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl'>$0</div><div className='ml-11 pl-8 py-5 mt-2 font-extrabold text-xl'>No promotion</div><div className='ml-11 pl-11 py-5 mt-2 font-extrabold text-xl  mr-11 pr-11   text-[#4855e0]'><a href='https://crypto.com/'><p>Explore Crypto.com </p></a></div></div>




      </div><hr></hr>
      <div className='mt-5'><Bottom/></div>
    </div>
  )
}

export default Exchanges