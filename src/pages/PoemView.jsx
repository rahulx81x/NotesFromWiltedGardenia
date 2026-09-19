import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { usePoems } from "../data/usePoems";
import { DEFAULT_AUTHOR } from "../data/config";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { getStanzaCount, getReadMinutes } from "../utils/poemHelpers";
import LoadingState from "../components/LoadingState";
import PetalDivider from "../components/PetalDivider";
import GardeniaEmblem from "../components/GardeniaEmblem";

export default function PoemView() {
  const { id } = useParams();
  const { poems, loading } = usePoems();

  const [fontSizeLevel, setFontSizeLevel] = useState("normal"); // 'small' | 'normal' | 'large'
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [shareFeedback, setShareFeedback] = useState(null); // null | 'copied' | 'shared'
  const [scrollProgress, setScrollProgress] = useState(0);

  const currentIndex = poems.findIndex((p) => p.id === id);
  const poem = currentIndex !== -1 ? poems[currentIndex] : null;

  useDocumentTitle(poem?.name);

  // Scroll to top and reset state on poem change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Track reading scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="poem-reader-view">
        <LoadingState count={3} />
      </div>
    );
  }

  if (!poem) {
    return (
      <div className="poem-reader-view" style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <GardeniaEmblem size={50} className="empty-gardenia-icon" />
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", margin: "1.5rem 0 0.8rem" }}>
          Unrecorded Leaf
        </h2>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--ink-muted)", marginBottom: "2.5rem" }}>
          This page seems to have dissolved into the silence of time.
        </p>
        <Link to="/archive" className="back-link">
          ← Return to Archive
        </Link>
      </div>
    );
  }

  // Date-based pagination:
  // 0 = latest, length-1 = oldest
  const prevPoem = currentIndex < poems.length - 1 ? poems[currentIndex + 1] : null; // Earlier date
  const nextPoem = currentIndex > 0 ? poems[currentIndex - 1] : null; // Later date

  // Metrics
  const stanzas = getStanzaCount(poem.contents);
  const readMinutes = getReadMinutes(poem.contents);

  const sharePoem = async () => {
    const url = `${window.location.origin}/poem/${poem.id}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: poem.name, text: poem.intro || "", url });
        setShareFeedback("shared");
        setTimeout(() => setShareFeedback(null), 2400);
      } catch {
        // ignore user-cancelled share (AbortError)
      }
    } else {
      navigator.clipboard.writeText(url).then(() => {
        setShareFeedback("copied");
        setTimeout(() => setShareFeedback(null), 2400);
      });
    }
  };

  return (
    <>
      {/* Scroll Reading Progress Bar */}
      <div
        className="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <article className={`poem-reader-view ${isFocusMode ? "focus-mode-active" : ""}`}>
        {/* Top Breadcrumb & Reading Tools */}
        <div className="reader-top-bar">
          <Link to="/archive" className="back-link">
            <span aria-hidden="true">←</span>
            <span>Return to Index</span>
          </Link>

          <div className="reader-tools">
            {/* Font Size Adjuster */}
            <div className="tool-group" title="Adjust typography size">
              <button
                onClick={() => setFontSizeLevel("small")}
                className={`tool-btn ${fontSizeLevel === "small" ? "active" : ""}`}
                aria-label="Small font size"
              >
                A-
              </button>
              <button
                onClick={() => setFontSizeLevel("normal")}
                className={`tool-btn ${fontSizeLevel === "normal" ? "active" : ""}`}
                aria-label="Standard font size"
              >
                A
              </button>
              <button
                onClick={() => setFontSizeLevel("large")}
                className={`tool-btn ${fontSizeLevel === "large" ? "active" : ""}`}
                aria-label="Large font size"
              >
                A+
              </button>
            </div>

            {/* Focus Mode */}
            <button
              onClick={() => setIsFocusMode((prev) => !prev)}
              className={`tool-btn text-btn ${isFocusMode ? "active" : ""}`}
              title={isFocusMode ? "Exit Focus Mode" : "Enter Focus Mode (dims background chrome)"}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M3 12h1m16 0h1M12 3v1m0 16v1" />
              </svg>
              <span>{isFocusMode ? "Focusing" : "Focus"}</span>
            </button>

            {/* Share Piece */}
            <button
              onClick={sharePoem}
              className="tool-btn text-btn share-btn"
              title="Share piece or copy link"
              aria-label={shareFeedback === "copied" ? "Link copied" : shareFeedback === "shared" ? "Shared" : "Share"}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              <span>{shareFeedback === "copied" ? "Link copied" : shareFeedback === "shared" ? "Shared" : "Share"}</span>
            </button>
          </div>
        </div>

        {/* Header & Metadata */}
        <header className="poem-header">
          <div className="poem-header-meta">
            {poem.publish_date && (
              <time className="poem-date" dateTime={poem.publish_date}>
                {poem.publish_date}
              </time>
            )}
            <span className="meta-separator">·</span>
            <span className="poem-author">By {poem.author || DEFAULT_AUTHOR}</span>
            <span className="meta-separator">·</span>
            <span className="poem-read-time">
              {stanzas} {stanzas === 1 ? "stanza" : "stanzas"} · ~{readMinutes} min read
            </span>
          </div>

          <h1 className="poem-title">{poem.name}</h1>

          {poem.intro && (
            <p className="poem-intro">
              {poem.intro}
            </p>
          )}
        </header>

        {/* Preserved Stanza Body with Font Size Modifier */}
        <div
          className={`poem-body font-size-${fontSizeLevel}`}
          tabIndex="0"
          aria-label="Poem text"
        >
          {poem.contents}
        </div>

        {/* Poet Attribution Signature */}
        <div className="poem-author-signature">
          <span className="sig-author">— {poem.author || DEFAULT_AUTHOR}</span>
          {poem.publish_date && <span className="sig-date">{poem.publish_date}</span>}
        </div>

        {/* Dynamic Poem Theme Tags from CSV */}
        {poem.tags && poem.tags.length > 0 && (
          <div className="poem-tags-row" aria-label="Themes">
            <span className="poem-tags-label">Themes:</span>
            {poem.tags.map((tag) => (
              <Link
                key={tag}
                to={`/archive?tag=${encodeURIComponent(tag)}`}
                className="poem-theme-chip"
                title={`Explore all pieces tagged #${tag}`}
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}

        {/* Botanical Ornamental Divider */}
        <PetalDivider className="poem-terminal-divider" />

        {/* Date-ordered Pagination */}
        <nav className="poem-pagination" aria-label="Previous and Next poems">
          <div className="pagination-item prev">
            {prevPoem ? (
              <Link to={`/poem/${prevPoem.id}`} title={prevPoem.name} className="pagination-link">
                <span className="pagination-direction">
                  <span aria-hidden="true">←</span> Earlier Note
                </span>
                <span className="pagination-title">{prevPoem.name}</span>
                <span className="pagination-date">{prevPoem.publish_date}</span>
              </Link>
            ) : (
              <div className="pagination-empty">
                <span className="pagination-direction">Earlier Note</span>
                <span className="pagination-title">First recorded entry</span>
              </div>
            )}
          </div>

          <div className="pagination-item next">
            {nextPoem ? (
              <Link to={`/poem/${nextPoem.id}`} title={nextPoem.name} className="pagination-link">
                <span className="pagination-direction">
                  Later Note <span aria-hidden="true">→</span>
                </span>
                <span className="pagination-title">{nextPoem.name}</span>
                <span className="pagination-date">{nextPoem.publish_date}</span>
              </Link>
            ) : (
              <div className="pagination-empty">
                <span className="pagination-direction">Later Note</span>
                <span className="pagination-title">Latest recorded entry</span>
              </div>
            )}
          </div>
        </nav>
      </article>
    </>
  );
}
