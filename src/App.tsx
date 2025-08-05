import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Spotlight from "./components/Spotlight";
import Footer from "./components/Footer";
import MemoryGallery from "./components/MemoryGallery";
import AuroraBackground from "./components/AuroraBackground";
import Login from "./components/Login";

export interface Memory {
  image: string;
  caption: string;
  time: string;
}

function App() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleUpload = (memory: Memory) => {
    setMemories([memory, ...memories]);
  };

  return (
    <Router>
      <div className="overflow-x-hidden min-h-screen bg-gradient-to-b from-black via-indigo-900 to-purple-950">
        <AuroraBackground />
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero onUpload={handleUpload} isLoggedIn={isLoggedIn} />
                <MemoryGallery memories={memories} />
                <Spotlight />
              </>
            }
          />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
