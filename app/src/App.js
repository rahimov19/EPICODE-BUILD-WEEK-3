import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Notifications from "./Components/Notification/Notifications";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={

<Notifications/>
    }/>

  </Routes>
  </BrowserRouter>
  </>;
}

export default App;
