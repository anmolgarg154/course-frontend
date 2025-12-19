import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import Header from "./Components/Header.js";
import Courses from "./Components/Courses.js";
import Packs from "./Components/Packs.js";

function App() {
  return (
     <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="" element={<Courses />} />
        <Route path="/packs" element={<Packs/>} />
      </Routes>
    </>
  );
}

export default App;
  