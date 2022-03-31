import {useState}from "react"




function Home() {
  const [written, setwritten] = useState("hello");
  return (
    <div>
      <textarea className="resize font-mono caret-white text-white focus:border-blue-300 focus:outline-none bg-[#1e293b] rounded-md" type="text" placeholder='enter the text here' onChange={e => setwritten(e.target.value)} />
      <h1 className='font-7'>{written}</h1>
      <h1 className='font-8'>{written}</h1>
      <h1 className='font-6'>{written}</h1>
      <h1 className="font-9">{written}</h1>
      <h1 className='font-10'>{written}</h1>
    </div>
  );
}

export default Home;