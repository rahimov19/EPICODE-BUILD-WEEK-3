import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FooterPart from "./Components/FooterPart";
import MainRight from "./Components/MainRight";
import Profile from "./Components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnotherUser from "./Components/AnotherUser";


import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/guest/:id" element={<AnotherUser />} />
      </Routes>
    </BrowserRouter>

)}
