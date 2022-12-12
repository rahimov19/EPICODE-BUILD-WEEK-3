import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
  );
}

export default App;
