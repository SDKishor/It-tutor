import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Chackout } from "./pages/chackout/Chackout";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Signin } from "./pages/signin/Signin";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/chackout" element={<Chackout></Chackout>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signin" element={<Signin></Signin>} />
      </Routes>
    </div>
  );
}

export default App;
