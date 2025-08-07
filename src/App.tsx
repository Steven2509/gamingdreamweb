// ❌ Không cần Memory type, không cần memories state nữa
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Spotlight from "./components/Spotlight";
import Footer from "./components/Footer";
import MemoryGallery from "./components/MemoryGallery";
import BackGround from "./components/background";
import AuroraBackground from "./components/AuroraBackground";
import Login from "./components/Login";
import Team from './components/Team';
import GamePlay from './components/GamePlay';

import { useRef } from "react";
// ...các import khác như cũ

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const memoryGalleryRef = useRef<{ refetch: () => void }>(null);

  return (
    <Router>
      <div className="overflow-x-hidden min-h-screen">
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero
                  isLoggedIn={isLoggedIn}
                  onUploaded={() => memoryGalleryRef.current?.refetch()}
                />
                <MemoryGallery ref={memoryGalleryRef} isLoggedIn={isLoggedIn} />
                <Spotlight />
              </>
            }
          />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gameplay" element={<GamePlay />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <AuroraBackground />
        <BackGround />
        <Footer />
      </div>
    </Router>
  );
}


export default App;
