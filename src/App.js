import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import MainPage from "./components/blog/Mainpage/MainPage";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />

        <Route path="/services" element={<Services />} />

        <Route path="/blogs" element={<MainPage />} />

        <Route path="/About" element={<About />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
