import { Link } from "react-router-dom";
import GardeniaEmblem from "./GardeniaEmblem";
import { DEFAULT_AUTHOR } from "../data/config";
import { getStanzaCount } from "../utils/poemHelpers";
import { useBookmarks } from "../hooks/useBookmarks";

const MAX_CARD_TAGS = 5;

export default function NoteCard({ poem, index = 0 }) {
  const { id, name, intro, publish_date, contents } = poem;
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(id);

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(id);
  };

  const stanzas = getStanzaCount(contents);
  const tags = poem.tags || [];
  const visibleTags = tags.slice(0, MAX_CARD_TAGS);
  const hiddenCount = tags.length - visibleTags.length;

  return (
    <article
      className="note-card staggered-reveal"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Background gardenia watermark */}
      <div className="card-gardenia-watermark" aria-hidden="true">
        <GardeniaEmblem size={90} />
      </div>

      {/* Bookmark Action */}
      <button
        type="button"
        onClick={handleBookmark}
        className={`card-bookmark-btn ${bookmarked ? "active" : ""}`}
        title={bookmarked ? "Remove bookmark (saved locally)" : "Bookmark this note (saved locally)"}
        aria-label={bookmarked ? "Remove bookmark" : "Bookmark this note"}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill={bookmarked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      <Link to={`/poem/${id}`} className="note-card-inner">
        <div className="note-card-meta">
          {publish_date && (
            <time dateTime={publish_date} className="note-card-date">
              {publish_date}
            </time>
          )}
          <span className="meta-separator">·</span>
          <span className="note-card-author">{poem.author || DEFAULT_AUTHOR}</span>
          <span className="meta-separator">·</span>
          <span className="note-card-stanzas">
            {stanzas} {stanzas === 1 ? "Stanza" : "Stanzas"}
          </span>
        </div>

        <h2 className="note-card-title">{name}</h2>
        {intro && <p className="note-card-intro">{intro}</p>}

        {tags.length > 0 && (
          <div className="note-card-tags">
            {visibleTags.map((tag) => (
              <span key={tag} className="note-tag-pill">
                #{tag}
              </span>
            ))}
            {hiddenCount > 0 && (
              <span
                className="note-tag-pill tag-more"
                title={`+${hiddenCount} more: ${tags.slice(MAX_CARD_TAGS).map((t) => `#${t}`).join(", ")}`}
              >
                +{hiddenCount}
              </span>
            )}
          </div>
        )}

        <div className="note-card-read-cue">
          <span>Read piece</span>
          <span className="cue-arrow" aria-hidden="true">→</span>
        </div>
      </Link>
    </article>
  );
}
