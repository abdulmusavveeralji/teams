import logo from "./logo.svg";
import "./App.css";
import Headers from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App h-full w-full">
      <Headers />
      <Sidebar />
    </div>
  );
}

export default App;
