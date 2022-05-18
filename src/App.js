import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { RequireAuth } from "./components/RequireAuth";
import { Chackout } from "./pages/chackout/Chackout";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="/chackout"
          element={
            <RequireAuth>
              <Chackout></Chackout>
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
