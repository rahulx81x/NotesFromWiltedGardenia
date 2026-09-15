import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { usePoems } from "../data/usePoems";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import GardeniaEmblem from "../components/GardeniaEmblem";

export default function Archive() {
  const { poems, loading, error } = usePoems();
  const [searchParams, setSearchParams] = useSearchParams();
  const tagFromUrl = searchParams.get("tag");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [activeTag, setActiveTag] = useState(tagFromUrl || "all");
  const [expandedId, setExpandedId] = useState(null);

  // Sync if URL query param changes
  useEffect(() => {
    if (tagFromUrl) {
      setActiveTag(tagFromUrl);
    }
  }, [tagFromUrl]);

  const handleTagChange = (tag) => {
    const nextTag = activeTag.toLowerCase() === tag.toLowerCase() ? "all" : tag;
    setActiveTag(nextTag);
    const newParams = new URLSearchParams(searchParams);
    if (nextTag === "all") {
      newParams.delete("tag");
    } else {
      newParams.set("tag", nextTag);
    }
    setSearchParams(newParams, { replace: true });
  };

  // Dynamically extract all unique tags from the CSV notes (semicolon-separated)
  const availableTags = useMemo(() => {
    const tagSet = new Set();
    poems.forEach((p) => {
      if (Array.isArray(p.tags)) {
        p.tags.forEach((tag) => {
          if (tag) tagSet.add(tag);
        });
      }
    });
    return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
  }, [poems]);

  // Extract available years
  const availableYears = useMemo(() => {
    const years = new Set();
    poems.forEach((p) => {
      if (p.publish_date && p.publish_date.length >= 4) {
        years.add(p.publish_date.substring(0, 4));
      }
    });
    return Array.from(years).sort((a, b) => b.localeCompare(a));
  }, [poems]);

  // Client-side filtering
  const filteredPoems = useMemo(() => {
    return poems.filter((poem) => {
      const matchesYear =
        selectedYear === "all" ||
        (poem.publish_date && poem.publish_date.startsWith(selectedYear));

      const query = searchTerm.toLowerCase().trim();
      const matchesQuery =
        !query ||
        (poem.name && poem.name.toLowerCase().includes(query)) ||
        (poem.intro && poem.intro.toLowerCase().includes(query)) ||
        (poem.contents && poem.contents.toLowerCase().includes(query));

      const matchesTag =
        activeTag === "all" ||
        (Array.isArray(poem.tags) &&
          poem.tags.some((t) => t.toLowerCase() === activeTag.toLowerCase()));

      return matchesYear && matchesQuery && matchesTag;
    });
  }, [poems, searchTerm, selectedYear, activeTag]);

  const togglePreview = (e, poemId) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedId((prev) => (prev === poemId ? null : poemId));
  };

  return (
    <div className="page-enter">
      <header className="archive-header">
        <div className="archive-header-badge">
          <GardeniaEmblem size={24} />
          <span>Chronicle of Leaves</span>
        </div>
        <h2 className="archive-title">Archive of Standalone Notes</h2>
        <p className="archive-description">
          A chronological collection of unvoiced observations, solitary drafts, and dated notes preserved across seasons.
        </p>
      </header>

      {/* Controls: Search, Year, and Dynamic Tags from CSV */}
      <div className="archive-controls-bar">
        <div className="search-input-wrapper">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            className="archive-search-input"
            placeholder="Search lines, titles, or excerpts…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search archive poems"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="clear-search-btn"
              title="Clear search"
            >
              ×
            </button>
          )}
        </div>

        {availableYears.length > 0 && (
          <select
            className="archive-year-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            aria-label="Filter by year"
          >
            <option value="all">All Years ({poems.length})</option>
            {availableYears.map((year) => {
              const count = poems.filter((p) => p.publish_date.startsWith(year)).length;
              return (
                <option key={year} value={year}>
                  {year} ({count})
                </option>
              );
            })}
          </select>
        )}

        {/* Dynamic Themes/Tags Filter Chips from Notes CSV */}
        {availableTags.length > 0 && (
          <div className="archive-tag-chips" aria-label="Filter by themes">
            <span className="chips-label">Themes:</span>
            <button
              onClick={() => handleTagChange("all")}
              className={`tag-chip ${activeTag === "all" ? "active" : ""}`}
            >
              All Themes
            </button>
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagChange(tag)}
                className={`tag-chip ${activeTag.toLowerCase() === tag.toLowerCase() ? "active" : ""}`}
              >
                #{tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {loading ? (
        <LoadingState count={5} />
      ) : error && poems.length === 0 ? (
        <ErrorState message={error} />
      ) : filteredPoems.length === 0 ? (
        <div className="empty-results">
          <p>No notes found matching your criteria.</p>
          {(searchTerm || selectedYear !== "all" || activeTag !== "all") && (
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedYear("all");
                handleTagChange("all");
              }}
              className="clear-filters-link"
            >
              Reset filters
            </button>
          )}
        </div>
      ) : (
        <nav className="archive-table" aria-label="Archive list">
          <div className="archive-table-header">
            <span className="col-date">Date</span>
            <span className="col-title">Title & Excerpt</span>
            <span className="col-stanzas">Length</span>
            <span className="col-action">Read</span>
          </div>

          {filteredPoems.map((poem, index) => {
            const isExpanded = expandedId === poem.id;
            const previewLines = poem.contents
              ? poem.contents.trim().split("\n").slice(0, 4).join("\n")
              : "";
            const stanzas = poem.contents
              ? poem.contents.trim().split(/\n\s*\n/).filter(Boolean).length
              : 1;

            return (
              <div
                key={poem.id}
                className={`archive-row-container ${isExpanded ? "expanded" : ""}`}
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div className="archive-item">
                  <time className="archive-item-date" dateTime={poem.publish_date}>
                    {poem.publish_date || "Undated"}
                  </time>

                  <div className="archive-item-content">
                    <Link to={`/poem/${poem.id}`} className="archive-item-link">
                      <span className="archive-item-title">{poem.name}</span>
                    </Link>
                    <div className="archive-item-subline">
                      <span className="archive-item-author">By {poem.author || "Rahul Gouri"}</span>
                      {poem.intro && (
                        <>
                          <span className="meta-separator">·</span>
                          <span className="archive-item-intro-preview">{poem.intro}</span>
                        </>
                      )}
                      {poem.tags && poem.tags.length > 0 && (
                        <div className="archive-item-tags">
                          {poem.tags.map((tag) => (
                            <button
                              key={tag}
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleTagChange(tag);
                              }}
                              className={`archive-mini-tag ${activeTag.toLowerCase() === tag.toLowerCase() ? "active" : ""}`}
                              title={`Filter by #${tag}`}
                            >
                              #{tag}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <span className="archive-item-stanzas">
                    {stanzas} {stanzas === 1 ? "Stanza" : "Stanzas"}
                  </span>

                  <div className="archive-item-actions">
                    <button
                      onClick={(e) => togglePreview(e, poem.id)}
                      className="preview-toggle-btn"
                      title={isExpanded ? "Collapse preview" : "Quick preview stanzas"}
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? "Hide" : "Preview"}
                    </button>
                    <Link
                      to={`/poem/${poem.id}`}
                      className="archive-item-arrow"
                      aria-label={`Read ${poem.name}`}
                    >
                      →
                    </Link>
                  </div>
                </div>

                {/* Inline Accordion Preview */}
                {isExpanded && (
                  <div className="archive-inline-preview">
                    {poem.intro && <p className="preview-intro">{poem.intro}</p>}
                    <pre className="preview-stanzas">{previewLines}…</pre>
                    <div className="preview-footer-row">
                      {poem.tags && poem.tags.length > 0 && (
                        <div className="preview-tags-list">
                          {poem.tags.map((t) => (
                            <span key={t} className="preview-tag-badge">#{t}</span>
                          ))}
                        </div>
                      )}
                      <Link to={`/poem/${poem.id}`} className="preview-read-more">
                        <span>Open full piece</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      )}
    </div>
  );
}
