import "./App.css";
import Context from "./Global/Context";
import Navbar from "./components/Navbar";
import Modal from "./components/Model";
import Stories from "./components/Stories";

function App() {
  return (
    <Context>
      <Navbar />
      <Modal />
      <Stories />
    </Context>
  );
}

export default App;
