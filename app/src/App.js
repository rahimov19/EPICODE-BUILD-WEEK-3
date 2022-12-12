import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FooterPart from "./Components/FooterPart";
import MainRight from "./Components/MainRight";
import Profile from "./Components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnotherUser from "./Components/AnotherUser";
import NavBar from "./Components/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<MainRight />} />
        <Route path="/guest/:id" element={<AnotherUser />} />
      </Routes>
      <FooterPart />
    </BrowserRouter>
  );
}
export default App;
