import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./component/MainLayout/MainLayout";
import "./assets/style/main.scss";
import LoginForm from "./page/Login";
import RegistrationForm from "./page/Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<div></div>}></Route>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
