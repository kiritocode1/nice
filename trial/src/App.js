// import logo from './logo.svg';
import './App.css';
// import { animated as a, useSpring } from "react-spring";
// import Navbar from './Navbar';
// import {useState}from "react"
import { Route ,Routes} from 'react-router-dom';
import Home from './Components/home';
import HandWriting from './Components/handwriting';
// import { Link } from 'react-router-dom';
// import Room from './Components/class';
// import Music from './Components/music';
// import User from './Components/usey';
// import { Navigate } from 'react-router-dom';
function App() {
  // const [written, setwritten] = useState("hello");
  // const star = useSpring({
  //   from: {
  //     backgroundColour:"green",
  //   },
  //   backgroundColor: "yellow",
  //   loop:true
  // });
  // useEffect(() => {
  // }, [written]);
  return (
    <div className="App bg-[#0f172a] text-white">
      {/* <Navbar /> */}
      {/* <textarea className="resize font-mono caret-white text-white focus:border-blue-300 focus:outline-none bg-[#1e293b] rounded-md" type="text" placeholder='enter the text here'  onChange={e =>setwritten(e.target.value)} />
      {/* <input type="text" className="text-green-500 caret-green-300" onChange={e=>setwritten(e.target.value)} /> */}


      {/* <a.div style={star} className="h-4 w-4"/> */}
      {/* <h1 className='font-7'>{written}</h1>
      <h1 className='font-8'>{written}</h1>
      <h1 className='font-6'>{written}</h1>
      <h1 className="font-9">{written}</h1>
      <h1 className='font-10'>{written}</h1> */} 

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/HandWriting/:id' element={<HandWriting/>}/>
        {/* <Route path="/Room" element={<Room />} />
        <Route path="/music" element={<Music />} />
        <Route path='/user/:userId' element={<User/>}/> */}
      </Routes>
      {/* <Link to="/music"><button className='text-lg mx-2'>here</button></Link>
      <Link to="/">here</Link>
      <Link to="/Room">here</Link>
      <h1 className="font-7">{written}</h1>
      <h1 className="font-8">{written}</h1> 
      <h1 className="font-6">{written}</h1>
      <h1 className="font-2">{written}</h1>
       */}
      
    </div>
  );
}

export default App;
