import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { usePoems } from "../data/usePoems";
import { DEFAULT_AUTHOR } from "../data/config";
import { useBookmarks } from "../hooks/useBookmarks";
import { useReadingHistory } from "../hooks/useReadingHistory";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { getStanzaCount, getReadMinutes } from "../utils/poemHelpers";
import { getRelatedPoems } from "../utils/relatedPoems";
import { exportPoemImage, getPoemExportPlans } from "../utils/exportPoemImage";
import { formatDisplayDate, toISODateString } from "../utils/dateHelpers";
import NoteCard from "../components/NoteCard";
import LoadingState from "../components/LoadingState";
import PetalDivider from "../components/PetalDivider";
import GardeniaEmblem from "../components/GardeniaEmblem";

export default function PoemView() {
  const { id } = useParams();
  const { poems, loading } = usePoems();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { recordRead } = useReadingHistory();

  const [fontSizeLevel, setFontSizeLevel] = useState("normal"); // 'small' | 'normal' | 'large'
  const [shareFeedback, setShareFeedback] = useState(null); // null | 'copied' | 'shared'
  const [isExporting, setIsExporting] = useState(false);
  const [isExportMenuOpen, setIsExportMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const exportMenuRef = useRef(null);

  const currentIndex = poems.findIndex((p) => p.id === id);
  const poem = currentIndex !== -1 ? poems[currentIndex] : null;

  useDocumentTitle(poem?.name);

  // Record read in local device history on view
  useEffect(() => {
    if (poem?.id) {
      recordRead(poem.id);
    }
  }, [poem?.id, recordRead]);

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

  // Close export dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (exportMenuRef.current && !exportMenuRef.current.contains(e.target)) {
        setIsExportMenuOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsExportMenuOpen(false);
      }
    };

    if (isExportMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isExportMenuOpen]);

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

  // Metrics & Export Plans
  const stanzas = getStanzaCount(poem.contents);
  const readMinutes = getReadMinutes(poem.contents);
  const relatedPoems = getRelatedPoems(poem, poems, 3);
  const exportPlans = poem ? getPoemExportPlans(poem) : null;

  const handleExportFormat = async (formatKey) => {
    if (!poem || isExporting) return;
    setIsExporting(true);
    setIsExportMenuOpen(false);
    try {
      await exportPoemImage(poem, { format: formatKey });
    } finally {
      setIsExporting(false);
    }
  };

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

      <article className="poem-reader-view">
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

            {/* Bookmark Note */}
            <button
              onClick={() => toggleBookmark(poem.id)}
              className={`tool-btn text-btn ${isBookmarked(poem.id) ? "active" : ""}`}
              title={isBookmarked(poem.id) ? "Remove bookmark (saved locally)" : "Bookmark this note (saved locally)"}
              aria-label={isBookmarked(poem.id) ? "Remove bookmark" : "Bookmark this note"}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill={isBookmarked(poem.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
              <span>{isBookmarked(poem.id) ? "Saved" : "Save"}</span>
            </button>

            {/* Export as Image Card Dropdown */}
            <div className="card-export-dropdown" ref={exportMenuRef}>
              <button
                type="button"
                onClick={() => setIsExportMenuOpen((prev) => !prev)}
                disabled={isExporting}
                className={`tool-btn text-btn ${isExportMenuOpen ? "active" : ""}`}
                title="Export note as Instagram card (choose 4:5 Post or 9:16 Story)"
                aria-expanded={isExportMenuOpen}
                aria-haspopup="true"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span>{isExporting ? "Packing…" : "Card"}</span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    marginLeft: "1px",
                    transition: "transform 0.2s ease",
                    transform: isExportMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {isExportMenuOpen && exportPlans && (
                <div className="export-format-menu" role="menu" aria-label="Choose card format">
                  <div className="export-menu-header">
                    <span>Export Format</span>
                  </div>

                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => handleExportFormat("post")}
                    className="export-menu-option"
                  >
                    <div className="export-option-icon post-aspect" aria-hidden="true">
                      <svg width="15" height="19" viewBox="0 0 16 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="1" y="1" width="14" height="18" rx="2" />
                      </svg>
                    </div>
                    <div className="export-option-details">
                      <div className="export-option-title-row">
                        <span className="export-option-name">Feed Post</span>
                        <span className="export-option-ratio">4:5</span>
                      </div>
                      <span className="export-option-meta">
                        1080 × 1350 · {exportPlans.post.isMultiSlide ? `${exportPlans.post.slideCount} slides (ZIP)` : "1 card (PNG)"}
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => handleExportFormat("story")}
                    className="export-menu-option"
                  >
                    <div className="export-option-icon story-aspect" aria-hidden="true">
                      <svg width="13" height="23" viewBox="0 0 14 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="1" y="1" width="12" height="22" rx="2" />
                      </svg>
                    </div>
                    <div className="export-option-details">
                      <div className="export-option-title-row">
                        <span className="export-option-name">Story</span>
                        <span className="export-option-ratio">9:16</span>
                      </div>
                      <span className="export-option-meta">
                        1080 × 1920 · {exportPlans.story.isMultiSlide ? `${exportPlans.story.slideCount} slides (ZIP)` : "1 card (PNG)"}
                      </span>
                    </div>
                  </button>
                </div>
              )}
            </div>

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
              <time className="poem-date" dateTime={toISODateString(poem.publish_date)}>
                {formatDisplayDate(poem.publish_date, "long")}
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
          {poem.publish_date && <span className="sig-date">{formatDisplayDate(poem.publish_date, "long")}</span>}
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
                <span className="pagination-date">{formatDisplayDate(prevPoem.publish_date, "short")}</span>
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
                <span className="pagination-date">{formatDisplayDate(nextPoem.publish_date, "short")}</span>
              </Link>
            ) : (
              <div className="pagination-empty">
                <span className="pagination-direction">Later Note</span>
                <span className="pagination-title">Latest recorded entry</span>
              </div>
            )}
          </div>
        </nav>

        {/* Kindred Notes (Connected by Shared Themes) */}
        {relatedPoems.length > 0 && (
          <div className="kindred-notes-wrapper">
            <PetalDivider className="poem-terminal-divider" />
            <section className="kindred-notes-section" aria-labelledby="kindred-notes-heading">
              <div className="section-heading-group">
                <div>
                  <span className="section-eyebrow">Echoes & Resonances</span>
                  <h2 id="kindred-notes-heading" className="section-title">
                    Kindred Notes
                  </h2>
                </div>
                <span className="section-meta-hint">Connected by shared themes</span>
              </div>
              <div className="recent-notes-list">
                {relatedPoems.map((rp, idx) => (
                  <NoteCard key={rp.id} poem={rp} index={idx} />
                ))}
              </div>
            </section>
          </div>
        )}
      </article>
    </>
  );
}
