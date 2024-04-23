import React, { useState } from "react";
import "./App.css";
import ItemCard from "./Components/ItemCard";
import ItemCardInfo from "./Components/ItemCardInfo";
import Navbar from "./Components/Navbar";

function App() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <Navbar />
      <div className="h-[10px]"></div>
      <div className="md:flex md:flex-row h-screen">
        <div className="flex-grow"></div>
        <div className="sm:w-[600px] md:w-[320px] lg:w-[500px]">
          <div className="sm:flex sm:flex-row">
            <div className="sm:flex-grow"></div>
          <ItemCard onJobSelect={setSelectedJob} />
          <div className="sm:flex-grow"></div>
          </div>
        
        </div>
        <div className="w-[10px]"></div>
        <div className="sm:w-[600px] md:w-[320px] lg:w-[500px]">
          {selectedJob && <ItemCardInfo id={selectedJob} />}
        </div>
        <div className="flex-grow"></div>
      </div>

      {/*
<div className='flex flex-col'>
     <div className='w[50px]'><ItemCard onJobSelect={setSelectedJob}/></div>
     {selectedJob && <ItemCardInfo id={selectedJob} />}
</div> 

*/}
    </>
  );
}

export default App;
