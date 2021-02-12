import "./App.css";
import Context from "./Global/Context";
import Navbar from "./components/Navbar";
import Modal from "./components/Model";

function App() {
  return (
    <Context>
      <Navbar />
      <Modal />
    </Context>
  );
}

export default App;
