import { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { ContentProvider } from "./context/ContentContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingPetals from "./components/FloatingPetals";
import GardeniaBackgroundMotif from "./components/GardeniaBackgroundMotif";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import PoemView from "./pages/PoemView";
import Anthologies from "./pages/Anthologies";
import Colophon from "./pages/Colophon";

export default function App() {
  const [petalsEnabled, setPetalsEnabled] = useState(() => {
    return localStorage.getItem("wilted_petals_enabled") !== "false";
  });

  const handleTogglePetals = (setter) => {
    setPetalsEnabled((prev) => {
      const next = typeof setter === "function" ? setter(prev) : setter;
      localStorage.setItem("wilted_petals_enabled", String(next));
      return next;
    });
  };

  return (
    <ContentProvider>
      <div className="app-wrapper">
      {/* Background antique botanical gardenia engraving watermark */}
      <GardeniaBackgroundMotif />

      {/* Background ambient drifting petals (reduced volume) */}
      <FloatingPetals enabled={petalsEnabled} />

      {/* Main site header */}
      <Header
        petalsEnabled={petalsEnabled}
        setPetalsEnabled={handleTogglePetals}
      />

      <main className="main-container" id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/notes" element={<Navigate to="/archive" replace />} />
          <Route path="/poem/:id" element={<PoemView />} />
          <Route path="/anthologies" element={<Anthologies />} />
          <Route path="/colophon" element={<Colophon />} />
          <Route path="/note" element={<Navigate to="/colophon" replace />} />
          <Route path="/about" element={<Navigate to="/colophon" replace />} />
          <Route
            path="*"
            element={
              <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", marginBottom: "1rem" }}>
                  404 · Unpenned Page
                </h2>
                <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--ink-muted)", marginBottom: "2rem" }}>
                  The requested corridor does not exist in this archive.
                </p>
                <Link to="/" className="back-link">
                  ← Return to Home
                </Link>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
    </ContentProvider>
  );
}
