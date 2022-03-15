// import logo from './logo.svg';
import './App.css';
// import { animated as a, useSpring } from "react-spring";
import Navbar from './Navbar';
// import music from './Components/music';
// import home from './Components/home';
import { Route ,Routes, Outlet} from 'react-router-dom';
import { Link } from 'react-router-dom';
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
      hello world
      <Routes>
        <Route path="/" element={<h1>test</h1>} />
        <Route path='/music' element={<music/>}/>
      </Routes>
      <Link to="/music">Music</Link>
      <Outlet/>
    </div>
  );
}

export default App;
