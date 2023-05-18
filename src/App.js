import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Crypdata from './Crypdata'
import Home from './Home'
import Navbar from './Navbar'
import Exchanges from './Components/Exchanges'
import Wallets from './Components/Wallets'
import Ico from './Components/Ico'
import Learn from './Components/Learn'
const App = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>

        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/wallets" element={<Wallets/>}/>
        <Route path="/Price" element={<Crypdata/>}/>
        <Route path="/ico" element={<Ico/>}/>
        <Route path="/Learn" element={<Learn/>}/>




      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App