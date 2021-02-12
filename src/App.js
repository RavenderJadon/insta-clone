import "./App.css";
import Context from "./Global/Context";
import Navbar from "./components/Navbar";
import Modal from "./components/Model";
import Stories from "./components/Stories";
import Create from "./components/Create";
import Posts from "./components/Posts";

function App() {
  return (
    <Context>
      <Navbar />
      <div className="container">
        <Stories />
        <Create />
        <Posts />
      </div>
      <Modal />
    </Context>
  );
}

export default App;
