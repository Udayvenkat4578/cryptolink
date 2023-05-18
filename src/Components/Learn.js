import React from 'react'
import img from './imglearn.avif'
const Learn = () => {
  return (
    <div>
      <div>
        <div>
          <p className='text-3xl font-bold text-[#4855e0] text-center mb-7 mt-11 '>Welcome to the world of Crypto</p>
        </div>
        <div className='grid grid-cols-2 gap-1 place-items-center'>
   <div><img className='w-72' alt='' src={img}/></div>
   <div className='font-bold text-center pr-11 '> Discover the world of cryptocurrencies on our website. We provide beginner-friendly guides, articles, and resources to help you learn about blockchain, types of cryptocurrencies, and the benefits of decentralized finance. Get started today and empower yourself with crypto knowledge.</div>
        </div>
        <div className='text-3xl font-bold text-[#4855e0] text-center mb-7 mt-11'>FAQ'S</div>
        <div className='grid grid-cols-2  mt-11'>
         <div className='p-3 font-bold static mt-3 mr-0'>
          <h5> </h5>
          <p className=' text-[#4855e0] font-bold static '><a href="#C1">1.What's a cryptocurrency?</a></p>
          <p className=' text-[#4855e0] font-bold mt-1'><a href="#C2">2.Who invented Bitcoin?</a></p>
          <p className=' text-[#4855e0] font-bold mt-1'><a href="#C3">3.What is blockchain?</a></p>
          <p className=' text-[#4855e0] font-bold mt-1'><a href="#C4">4.Why do they call it cryptocurrency?</a></p>
          <p className=' text-[#4855e0] font-bold mt-1'><a href="#C5">5.History of Cryptography</a></p>
          <p className=' text-[#4855e0] font-bold mt-1'><a href="#C6">6.What is a Digital Signature?</a></p>
          <p className=' text-[#4855e0] font-bold mt-1'><a href="#C7">7.What is cipher text?</a></p>

</div>
         <div>

<p className='text-mb font-medium mt-3' id="C1">1.A cryptocurrency is just like a digital form of cash. You can use it to pay friends for your share of the bar tab, buy that new pair of socks you've been eyeing up 👀, or book flights ✈️ and hotels 🏨 for your next holiday. Because cryptocurrency is digital, it can also be sent to friends and family anywhere in the world.

Just like PayPal or bank transfers, right?
Well, not really. It's way more interesting!
You see, traditional online payment gateways are owned by organizations. They hold your money for you, and you need to ask them to transfer it on your behalf when you want to spend it.

In cryptocurrencies, there isn't an organization. You, your friends, and thousands of others can act as your own banks by running free software. Your computer connects with other people's computers, meaning you communicate directly – no middlemen required!

To use cryptocurrency, you don't need to sign up for a website with an email address and password. You can download a wide variety of apps onto your smartphone to begin sending and receiving within minutes.</p>
<p className='text-mb font-medium mt-5' id="C2">2.Amazingly, nobody knows who invented Bitcoin. We only know them by their screen name - Satoshi Nakamoto. Satoshi could be a single person, a group of programmers, or if you believe some of the weirder theories, a time-traveling alien or secret government team.
Satoshi published a 9-page document in 2008, detailing how the Bitcoin system worked. Months later, in 2009, the software itself was released. </p>
<p className='text-mb font-medium mt-5' id="C3">3.Don't be spooked by the technobabble that people use to describe "blockchain." A blockchain is just a database. It isn't a particularly sophisticated one, either - you could create it in a spreadsheet with minimal effort.

There are some peculiarities with these databases. The first is that blockchains are append-only. That means that you can only add information - you can't just click on a cell and delete stuff that you've already added, or change it in any way.
The second is that each entry (called a block) in the database is cryptographically linked to the last entry. In plain English, each new entry must contain a sort of digital fingerprint (hash) of the last one.
And that's it! Since each fingerprint points back to the last one, you end up with a chain of blocks. Or - as the cool kids like to call it - a blockchain.

A blockchain is immutable: if you change a block, it changes the fingerprint. And since that fingerprint is included in the next block, the next block is changed too. And since that block's fingerprint... well, you get the idea. You end up with a domino effect where any change becomes evident. You can't alter any information without everyone noticing.</p>
<p className='text-mb font-medium mt-5' id="C4">4.The name cryptocurrency is a combination of cryptography and currency. With cryptography, we use advanced math to secure our funds, making sure that nobody else can spend them.
There's no need to understand all this – applications you use will do all the heavy lifting. You won't even know what's going on under the hood.</p>
<p className='text-mb font-medium mt-5' id="C5">5.Cryptography, the science of writing codes and <a className='text-orange-500' href="#C7">ciphers</a> for secure communication, is one of the most important elements that goes into making modern cryptocurrencies and blockchains possible. The cryptographic techniques used today, however, are the result of an incredibly long history of development. Since ancient times, people have used cryptography to transmit information in a secure manner. Following is the fascinating history of cryptography that has led up to the advanced and sophisticated methods used for modern digital encryption.</p>
<p className='text-mb font-medium mt-5' id="C6">6.A digital signature is a cryptographic mechanism used to verify the authenticity and integrity of digital data. We may consider it as a digital version of the ordinary handwritten signatures, but with higher levels of complexity and security.

In simple terms, we may describe a digital signature as a code that is attached to a message or document. After generated, the code acts as proof that the message hasn’t been tampered with along its way from sender to receiver.

Although the concept of securing communications using cryptography dates back to ancient times, digital signature schemes became a possible reality in the 1970s - thanks to the development of Public-Key Cryptography (PKC). So, to learn how digital signatures work, we need to first understand the basics of hash functions and public-key cryptography.</p>
<p className='text-mb font-medium mt-5' id="C7">7.In cryptography, a cipher is a series of defined instructions that one can follow in order to encrypt or decrypt a text message. The process of encryption consists of converting clear information into an unreadable or inaccessible version. The original text that can be clearly understood is known as plaintext, while its encrypted form is called ciphertext. Both texts contain the same information, the only difference is that the ciphertext is written in a format that can only be read or accessed by the ones that have the correct decryption mechanism.</p>
</div>
        </div>
      </div>
    </div>
  )
}

export default Learn