// import logo from './logo.svg';
import './App.css';
// import { animated as a, useSpring } from "react-spring";
// import Navbar from './Navbar';
// import music from './Components/music';
// import home from './Components/home';
import { Route ,Routes} from 'react-router-dom';
import Home from './Components/home';
// import { Link } from 'react-router-dom';
import Room from './Components/class';


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
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/music" element={<Room />} />
        
      </Routes>
    </div>
  );
}

export default App;
