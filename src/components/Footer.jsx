import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Link to="/colophon" title="Read Colophon & Curator's Note">
        <img
          src="/gardenia.svg"
          alt="Wilted gardenia motif"
          className="footer-motif"
          width="28"
          height="28"
        />
      </Link>
      <div className="footer-colophon">
        Notes from a Wilted Gardenia
      </div>
      <div className="footer-links-group">
        <Link to="/colophon" className="footer-text-link">
          Colophon & Curator’s Note
        </Link>
        <span className="footer-sep">·</span>
        <Link to="/archive" className="footer-text-link">
          Complete Archive
        </Link>
      </div>
      <div className="footer-sub">
        An archive of solitary hours · {currentYear}
      </div>
    </footer>
  );
}
