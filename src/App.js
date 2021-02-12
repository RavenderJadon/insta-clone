import "./App.css";
import Context from "./Global/Context";
import Navbar from "./components/Navbar";
import Modal from "./components/Model";
import Stories from "./components/Stories";

function App() {
  return (
    <Context>
      <Navbar />
      <div className="container">
      <Stories />
      </div>
      <Modal />
    </Context>
  );
}

export default App;
