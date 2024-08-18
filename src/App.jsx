import { Outlet } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <main className="main-container">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
