import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import ImageContentSection from "./components/ImageContentSection";
import ImageGrid from "./components/ImageGrid";
import About from "./components/About";
import RoomsSuite from "./pages/RoomsSuite";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RoomsSuite />} />
        <Route path="/Gallery" element={<ImageGrid />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
