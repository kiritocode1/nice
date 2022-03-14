// import logo from './logo.svg';
import './App.css';
// import { animated as a, useSpring } from "react-spring";
import Navbar from './Navbar';
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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      {/* <a.div className="bg-green-500 w-20 h-20" style={star}/> */}
      <Navbar/>
    </div>
  );
}

export default App;
