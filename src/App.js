import "./App.css";
import Context from "./Global/Context";
import Navbar from "./components/Navbar";
import Modal from "./components/Model";
import Stories from "./components/Stories";
import Create from "./components/Create";
import Posts from "./components/Posts";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Context>
      <Navbar />
      <div className="container">
        <Stories />
        <Create />
        <Posts />
        <Sidebar />
      </div>
      <Modal />
    </Context>
  );
}

export default App;
