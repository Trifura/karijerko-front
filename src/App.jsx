import React, { useState } from 'react';
import './App.css';
import ItemCard from './Components/ItemCard';
import ItemCardInfo from './Components/ItemCardInfo';
import Navbar from './Components/Navbar';

function App() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <Navbar/>
      <div className='h-[10px]'></div>
      <div className='md:flex flex-row h-screen'>
        <div className='flex-grow'></div>
        <ItemCard onJobSelect={setSelectedJob}/>
        <div className='w-[10px]'></div>
        <div className='sm:w-[600px] md:w-[300px] lg:w-[470px]'>
          {selectedJob && <ItemCardInfo id={selectedJob} />}
        </div>
        <div className='flex-grow'></div>
      </div>
    </>
  )
}

export default App;
