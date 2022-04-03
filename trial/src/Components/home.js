import {useState}from "react"

import { Link } from "react-router-dom";
import Navbar from "../Navbar";

function Home() {
  const [written, setwritten] = useState("hello");
  return (
    <div>
      <Navbar/>
      <textarea className="resize font-mono caret-white text-white focus:border-blue-300 focus:outline-none bg-[#1e293b] rounded-md w-96 h-20" type="text" placeholder='enter the text here that you want to make into handwriting , you know ^_^' onChange={e => setwritten(e.target.value)} />
      <div className="flex items-center justify-evenly text-2xl">
        <Link to={`/HandWriting/7/${written}`}><h1 className='font-7'>{written.slice(0,50)}...</h1></Link>
      </div>
      <div className="flex items-center justify-evenly">
        <Link to={`/handwriting/8/${written}`}><h1 className='font-8'>{written.slice(0,50)}...</h1></Link>
      </div>
      <div>
        <Link to={`/handwriting/6/${written}`}>
        <h1 className='font-6'>{written.slice(0,50)}</h1></Link>
      </div>
      <div>
        <Link to={`/handwriting/9/${written}`}>
      <h1 className="font-9">{written}</h1></Link>
      </div>
      <div>
        <h1 className='font-10'>{written}</h1>
      </div>
    </div>

        
    

  );
}

export default Home;