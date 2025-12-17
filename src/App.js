import { Routes, Route } from "react-router-dom";
import Header from "./Components/header";
import Home from "./Components/home";
import Courses from "./Components/courses";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
  );
}

export default App;
