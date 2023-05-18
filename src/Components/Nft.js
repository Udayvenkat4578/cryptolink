import React from 'react'
import axios from 'axios';
const Nft = () => {
  const submitme =(e)=>{
   e.preventDefault();
   fetch("https://eth-mainnet.g.alchemy.com/nft/v2/ulY7fAGPanmFfXNaL_DpcpLjaoaMXYSE/getNFTsForCollection").then(res=>console.log(res)).catch(err=>console.log(err))
  }
  return (
    <div>
      <div>
        <button onClick={submitme}>
          hii
        </button>
      </div>
    </div>
  )
}

export default Nft