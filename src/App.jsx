import { useState } from 'react'
import './App.css'
import Itemcard from './Components/ItemCard'
import ItemCardInfo from './Components/ItemCardInfo'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className='md:flex flex-row h-screen'>
      <div className='flex-grow'></div>
      <Itemcard/>
      <ItemCardInfo/>
      <div className='flex-grow'></div>
    </div>
    
    </>
  )
}

export default App
