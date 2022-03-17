// import logo from './logo.svg';
import './App.css';
// import { animated as a, useSpring } from "react-spring";
import Navbar from './Navbar';

import { Route ,Routes} from 'react-router-dom';
import Home from './Components/home';
// import { Link } from 'react-router-dom';
import Room from './Components/class';
import Music from './Components/music';
import { Link } from 'react-router-dom';
import User from './Components/usey';
// import { Navigate } from 'react-router-dom';


function App() {

  // const star = useSpring({
  //   from: {
  //     rotateZ: 0,
  //     backgroundColor: "rgb(34 197 94 / var(--tw-bg-opacity))",
  //     BorderRadius:"50px",
  //   },
  //   rotateZ: 180,
  //   backgroundColor:"yellow",
  // });
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/Room" element={<Room />} />
        <Route path="/music" element={<Music />} />
        <Route path='/user/:userId' element={<User/>}/>
      </Routes>
      <Link to="/music"><button className='text-lg mx-2'>here</button></Link>
      <Link to="/">here</Link>
      <Link to="/Room">here</Link>
    </div>
  );
}

export default App;
