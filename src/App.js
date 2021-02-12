import "./App.css";
import Context from "./Global/Context";
import Navbar from "./components/Navbar";
import Modal from "./components/Model";
import Stories from "./components/Stories";
import Create from "./components/Create";

function App() {
  return (
    <Context>
      <Navbar />
      <div className="container">
      <Stories />
      </div>
      <Modal />
      <Create />
    </Context>
  );
}

export default App;
