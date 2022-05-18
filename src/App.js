import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { RequireAuth } from "./components/RequireAuth";
import { About } from "./pages/about/About";
import { Blogs } from "./pages/blogs/Blogs";
import { Chackout } from "./pages/chackout/Chackout";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { NotFound } from "./pages/NotFound/NotFound";
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
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/about" element={<About></About>} />

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
