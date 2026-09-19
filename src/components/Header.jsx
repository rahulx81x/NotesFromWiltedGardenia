import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import GardeniaEmblem from "./GardeniaEmblem";
import { useContent } from "../context/useContent";

export default function Header({ petalsEnabled = true, setPetalsEnabled = () => {} }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { poems = [], loading = false } = useContent();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("wilted_gardenia_theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("wilted_gardenia_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleRandomPoem = () => {
    if (!poems || poems.length === 0) return;
    const currentId = location.pathname.startsWith("/poem/")
      ? location.pathname.split("/")[2]
      : null;
    const candidates = poems.filter((p) => p.id !== currentId);
    const pool = candidates.length > 0 ? candidates : poems;
    const randomPick = pool[Math.floor(Math.random() * pool.length)];
    if (randomPick?.id) {
      navigate(`/poem/${randomPick.id}`);
    }
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-top">
          <Link to="/" className="site-brand" aria-label="Notes from a Wilted Gardenia Homepage">
            <div className="brand-lockup">
              <GardeniaEmblem size={48} className="header-gardenia-icon" />
              <div className="brand-titles">
                <h1 className="site-title">Notes from a Wilted Gardenia</h1>
                <p className="site-subtitle">the silence of things left unsaid</p>
              </div>
            </div>
          </Link>

          {/* Desktop & Mobile Header controls */}
          <div className="header-controls">
            {/* Drifting Petals Canvas Toggle */}
            <button
              onClick={() => setPetalsEnabled((prev) => !prev)}
              className={`ambient-toggle-btn ${petalsEnabled ? "active" : ""}`}
              title={petalsEnabled ? "Hide drifting gardenia petals" : "Show drifting gardenia petals"}
              aria-label="Toggle drifting gardenia petals"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                {/* Slender gardenia petal icon with midrib */}
                <path d="M12 21.5C12 21.5 6.5 16.5 6.5 10C6.5 5.5 9 2.5 12 2.5C15 2.5 17.5 5.5 17.5 10C17.5 16.5 12 21.5 12 21.5Z" />
                <path d="M12 20.5V9" opacity="0.65" />
              </svg>
              <span className="btn-hint-label">Petals</span>
            </button>

            {/* Random Note / Surprise Me Toggle */}
            <button
              onClick={handleRandomPoem}
              disabled={loading || !poems.length}
              className="random-poem-btn"
              title="Surprise me with a random note"
              aria-label="Surprise me with a random note"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 3h5v5" />
                <path d="M4 20L21 3" />
                <path d="M21 16v5h-5" />
                <path d="M15 15l6 6" />
                <path d="M4 4l5 5" />
              </svg>
            </button>

            {/* Reading Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={theme === "light" ? "Switch to candle-lit dark reading mode" : "Switch to parchment light reading mode"}
              aria-label="Toggle reading theme"
            >
              {theme === "light" ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <nav className="site-nav" aria-label="Main Navigation">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <span className="nav-label-full">Latest Notes</span>
            <span className="nav-label-mobile">Notes</span>
          </NavLink>
          <NavLink to="/archive" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <span className="nav-label-full">Notes & Archive</span>
            <span className="nav-label-mobile">Archive</span>
          </NavLink>
          <NavLink to="/anthologies" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <span className="nav-label-full">Curated Anthologies</span>
            <span className="nav-label-mobile">Anthologies</span>
          </NavLink>
          <NavLink to="/colophon" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <span className="nav-label-full">Curator's Note</span>
            <span className="nav-label-mobile">Curator</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
