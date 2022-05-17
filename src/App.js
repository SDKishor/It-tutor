import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Chackout } from "./pages/chackout/Chackout";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/chackout" element={<Chackout></Chackout>} />
      </Routes>
    </div>
  );
}

export default App;
