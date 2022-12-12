import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import Profile from "./Components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnotherUser from "./Components/AnotherUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/guest/:id" element={<AnotherUser />} />
      </Routes>
    </BrowserRouter>
=======
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
>>>>>>> navBar
  );
}

export default App;
