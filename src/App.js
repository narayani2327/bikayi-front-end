import Navbar from "./components/Navbar";
import Data from "./components/Data";
import BackGround from "./components/BackGround";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BackGround/>
      <Data/>
      <h6 className="name">&#169;Narayani H <br></br>The National Institute of Engineering,  Mysore</h6>
    </div>
  );
}
export default App;