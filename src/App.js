import "./App.css";
import Context from "./Global/Context";
import Navbar from "./components/Navbar";
import Modal from "./components/Model";

function App() {
  const UseSelectNumber = (i) => {};
  return (
    <Context>
      <Navbar />
      <Modal />
      <div>
        <span>
          <div>new</div>
          <div>new</div>
          <div>new</div>
          <div>new</div>
          <div>new</div>
          <div>new</div>
          <div>new</div>
          <div>new</div>
          <div>new</div>
          <div>new</div>
          <div>new</div>
          <div>new</div>
          <div>new</div>
        </span>
      </div>
      <div>
        <myComponent>
          <div>
            <img />
          </div>
        </myComponent>
        <div>
          <span onClick={() => alert("g")}>this</span>
        </div>
      </div>
    </Context>
  );
}

export default App;
