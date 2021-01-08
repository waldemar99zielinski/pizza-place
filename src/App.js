import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Panel from "./Panel";
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Panel />
      </div>
    </Router>
  );
}

export default App;
