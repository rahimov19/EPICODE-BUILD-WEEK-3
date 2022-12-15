import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnotherUser from "./Components/AnotherUser";
import NavBar from "./Components/NavBar";
import MainPage from "./Components/MainPage";
import EditExperiemcePage from "./Components/EditExperiemcePage";
import Notifications from "./Components/Notification/Notifications";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />

        <Route path="/" element={<MainPage />} />
        <Route path="/guest/:id" element={<AnotherUser />} />
        <Route path="/profile/experience" element={<EditExperiemcePage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
